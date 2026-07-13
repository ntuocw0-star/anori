# REPOSITORY-MASTER-INDEX.md

**Version:** 1.0 Stable
**Frozen:** 2026-07-13
**Status:** This directory structure is permanent. Contents grow; structure does not.

---

## Six Directories — Frozen

```
repository/
│
├── knowledge/          Evidence base — ET · EA · KA · Knowledge Graph
├── governance/         All rules and principles
├── validation/         Benchmark · Validation reports
├── pilot/              Real-world cases · Gaps · Learning Loop
├── product/            PR · Operations · MVP
└── archive/            Sprint closeouts (historical record)
```

**Rule:** New content always goes inside one of these six.
No new first-level directory will be added.
If something does not fit, it goes in the closest match and a note is added here.

---

## knowledge/

*Evidence that answers questions. Grows as new high-quality evidence appears.*

```
knowledge/
├── ET-000030.md          Participation Differences (Full Evidence)
├── ET-000031.md          Participation × Family Support (Moderate)
├── ET-000032.md          Participation × Parenting Stress (Moderate + Temporal)
├── ET-000033-v2.md       Participation × Family Functioning (Limited)
├── ET-000034.md          Participation × FQOL (Limited)
├── ET-000035.md          Family Support × Parenting Stress (Moderate)
├── ET-000036.md          Family Support × Family Functioning (Limited)
├── ET-000037.md          Family Support × FQOL (Moderate)
├── EA-000024.md          [EA files: 024–037 + KR-001–005]
│   ...
├── EA-KR-001.md          Ares-Brage 2025 · FCC × CP Meta-analysis
├── EA-KR-002.md          McCarthy 2022 · FCC × EI SR
├── EA-KR-003.md          Kuo 2025 · PIIs × FQOL SR
├── EA-KR-004.md          Ragni 2022 · Parent Training × PS SR
├── EA-KR-005.md          Dionísio 2024 · FCC × ID SR
├── KA-FQOL-001.md        Concept: Family Quality of Life
├── KA-FF-001.md          Concept: Family Functioning
├── KNOWLEDGE-GRAPH-v2.0.md
├── CROSS-CONCEPT-ET-COMPARISON-v4.0.md
└── KNOWLEDGE-REFRESH-2026.md
```

**What goes here:** New ET · New EA · New KA · Knowledge Graph updates · Annual Refresh records
**What does not go here:** Governance rules · Pilot cases · Product changes · Sprint records

---

## governance/

*Rules that keep the Repository honest. Grows only when a new principle is needed.*

```
governance/
├── STABILITY-PRINCIPLE-v1.0.md
├── CLINICAL-NAVIGATION-STANDARD-v1.0.md
├── CLINICAL-ANSWER-TEMPLATE-v2.1.md
├── ANSWER-GENERATION-GUIDELINE-v1.0.md
├── KNOWLEDGE-MAINTENANCE.md
├── REPOSITORY-SCOPE.md
├── REPOSITORY-DEVELOPMENT-ROADMAP-v1.0.md
└── V1.0-STABLE.md
```

**What goes here:** Principles · Standards · Templates · Policies · Scope definitions
**What does not go here:** Individual cases · Sprint records · Product changes

---

## validation/

*Evidence that the system works. Baseline is fixed; comparisons are added.*

```
validation/
├── VALIDATION-REPORT-v1.0.md      Sprint 27 baseline
├── CLINICAL-QUESTION-BENCHMARK-v1.0.md   12-question regression set
└── RC1-RELEASE-CANDIDATE.md
```

**What goes here:** Re-run benchmark results · New validation reports · RC files
**Rule:** Baseline documents are never edited. New versions are new files.

---

## pilot/

*Where the system learns from real use. The most active directory after launch.*

```
pilot/
├── PILOT-INDEX.md                 Navigation hub (frozen filename)
├── PILOT-CASE-LOG.md              All real-world cases (frozen filename)
├── PILOT-GAP-LOG.md               All gaps (frozen filename)
├── PILOT-REVISION-LOG.md          All knowledge-layer revisions (frozen filename)
├── PILOT-QUESTION-SET-v1.0.md     50-question design set
├── RC1-FINDINGS.md
└── SPRINT-33-CLOSEOUT.md ... SPRINT-36-CLOSEOUT.md
```

**What goes here:** New cases · Gap updates · Revision records · Pilot reports
**Frozen filenames (never rename):**
- PILOT-INDEX.md
- PILOT-CASE-LOG.md
- PILOT-GAP-LOG.md
- PILOT-REVISION-LOG.md

---

## product/

*Where the product layer lives and evolves.*

```
product/
├── PRODUCT-MVP-v1.0.md
├── PRODUCT-REVISION-LOG.md        All PRs (frozen filename)
├── PR-000001-HOMEPAGE-DYNAMIC-CONTENT.md
├── PUBLIC-PILOT-CHECKLIST-v1.0.md
└── OPERATIONS-DASHBOARD.md        Daily operations tracking (frozen filename)
```

**What goes here:** PRs · Operations data · Product specs · Usability test records
**Frozen filenames (never rename):**
- PRODUCT-REVISION-LOG.md
- OPERATIONS-DASHBOARD.md

---

## archive/

*History. Read-only after closing.*

```
archive/
├── SPRINT-24-CLOSEOUT.md
├── SPRINT-25-CLOSEOUT.md
├── SPRINT-26-CLOSEOUT.md
├── SPRINT-27-CLOSEOUT.md
├── SPRINT-28-CLOSEOUT.md
├── SPRINT-29-CLOSEOUT.md  [implicit]
├── SPRINT-30-CLOSEOUT.md  [implicit]
├── SPRINT-31-CLOSEOUT.md
├── SPRINT-32-CLOSEOUT.md
├── SPRINT-33-CLOSEOUT.md
├── SPRINT-34-CLOSEOUT.md
├── SPRINT-35-CLOSEOUT.md
├── SPRINT-36-CLOSEOUT.md
└── SPRINT-37-CLOSEOUT.md  [= V1.0 freeze Sprint]
```

**What goes here:** Closed Sprint records only. Nothing is edited after closing.
**What does not go here:** Active documents · Current pilot data · Live governance

---

## The Permanent Loop

```
Real user
    │
    ▼
pilot/PILOT-CASE-LOG.md
    │
    ▼
Gap found?
    │
    ├── Product gap ──► product/PR-000XXX
    │
    └── Knowledge gap ──► governance/KNOWLEDGE-MAINTENANCE.md
                              │
                    Monthly: knowledge/ update
                    Sprint condition met: archive/ + knowledge/ Sprint
```

This loop does not require new directories.
It does not require new governance documents.
It requires only: real users, honest observation, and disciplined response.

---

## What This Index Is Not

This is not a promise that the Repository is complete.
This is a commitment that the Repository is stable enough to be useful —
and humble enough to keep learning.

---

## Final Note

The six directories were not designed in advance.
They emerged from 37 Sprints of building, validating, and serving.
They are stable because they reflect what the Repository actually does —
not what it was planned to do.

Keep them. Fill them. Do not add a seventh.
