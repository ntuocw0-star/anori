/**
 * src/types/path.ts
 * Anori — Shared Path Content Types
 *
 * Sprint 13 · Phase A — TypeScript Interface Unification
 * Data Contract: Sprint 13 Phase 0 (approved)
 * Scope: path-content.json + 20 path components
 *
 * Design decisions (from Phase 0):
 *   1. evidence_box.stars — retained in type; component display deferred
 *   2. next_steps.page: null — temporarily compatible (cross-path); marked deprecated
 *   3. Link fields (page/href) — discriminated union, mutually exclusive
 *   4. Missing field = not used; null / {} / [] never used as placeholder
 */

// ─────────────────────────────────────────────────────────────
// § 1. Primitive ID types
// ─────────────────────────────────────────────────────────────

/** Route-level path identifier: p001 … p006 (and future paths) */
export type PathId =
  | 'p001'
  | 'p002'
  | 'p003'
  | 'p004'
  | 'p005'
  | 'p006'
  | (string & {}); // allows future paths without breaking existing narrowing

/** Within-path page identifier: journey | u001 | sup001 | s001 … s006 */
export type PathPageId =
  | 'journey'
  | 'u001'
  | 'sup001'
  | 's001'
  | 's002'
  | 's003'
  | 's004'
  | 's005'
  | 's006'
  | (string & {}); // allows future page types

// ─────────────────────────────────────────────────────────────
// § 2. Link discriminated unions
// ─────────────────────────────────────────────────────────────

/**
 * Internal same-path page link.
 * Resolves to /paths/{pathId}/{page} at render time.
 */
export interface InternalPageLink {
  page: PathPageId;
  href?: never;
}

/**
 * Direct absolute href link — used for cross-path navigation
 * and any link that cannot be expressed as a same-path page ID.
 */
export interface DirectHrefLink {
  href: string;
  /** @deprecated Pass href only; page should be omitted or never.
   *  Legacy data may carry page: null — treat as equivalent to omitted. */
  page?: null;
}

// ─────────────────────────────────────────────────────────────
// § 3. Required page fields (all 54 pages)
// ─────────────────────────────────────────────────────────────

/** hero_title — page main heading */
export type HeroTitle = string;

/** hero_companion — subtitle / companion text */
export type HeroCompanion = string;

/** reframe — cognitive reframe text; single string, may contain \n */
export type ReframeContent = string;

/** today_box — today's action prompt; single string */
export type TodayBoxContent = string;

/** closing — page closing text; single string */
export type ClosingContent = string;

// ─────────────────────────────────────────────────────────────
// § 4. Optional content block types
// ─────────────────────────────────────────────────────────────

// ── 4.1 EvidenceBox ─────────────────────────────────────────

/**
 * evidence_box — research support block
 * Present on 48/54 pages (absent on journey pages).
 *
 * Decision: stars is retained in the type as Evidence Quality metadata.
 * Current value is always 5. Component does not yet display it — that is
 * intentional and does not constitute a data error.
 */
export interface EvidenceKALink {
  id: string;
  label: string;
  href: string;
}

export interface EvidenceBoxContent {
  /** Research quality rating 1-5. Currently always 5. Retained for future use. */
  stars: number;
  headline: string;
  /** At least 1 item. Empty array not allowed -- omit the block instead. */
  points: [string, ...string[]];
  emotion_translation: string;
  /** Optional link to the full Knowledge Article for this evidence block. */
  ka_link?: EvidenceKALink;
}

// ── 4.2 ParentMessage ───────────────────────────────────────

/**
 * parent_message — direct message to the parent
 * Present on 21/54 pages.
 * label is optional; component default: "给你的话"
 */
export interface ParentMessageContent {
  /** Display label. Component default: "给你的话" */
  label?: string;
  text: string;
}

// ── 4.3 SupportGrid ─────────────────────────────────────────

/**
 * Card within support_grid.cards.
 * Either page (same-path) or href (cross-path/external) — never both.
 */
export type SupportCard =
  | (InternalPageLink & {
      icon: string;
      title: string;
      desc: string;
    })
  | (DirectHrefLink & {
      icon: string;
      title: string;
      desc: string;
    });

