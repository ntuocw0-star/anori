# PILOT INDEX

**Directory:** pilot/
**Last Updated:** 2026-07-13 · Sprint 33
**Purpose:** Single entry point for all real-world pilot data.
            Read this first. Everything else is one link away.

---

## Current Status

```
Phase:          Real-world Learning Loop (Sprint 33+)
Cases:          20 / 50 (first milestone)
Active Gaps:    7 open  (3 resolved)
Revisions:      5 applied
Overall:        Sprint 33 CLOSED · Sprint 34 planning
```

---

## Case Log

| Batch | Cases | Sprint | Status | Key Finding |
|---|---|---|---|---|
| Batch 1 | CASE-001–010 | Sprint 33 | ✅ Complete | Emotionally-Attuned + Triage validated |
| Batch 2 | CASE-011–020 | Sprint 33 | ✅ Complete | 3 new gap types; Extended Block 0 needed |
| Batch 3 | CASE-021–050 | Sprint 34 | ⏳ Planned | Target: 50-case milestone |

**→ Full case records:** `PILOT-CASE-LOG.md`

---

## Revision Log

| ID | Triggered by | Change | Status |
|---|---|---|---|
| REVISION-001 | CASE-005 | GAP-001 priority ↑ ★★→★★★ | ✅ Applied |
| REVISION-002 | CASE-003 | GAP-008 logged (Communication Gap) | ✅ Applied |
| REVISION-003 | CASE-009 | Block 0 design confirmed; note added | ✅ Documented |
| REVISION-004 | CASE-007 | Clinical Navigation validated | ✅ Documented |
| REVISION-005 | CASE-019 | Extended Block 0 needed for high-distress | ✅ Logged → Sprint 34 |

**→ Full revision records:** `PILOT-REVISION-LOG.md`

---

## Gap Log

### Open Gaps (priority order)

| ID | Type | Priority | Description | Sprint target |
|---|---|---|---|---|
| GAP-005 | Language + SDM | ★★★★★ | Emotionally-sensitive response | ✅ RESOLVED S32 |
| GAP-006 | Language | ★★★★★ | Multi-factor triage protocol | ✅ RESOLVED S32 |
| GAP-002 | Evidence | ★★★★★ | ASD-specific PS × Participation | Partial S32 · ongoing |
| GAP-004 | Evidence | ★★★★★ | FF intervention evidence | ✅ CLASSIFIED S32 (Field-level) |
| GAP-008 | Communication | ★★★ | Translating evidence to family conversation | S34 |
| GAP-009 | Expectation | ★★★ | Newly-diagnosed families: forward-looking framing | S34 |
| GAP-010 | Workflow | ★★★ | Resource-constrained families: practical steps | S34 |
| GAP-003 | KA | ★★★ | KA-FF tool selection guidance | S33+ |
| GAP-007 | Evidence | ★★★ | Special education placement × participation | S33+ |
| GAP-001 | Evidence | ★★★ | Single-parent family evidence | S33+ (priority ↑) |

**→ Full gap records:** `PILOT-GAP-LOG.md`

---

## Performance Dashboard

### Internal Validation (Sprint 27–29)

| Metric | Score |
|---|---|
| Navigation Accuracy (S27) | 91.7% → 100% (S29) |
| Clinical Answer Score | 89.4% → ~93.3% |
| Overclaim Rate | 0% |
| KG Level 3 Rate | 25% |

### Real-world Pilot (Sprint 33, n=20)

| Metric | Score | Notes |
|---|---|---|
| Understood | 20/20 (100%) | All user types |
| Actionable | 20/20 (100%) | Y or Partial |
| Would use again | 20/20 (100%) | |
| KG Level 3 triggered | 7/20 (35%) | ↑ from 25% baseline |
| Clinical Navigation used | 7/20 (35%) | All 7: positive reception |
| Emotionally-Attuned used | 7/20 (35%) | All 7: validated |
| Triage Protocol used | 3/20 (15%) | All 3: highest value for clinicians |
| New gap discovery rate | 3 gaps / 20 cases | Communication, Expectation, Workflow |

