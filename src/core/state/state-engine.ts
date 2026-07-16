/**
 * state-engine.ts
 * 34C · State Engine Implementation
 *
 * Contract: 33C State Specification
 * Blueprint: 30D Reading Journey + 31B Entry System
 *
 * Storage is abstracted via StorageAdapter.
 * Default implementation uses localStorage.
 * Future: swap adapter for server-side session without changing engine logic.
 */

import type {
  CoverageLayer,
  CoverageLayerStatus,
  NormalizedSeries,
  NormalizedET,
} from './graph-builder';

// ─── Storage Abstraction ──────────────────────────────────────────────────────

export interface StorageAdapter {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}

/** Default: localStorage adapter */
export const localStorageAdapter: StorageAdapter = {
  get: (key) => {
    try { return localStorage.getItem(key); }
    catch { return null; }
  },
  set: (key, value) => {
    try { localStorage.setItem(key, value); }
    catch { /* silent fail in SSR */ }
  },
  remove: (key) => {
    try { localStorage.removeItem(key); }
    catch { /* silent fail */ }
  },
};

/** SSR-safe no-op adapter（build time / server） */
export const noopAdapter: StorageAdapter = {
  get: () => null,
  set: () => {},
  remove: () => {},
};

// ─── Types ────────────────────────────────────────────────────────────────────

export type UserStateValue =
  | 'New Explorer'
  | 'Active Learner'
  | 'Deep Explorer'
  | 'Returning Parent';

export type InferenceSource =
  | 'cold_entry_default'
  | 'landing_content'
  | 'reading_history'
  | 'ea_access'
  | 'warm_entry_restored';

export type ContentType = 'EA' | 'ET' | 'KA';

export type CognitiveStage = 'Orient' | 'Understand' | 'Integrate' | 'Continue';

export interface UserState {
  current: UserStateValue;
  inferred_from: InferenceSource;
  confidence: 'high' | 'medium' | 'low';
  last_updated: string;
}

export interface ReadingRecord {
  content_id: string;
  content_type: ContentType;
  coverage_layer?: CoverageLayer;
  completed_at: string;
  cognitive_stages_reached: CognitiveStage[];
}

export interface TopicCoverageLayerState {
  status: 'not_started' | 'in_progress' | 'completed';
  content_id?: string;
  completed_at?: string;
}

export interface ResumePoint {
  content_id: string;
  content_type: ContentType;
  href: string;
  cognitive_stage: CognitiveStage;
}

export interface JourneyState {
  active_topic: string | null;
  active_series: string | null;
  reading_history: ReadingRecord[];
  topic_coverage: Record<string, Record<CoverageLayer, TopicCoverageLayerState>>;
  entry_type: 'cold' | 'warm';
  resume_point: ResumePoint | null;
  session_start: string;
  last_active: string;
}

export interface EntryContext {
  type: 'cold' | 'warm';
  landing_content?: { id: string; content_type: ContentType; topic?: string };
  restored_user_state?: UserState;
  restored_journey_state?: JourneyState;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEYS = {
  USER_STATE:    'anori:user_state',
  JOURNEY_STATE: 'anori:journey_state',
} as const;

/** Transition rules（UserState Machine，来自 33C） */
const STATE_TRANSITIONS: Record<UserStateValue, Array<{
  trigger: string;
  next: UserStateValue;
}>> = {
  'New Explorer': [
    { trigger: 'reads_third_et',    next: 'Active Learner' },
    { trigger: 'accesses_ea',       next: 'Deep Explorer' },
    { trigger: 'returns_new_topic', next: 'Returning Parent' },
  ],
  'Active Learner': [
    { trigger: 'accesses_ea',       next: 'Deep Explorer' },
    { trigger: 'returns_new_topic', next: 'Returning Parent' },
  ],
  'Deep Explorer': [
    { trigger: 'returns_new_topic', next: 'Returning Parent' },
  ],
  'Returning Parent': [
    { trigger: 'completes_topic',   next: 'Active Learner' },
    { trigger: 'accesses_ea',       next: 'Deep Explorer' },
  ],
};

/** Infer User State from landing content type */
function inferStateFromLanding(
  contentType: ContentType | undefined,
): { state: UserStateValue; confidence: 'high' | 'medium' | 'low'; source: InferenceSource } {
  if (!contentType) {
    return { state: 'New Explorer', confidence: 'low', source: 'cold_entry_default' };
  }
  if (contentType === 'EA') {
    return { state: 'Deep Explorer', confidence: 'medium', source: 'landing_content' };
  }
  if (contentType === 'ET') {
    return { state: 'Active Learner', confidence: 'medium', source: 'landing_content' };
  }
  // KA or other
  return { state: 'New Explorer', confidence: 'medium', source: 'landing_content' };
}

/** Infer trigger from reading record */
function inferTrigger(
  record: ReadingRecord,
  allRecords: ReadingRecord[],
): string | null {
  // accesses_ea
  if (record.content_type === 'EA') return 'accesses_ea';

  // reads_third_et：ET 总数达到 3
  if (record.content_type === 'ET') {
    const etCount = allRecords.filter(r => r.content_type === 'ET').length;
    if (etCount >= 3) return 'reads_third_et';
  }

  return null;
}

// ─── Empty State Factories ────────────────────────────────────────────────────

function emptyUserState(): UserState {
  return {
    current: 'New Explorer',
    inferred_from: 'cold_entry_default',
    confidence: 'low',
    last_updated: new Date().toISOString(),
  };
}

function emptyJourneyState(): JourneyState {
  const now = new Date().toISOString();
  return {
    active_topic: null,
    active_series: null,
    reading_history: [],
    topic_coverage: {},
    entry_type: 'cold',
    resume_point: null,
    session_start: now,
    last_active: now,
  };
}

// ─── State Engine ─────────────────────────────────────────────────────────────

export class StateEngine {
  private storage: StorageAdapter;