/**
 * support_grid — support method grid block
 * Present on 1/54 pages (p001/journey).
 * label optional; component default: "支持方式"
 */
export interface SupportGridContent {
  /** Display label. Component default: "支持方式" */
  label?: string;
  title: string;
  subtitle?: string;
  /** At least 1 card. Empty array not allowed. */
  cards: [SupportCard, ...SupportCard[]];
}

// ── 4.4 NextStep ────────────────────────────────────────────

/**
 * Single item within next_steps array.
 * Either page (same-path) or href (cross-path) — never both.
 *
 * Migration note: legacy data uses page: null + href for cross-path items.
 * New data should omit page entirely and use href only (DirectHrefLink).
 */
export type NextStep =
  | (InternalPageLink & {
      label: string;
      desc: string;
    })
  | (DirectHrefLink & {
      label: string;
      desc: string;
    });

/**
 * next_steps — next navigation steps
 * Present on 48/54 pages.
 * At least 1 item when present. Omit field entirely when no next steps.
 */
export type NextStepsContent = [NextStep, ...NextStep[]];

// ── 4.5 CrossPath ────────────────────────────────────────────

/**
 * cross_path — cross-path navigation block
 * Present on 7/54 pages.
 *
 * Note: current component reads label/title/desc/href but not path.
 * path is retained in the type for data integrity validation.
 * Future: verify that href starts with /paths/{path}/
 */
export interface CrossPathContent {
  label: string;
  /** Target path ID — retained for validation; not yet read by component */
  path: PathId;
  title: string;
  desc: string;
  href: string;
}

// ── 4.6 DecisionBox ─────────────────────────────────────────

export interface DecisionColumn {
  title: string;
  /** At least 1 item. Empty array not allowed. */
  items: [string, ...string[]];
}

/**
 * decision_box — two-column decision aid
 * Present on 2/54 pages.
 */
export interface DecisionBoxContent {
  can_consider: DecisionColumn;
  wait_first: DecisionColumn;
}

// ── 4.7 LifeMoment ──────────────────────────────────────────

export interface LifeMoment {
  emoji: string;
  moment: string;
  how: string;
}

/**
 * life_moments — daily moment opportunities array
 * Present on 8/54 pages.
 * At least 1 item when present.
 */
export type LifeMomentsContent = [LifeMoment, ...LifeMoment[]];

// ── 4.8 PathReflection ───────────────────────────────────────

/**
 * path_reflection — end-of-path reflection block
 * Present on 6/54 pages (s006 pages).
 */
export interface PathReflectionContent {
  title: string;
  /** At least 1 item. Empty array not allowed. */
  steps: [string, ...string[]];
}

// ── 4.9 Step (StepList) ─────────────────────────────────────

/**
 * Single step within the steps array.
 * example is optional; component renders it conditionally.
 */
export interface Step {
  number: number;
  title: string;
  body: string;
  example?: string;
}

/**
 * steps — step-by-step instruction list
 * Present on 26/54 pages.
 * At least 1 item when present.
 */
export type StepsContent = [Step, ...Step[]];

// ── 4.10 Timeline ────────────────────────────────────────────

export interface TimelineStage {
  period: string;
  what_to_expect: string;
}

/**
 * timeline — time reference block
 * Present on 4/54 pages.
 */
export interface TimelineContent {
  intro?: string;
  /** At least 1 stage. Empty array not allowed. */
  stages: [TimelineStage, ...TimelineStage[]];
}

// ── 4.11 CompareTable ────────────────────────────────────────

export interface CompareTableCol {
  title: string;
  color: string;
  icon: string;
  /** At least 1 row. Empty array not allowed. */
  rows: [string, ...string[]];
}

/**
 * compare_table — two-column comparison table
 * Present on 2/54 pages.
 */
export interface CompareTableContent {
  label: string;
  /** Currently always 2 columns. */
  cols: [CompareTableCol, ...CompareTableCol[]];
}

// ── 4.12 StateMap ────────────────────────────────────────────