### User-type breakdown

| User | n | Key insight |
|---|---|---|
| Parent | 11 | Want to be heard before evidence; Communication Gap most acute |
| OT | 5 | Value triage and ET-035 (FS→PS) connection most |
| PT | 2 | Appreciate bidirectional uncertainty acknowledgment |
| Teacher | 2 | Need role-boundary clarity; Clinical Navigation to other services |
| SW | 1 | Cross-Hub synthesis most valued |

---

## Repository Maturity Stages

```
Sprint 1–25    Knowledge Building
               EA / ET / KA / Hub structure
               ✅ COMPLETE

Sprint 26–32   Knowledge Service
               Router / Template / Governance / Analytics
               ✅ COMPLETE

Sprint 33+     Real-world Learning Loop
               Pilot → Gap → Revision → Pilot
               ⏳ ACTIVE
```

---

## Sprint 34 Plan

**Theme:** Template v2.1 + Pilot Expansion

**Step 1:** Template v2.1
- Extended Block 0 for high-distress contexts (REVISION-005)
- "How to share this" optional block for parent-facing answers (GAP-008)
- Scope-boundary note for newly-diagnosed queries (GAP-009)

**Step 2:** Pilot Cases 021–050
- Continue same case format
- Target: 30 more cases across all user types
- Watch for: workflow gap patterns, communication gap frequency

**Step 3:** 50-case Milestone Report
- Updated performance dashboard
- Gap taxonomy v3 if new types emerge
- Regression check: does anything drop below Sprint 33 baseline?

**Step 4:** Sprint 34 Closeout + Sprint 35 planning

---

## How to Use This Directory

```
Start here (this file) → understand current state
         ↓
PILOT-CASE-LOG.md    → read individual cases
         ↓
PILOT-GAP-LOG.md     → check open gaps and priorities
         ↓
PILOT-REVISION-LOG.md → trace any change back to a real case
         ↓
SPRINT-33-CLOSEOUT.md → full Sprint 33 analysis
```

**Rule:** Every entry in any pilot file is traceable to a real case or a real revision. Nothing hypothetical lives here.

---

## Repository Evolution

```
Stage I    Literature Collection
           Individual studies identified and stored

Stage II   Knowledge Organization
           EA / ET / KA structure; Template v1.3 frozen

Stage III  Evidence Repository
           Evidence Level scale; Evidence Upgrade Events

Stage IV   Knowledge Network
           Two-Hub Network; Cross-concept ETs; Knowledge Graph

Stage V    Knowledge Service
           Question Router; Clinical Answer Template;
           Answer Generation Guideline; Regression Test;
           Clinical Navigation Standard

Stage VI   Real-world Learning
           Pilot cases; Real-world gap discovery;
           Revision traceability; Learning Loop active
```

**Current Stage: Stage VI (Pilot Active · Sprint 33+)**

Stage boundaries are not Sprint boundaries.
A Stage changes only when the Repository's fundamental capability changes —
not when a Sprint closes.

Stage VII entry conditions (not yet met):
- Automated evidence update pipeline
- Multi-site pilot (≥3 independent sites)
- Multi-language support
- Continuous learning from user interactions without manual review

---

## Frozen File Registry

The following files are permanently frozen by name.
Contents are updated; filenames never change.

```
PILOT-INDEX.md          ← this file
PILOT-CASE-LOG.md       ← all real-world cases
PILOT-GAP-LOG.md        ← all gaps, open and resolved
PILOT-REVISION-LOG.md   ← all revisions traceable to cases
```

**Freeze rationale:**
Router references these files by name.
Dashboard references these files by name.
Future citation (publication, GitHub) requires stable paths.
Any rename breaks traceability.

Frozen as of: 2026-07-13 · Sprint 33

---

## Version History

| Version | Date | Sprint | Change |
|---|---|---|---|
| v1.0 | 2026-07-13 | Sprint 33 | Initial index · 20 cases complete |
| v1.1 | TBD | Sprint 34 | After 50-case milestone |