  constructor(storage: StorageAdapter = localStorageAdapter) {
    this.storage = storage;
  }

  // ── Persistence ─────────────────────────────────────────────────────────────

  loadUserState(): UserState | null {
    const raw = this.storage.get(STORAGE_KEYS.USER_STATE);
    if (!raw) return null;
    try { return JSON.parse(raw) as UserState; }
    catch { return null; }
  }

  saveUserState(state: UserState): void {
    this.storage.set(STORAGE_KEYS.USER_STATE, JSON.stringify(state));
  }

  loadJourneyState(): JourneyState | null {
    const raw = this.storage.get(STORAGE_KEYS.JOURNEY_STATE);
    if (!raw) return null;
    try { return JSON.parse(raw) as JourneyState; }
    catch { return null; }
  }

  saveJourneyState(state: JourneyState): void {
    this.storage.set(STORAGE_KEYS.JOURNEY_STATE, JSON.stringify(state));
  }

  clearState(): void {
    this.storage.remove(STORAGE_KEYS.USER_STATE);
    this.storage.remove(STORAGE_KEYS.JOURNEY_STATE);
  }

  // ── Entry System（31B）──────────────────────────────────────────────────────

  /**
   * Initialize state on entry.
   * Cold Entry: build from scratch.
   * Warm Entry: restore from storage.
   */
  initializeState(entry: EntryContext): {
    userState: UserState;
    journeyState: JourneyState;
    entry_type: 'cold' | 'warm';
  } {
    if (entry.type === 'warm' && entry.restored_user_state && entry.restored_journey_state) {
      // Warm Entry：直接恢复
      return {
        userState: entry.restored_user_state,
        journeyState: {
          ...entry.restored_journey_state,
          entry_type: 'warm',
          last_active: new Date().toISOString(),
        },
        entry_type: 'warm',
      };
    }

    // Cold Entry：推断初始 State
    const inferred = inferStateFromLanding(entry.landing_content?.content_type);
    const userState: UserState = {
      current: inferred.state,
      inferred_from: inferred.source,
      confidence: inferred.confidence,
      last_updated: new Date().toISOString(),
    };

    const journeyState: JourneyState = {
      ...emptyJourneyState(),
      active_topic: entry.landing_content?.topic ?? null,
      entry_type: 'cold',
    };

    return { userState, journeyState, entry_type: 'cold' };
  }

  /**
   * Attempt warm entry by loading from storage.
   * Returns null if no stored state exists (→ cold entry).
   */
  attemptWarmEntry(landing_content?: EntryContext['landing_content']): {
    userState: UserState;
    journeyState: JourneyState;
    entry_type: 'cold' | 'warm';
  } {
    const storedUser = this.loadUserState();
    const storedJourney = this.loadJourneyState();

    if (storedUser && storedJourney) {
      return this.initializeState({
        type: 'warm',
        landing_content,
        restored_user_state: storedUser,
        restored_journey_state: storedJourney,
      });
    }

    return this.initializeState({ type: 'cold', landing_content });
  }

  // ── Reading Record ───────────────────────────────────────────────────────────

