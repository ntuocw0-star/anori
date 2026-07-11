export type BundleType = 'ka-one-page' | 'ka-printable' | 'ka-parent-guide' | 'ea-reading-edition';
export type BundleStatus = 'available' | 'coming-soon' | 'draft' | 'fallback';

export interface BuildInfo {
  repositoryVersion: string;
  generatorVersion: string;
}

export interface BundleSections {
  type: string;
  keyPoints: string;
  whatYouCanDo: string;
  whatToAvoid: string;
  seekHelpIf: string;
  evidence: string;
}

export const DEFAULT_SECTIONS_ZH: BundleSections = {
  type: '知识摘要',
  keyPoints: '你需要知道的',
  whatYouCanDo: '现在可以怎么做',
  whatToAvoid: '先避免什么',
  seekHelpIf: '什么时候寻求帮助',
  evidence: '内容来源',
};

export interface EvidenceRef {
  id: string;
  title: string;
  missing: boolean;
}

export interface KAOnePageBundle {
  schemaId: 'KA-OnePage';
  schemaVersion: '1.0';
  bundleType: 'ka-one-page';
  contentId: string;
  title: string;
  subtitle?: string;
  summary?: string;
  keyPoints: string[];
  whatYouCanDo: string[];
  whatToAvoid: string[];
  seekHelpIf: string[];
  evidence: {
    level?: string;
    note?: string;
    refs: EvidenceRef[];
  };
  source: {
    topic?: string;
    seriesIds: string[];
    canonicalUrl: string;
  };
  meta: {
    repositoryVersion: string;
    generatorVersion: string;
    schemaVersion: string;
  };
  sections: BundleSections;
}

export interface BundlePanelItem {
  label: string;
  href: string | null;
  status: BundleStatus;
  bundleType?: BundleType;
  action?: 'open' | 'download' | 'print';
  hint?: string;
}
