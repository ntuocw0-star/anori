import type { NormalizedKA } from '../../repository/adapters/ka';
import type { NormalizedEA } from '../../repository/adapters/ea';
import {
  DEFAULT_SECTIONS_ZH,
  type BuildInfo,
  type BundleSections,
  type EvidenceRef,
  type KAOnePageBundle,
} from '../bundle-types';

const LIMITS = {
  keyPoints: 3,
  whatYouCanDo: 4,
  whatToAvoid: 3,
  seekHelpIf: 3,
} as const;

export function buildKAOnePageBundle(
  ka: NormalizedKA,
  eaIndex: NormalizedEA[],
  buildInfo: BuildInfo,
  sections: BundleSections = DEFAULT_SECTIONS_ZH,
): KAOnePageBundle {
  const eaMap = new Map(eaIndex.map(ea => [ea.id, ea]));
  const evidenceRefs: EvidenceRef[] = ka.evidenceRefs.map(id => {
    const ea = eaMap.get(id);
    return ea
      ? { id, title: ea.source.paperTitle ?? id, missing: false }
      : { id, title: '来源记录暂未找到', missing: true };
  });

  return {
    schemaId: 'KA-OnePage',
    schemaVersion: '1.0',
    bundleType: 'ka-one-page',
    contentId: ka.id,
    title: ka.title ?? ka.id,
    subtitle: ka.subtitle,
    summary: ka.summary,
    keyPoints: ka.keyPoints.slice(0, LIMITS.keyPoints),
    whatYouCanDo: ka.whatYouCanDo.slice(0, LIMITS.whatYouCanDo),
    whatToAvoid: ka.whatToAvoid.slice(0, LIMITS.whatToAvoid),
    seekHelpIf: ka.seekHelpIf.slice(0, LIMITS.seekHelpIf),
    evidence: {
      level: ka.evidenceLevel,
      note: ka.evidenceNote,
      refs: evidenceRefs,
    },
    source: {
      topic: ka.topic,
      seriesIds: ka.seriesIds,
      canonicalUrl: ka.href ?? `/library/ka/${ka.id}`,
    },
    meta: {
      repositoryVersion: buildInfo.repositoryVersion,
      generatorVersion: buildInfo.generatorVersion,
      schemaVersion: '1.0',
    },
    sections,
  };
}