  /**
   * Record that user read a piece of content.
   * Updates JourneyState and triggers UserState transitions if needed.
   */
  recordReading(
    journeyState: JourneyState,
    userState: UserState,
    record: Omit<ReadingRecord, 'completed_at'>,
  ): { journeyState: JourneyState; userState: UserState; transitioned: boolean } {
    const completed_at = new Date().toISOString();
    const fullRecord: ReadingRecord = { ...record, completed_at };

    // Append to history（避免重复）
    const alreadyRead = journeyState.reading_history.some(
      r => r.content_id === record.content_id
    );
    const newHistory = alreadyRead
      ? journeyState.reading_history
      : [...journeyState.reading_history, fullRecord];

    // Update topic coverage
    const newCoverage = this.updateTopicCoverage(
      journeyState.topic_coverage,
      journeyState.active_topic,
      fullRecord,
    );

    // Update resume point
    const resume_point: ResumePoint = {
      content_id: record.content_id,
      content_type: record.content_type,
      href: `#${record.content_id}`,    // Surface 会提供实际 href
      cognitive_stage: 'Integrate',     // 读完即到 Integrate
    };

    const newJourney: JourneyState = {
      ...journeyState,
      reading_history: newHistory,
      topic_coverage: newCoverage,
      resume_point,
      last_active: completed_at,
    };

    // Trigger UserState transition
    const trigger = inferTrigger(fullRecord, newHistory);
    let newUserState = userState;
    let transitioned = false;

    if (trigger) {
      const transitions = STATE_TRANSITIONS[userState.current] ?? [];
      const match = transitions.find(t => t.trigger === trigger);
      if (match) {
        newUserState = {
          current: match.next,
          inferred_from: 'reading_history',
          confidence: 'high',
          last_updated: completed_at,
        };
        transitioned = true;
      }
    }

    // Persist
    this.saveJourneyState(newJourney);
    if (transitioned) this.saveUserState(newUserState);

    return { journeyState: newJourney, userState: newUserState, transitioned };
  }

  // ── Topic Coverage ───────────────────────────────────────────────────────────

  private updateTopicCoverage(
    current: JourneyState['topic_coverage'],
    active_topic: string | null,
    record: ReadingRecord,
  ): JourneyState['topic_coverage'] {
    if (!active_topic || !record.coverage_layer) return current;

    const topicCoverage = current[active_topic] ?? {} as Record<CoverageLayer, TopicCoverageLayerState>;
    const updated: Record<CoverageLayer, TopicCoverageLayerState> = {
      ...topicCoverage,
      [record.coverage_layer]: {
        status: 'completed',
        content_id: record.content_id,
        completed_at: record.completed_at,
      },
    };

    return { ...current, [active_topic]: updated };
  }

  // ── Topic / Series Navigation ────────────────────────────────────────────────

  setActiveTopic(
    journeyState: JourneyState,
    topic_id: string,
    series_id?: string,
  ): JourneyState {
    const wasOnDifferentTopic =
      journeyState.active_topic !== null &&
      journeyState.active_topic !== topic_id;

    const newState: JourneyState = {
      ...journeyState,
      active_topic: topic_id,
      active_series: series_id ?? journeyState.active_series,
      last_active: new Date().toISOString(),
    };

    this.saveJourneyState(newState);

    // 如果切换到新 Topic，触发 returns_new_topic
    if (wasOnDifferentTopic) {
      return newState; // caller handles UserState transition
    }
    return newState;
  }

  // ── Derived State ────────────────────────────────────────────────────────────

  /** Get reading history IDs for deduplication in Recommendation */
  getReadingHistoryIds(journeyState: JourneyState): string[] {
    return journeyState.reading_history.map(r => r.content_id);
  }

  /** Check if content has been read */
  isRead(journeyState: JourneyState, content_id: string): boolean {
    return journeyState.reading_history.some(r => r.content_id === content_id);
  }

  /** Get resume point for Warm Entry UI */
  getResumePoint(journeyState: JourneyState): ResumePoint | null {
    return journeyState.resume_point;
  }
}

// ─── Singleton（Browser）/ Factory（SSR）────────────────────────────────────

/** Singleton for browser use */
let _engineInstance: StateEngine | null = null;

export function getStateEngine(): StateEngine {
  if (typeof window === 'undefined') {
    // SSR：返回无副作用的引擎
    return new StateEngine(noopAdapter);
  }
  if (!_engineInstance) {
    _engineInstance = new StateEngine(localStorageAdapter);
  }
  return _engineInstance;
}

/** For testing: create isolated engine with custom adapter */
export function createStateEngine(adapter: StorageAdapter): StateEngine {
  return new StateEngine(adapter);
}