export interface StateMapItem {
  state: string;
  /** CSS color token or value used for card theming */
  color: string;
  icon: string;
  timing: string;
  signals: string;
  what_works: string;
  what_not: string;
}

/**
 * state_map — emotional/behavioral state map
 * Present on 2/54 pages.
 */
export type StateMapContent = [StateMapItem, ...StateMapItem[]];

// ── 4.13 AbcCard ────────────────────────────────────────────

export interface AbcCard {
  letter: string;
  /** CSS color token or value used for card theming */
  color: string;
  label: string;
  question: string;
  /** At least 1 prompt. Empty array not allowed. */
  prompts: [string, ...string[]];
  example?: string;
}

/**
 * abc_cards — A-B-C observation framework cards
 * Present on 1/54 pages (p003/sup001).
 * Currently always 3 cards (A, B, C).
 */
export type AbcCardsContent = [AbcCard, ...AbcCard[]];

// ── 4.14 DoDont ─────────────────────────────────────────────

/**
 * do_dont — do / don't comparison block
 * Present on 15/54 pages.
 */
export interface DoDontContent {
  /** At least 1 item. */
  do: [string, ...string[]];
  /** At least 1 item. */
  dont: [string, ...string[]];
}

// ── 4.15 ProfessionalBlock ───────────────────────────────────

/**
 * professional_block — professional support guidance
 * Present on 48/54 pages.
 */
export interface ProfessionalBlockContent {
  if_have: string;
  if_not: string;
}

// ── 4.16 ConversationStarter ─────────────────────────────────

/**
 * conversation_starter — conversation opening prompt
 * Present on 8/54 pages.
 */
export interface ConversationStarterContent {
  title: string;
  text: string;
}

// ── 4.17 ProgressSignals ─────────────────────────────────────

/**
 * progress_signals — progress indicator block
 * Present on 9/54 pages.
 */
export interface ProgressSignalsContent {
  title: string;
  /** At least 1 item. */
  items: [string, ...string[]];
}

// ── 4.18 PathMap (journey pages) ─────────────────────────────

export interface PathMapItem {
  step: number;
  label: string;
  page: PathPageId;
  desc: string;
}

// ─────────────────────────────────────────────────────────────
// § 5. Full page content shape
// ─────────────────────────────────────────────────────────────

/**
 * PageContent — complete shape of one page entry in path-content.json
 *
 * Required fields (all 54 pages): hero_title, hero_companion,
 * reframe, today_box, closing.
 *
 * All other fields are optional; absence means the block is not rendered.
 */
export interface PageContent {
  // Required
  hero_title: HeroTitle;
  hero_companion: HeroCompanion;
  reframe: ReframeContent;
  today_box: TodayBoxContent;
  closing: ClosingContent;

  // High-frequency optional (89% pages)
  evidence_box?: EvidenceBoxContent;
  professional_block?: ProfessionalBlockContent;
  next_steps?: NextStepsContent;

  // Mid-frequency optional
  steps?: StepsContent;
  parent_message?: ParentMessageContent;
  do_dont?: DoDontContent;
  progress_signals?: ProgressSignalsContent;
  life_moments?: LifeMomentsContent;
  conversation_starter?: ConversationStarterContent;
  cross_path?: CrossPathContent;

  // Journey-page fields
  what_you_might_feel?: string[];
  path_map?: PathMapItem[];
  support_grid?: SupportGridContent;

  // End-of-path fields
  path_reflection?: PathReflectionContent;
  what_teacher_needs?: string[];

  // Specialised optional blocks
  timeline?: TimelineContent;
  decision_box?: DecisionBoxContent;
  state_map?: StateMapContent;
  compare_table?: CompareTableContent;
  abc_cards?: AbcCardsContent;

  // Path-specific informational strings (u001 variants)
  what_is_aac?: string;
  what_is_pecs?: string;
  what_is_sgd?: string;
  first_step_intro?: string;
  if_ready?: string;
  possible_reasons?: string[];
  what_progress_looks_like?: string[];
  common_misreadings?: string[];
}

/** Full path-content.json shape */
export type PathContentData = Record<PathId, Record<PathPageId, PageContent>>;
