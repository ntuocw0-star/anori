# Architecture Notes — Sprint 25 Update

**Updated:** 2026-07-13 · Sprint 25 Close
**Adds to:** ARCHITECTURE-NOTES.md (Sprint 24 version)

---

## Search Priority Pattern — UPGRADED TO VALIDATED

**Previous Status:** Strong Candidate (v1.0, 2 cases)
**Current Status:** **Validated** (4 cases, consistent, no counter-example)

**Pattern Statement:**
> When a Systematic Review already covers the Cross-concept Q, Cross-sectional empirical studies are not prioritized as Primary Search Targets. They are deferred as Complementary Evidence Candidates.
> When no SR exists, SR search remains Priority 1 before any other design level.

**Validated Cases:**

| ET | SR at Search Start | Cross-sectional Handling |
|---|---|---|
| ET-000031 | EA-000024 in repo (SR) | Kaelin 2024 deferred |
| ET-000032 | Bult 2011 found as SR | Majnemer 2008 deferred |
| ET-000033 | No SR found | All cross-sectionals evaluated; SR still priority |
| ET-000034 | No SR found | SR prioritized; cross-sectional as primary only after SR confirmed absent |

**Candidate for Template v1.4:** Yes — recommend inclusion in next Template update.

---

## Cross-concept Question Direction Principle — NEW CANDIDATE

**Status:** Candidate
**Validated:** First case — ET-000034 (Participation × FQOL)

**Principle:**
> Cross-concept Research Questions should be direction-neutral ("How are A and B associated?").
> Relationship Direction is determined by accumulated evidence, not by ET title order.

**Evidence from 4 ETs:**
```
ET-000031:  Family Support → Participation    (title: Participation × Family Support)
ET-000032:  Parenting Stress → Participation  (title: Participation × Parenting Stress)
ET-000033:  Not established                   (title: Participation × Family Functioning)
ET-000034:  Participation → FQOL             (title: Participation × FQOL)
            ↑ Direction reversed from title order — handled without structural change
```

**Freeze Condition:** Confirmed across ≥4 Cross-concept ETs with varying directions.
**Current case count:** 4 (freeze condition met — consider upgrading to Validated)
**Recommendation:** Upgrade to Validated; add to Cross-concept ET building protocol.

---

## Concept Boundary Enforcement — NEW CANDIDATE

**Status:** Candidate
**First Case:** ET-000033 · Family Functioning × Participation (Sprint 25 Step 2)

**Principle:**
> Concept membership is determined by the operationalization used in a study, not by the label in the title or abstract.
> A study using "family functioning" language but measuring only demographic variables does not qualify as Family Functioning (McMaster/FAD) evidence.

**Validated Case:**
- PMC10874512 rejected for ET-000033 Evidence Base
- Reason: "Family Functioning" operationalized as income/education/family type (demographic)
- Not equivalent to FAD/McMaster construct
- Decision: Not qualified under Concept Boundary

**Freeze Condition:** Second independent Concept Boundary decision applied consistently.

---

## Evidence Level Scale — Confirmed Operational

Four ETs confirm the scale works as designed:

| Evidence Base | Level | Confirmed by |
|---|---|---|
| Single cross-sectional | Limited | ET-000033, ET-000034 |
| SR (observational) | Moderate | ET-000031, ET-000032 |
| SR + Longitudinal | Moderate (not Strong) | ET-000032 |
| Intervention | Strong (threshold) | Not yet reached |

**No revision needed.** Scale performs correctly.

---

## Pattern Registry Update

| Pattern | Previous Status | Current Status |
|---|---|---|
| Shared Dataset Pattern | Validated | Validated (unchanged) |
| Evidence Upgrade Event | Validated | Validated (unchanged) |
| Environment-specific Evidence Pattern | Strong Candidate | Strong Candidate (unchanged) |
| Gap Classification System | Strong Candidate | Strong Candidate (unchanged) |
| **Search Priority Pattern** | Strong Candidate | **Validated** ← upgraded this Sprint |
| **Cross-concept Question Direction Principle** | — (new) | Candidate |
| **Concept Boundary Enforcement** | — (new) | Candidate |
