# CROSS-CONCEPT-ET-COMPARISON-v4.0

**Document Type:** Design Document (Long-term maintained)
**Version:** 4.0
**Updated:** 2026-07-13 · Sprint 26 Step 4
**Previous:** v3.0 (ET-031–035)
**Scope:** All 7 active Cross-concept ETs · Two-Hub Network

---

## Current Cross-concept ET Inventory

| ET | Connection | Hub | Sprint | Evidence Level |
|---|---|---|---|---|
| ET-000031 | Participation × Family Support | Participation | S24 Step 4 | Moderate |
| ET-000032 | Participation × Parenting Stress | Participation | S25 Step 1 | Moderate |
| ET-000033 | Participation × Family Functioning | Participation | S25 Step 2 | Limited |
| ET-000034 | Participation × FQOL | Participation | S25 Step 3 | Limited |
| ET-000035 | Family Support × Parenting Stress | Family Support | S26 Step 1 | Moderate |
| ET-000036 | Family Support × Family Functioning | Family Support | S26 Step 2 | Limited |
| ET-000037 | Family Support × FQOL | Family Support | S26 Step 3 | Moderate |

---

## Evidence Structure Comparison — Full Matrix (7 ETs)

| Dimension | ET-031 | ET-032 | ET-033 | ET-034 | ET-035 | ET-036 | ET-037 |
|---|---|---|---|---|---|---|---|
| **Primary Evidence** | SR | SR + Long. | Cross-sec. | Cross-sec. | MOAS(k=82) | Cross-sec. | MOAS(k=5) |
| **SR/MOAS Present** | ✅ SR | ✅ SR | ❌ | ❌ | ✅ MOAS | ❌ | ✅ MOAS |
| **Longitudinal** | ❌ Field | ✅ SPARCLE | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Intervention** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **N (primary)** | 30 studies | 594 (long.) | 90 | 242 | 7,675 | 167 | 315 |

---

## Relationship Direction Comparison — Full Matrix

| Dimension | ET-031 | ET-032 | ET-033 | ET-034 | ET-035 | ET-036 | ET-037 |
|---|---|---|---|---|---|---|---|
| **Current Relationship** | Association | Association | Unclear | Association+ | Association | Association+ | Association+ |
| **Suggested Direction** | FS→Part. | PS→Part. | Not established | Part.↔FQOL | FS→↓PS | FS→↑FF | FS→↑FQOL |
| **Evidence Level** | Moderate | Moderate | Limited | Limited | **Moderate** | Limited | **Moderate** |
| **Temporal Evidence** | Absent | **Present** | Absent | Absent | Absent | Absent | Absent |
| **Effect Size (r)** | — | β≈-.07–.15 | — | — | **.43** | — | **.46** |

*Note: ET-034 and ET-036 marked Association+ indicating positive direction observed despite Unclear label in ET-033.*

---

## Evidence Level Distribution

```
Strong    : 0 ETs  (threshold: Intervention + MOAS/SR)
Moderate  : 4 ETs  (ET-031, ET-032, ET-035, ET-037)
Limited   : 3 ETs  (ET-033, ET-034, ET-036)
```

*Note: Evidence Level reflects the current maturity of evidence rather than the importance of the relationship. Limited evidence does not mean an unimportant connection — it means the field has not yet produced sufficient higher-tier studies.*

---

## Hub Comparison

| Hub | Connections | Moderate | Limited | Temporal | MOAS |
|---|---|---|---|---|---|
| **Participation Hub** | 4 (ET-031–034) | 2 | 2 | 1 (ET-032) | 0 |
| **Family Support Hub** | 3 (ET-035–037) | 2 | 1 | 0 | 2 (ET-035, ET-037) |

**Key difference:** Family Support Hub has stronger baseline evidence (MOAS ×2) but no temporal evidence. Participation Hub has one temporal proof-of-concept (SPARCLE).

---

## Evidence Starting Point Diversity (all 7 ETs)

```
ET-031   Participation × Family Support      → SR (30 studies)
ET-032   Participation × Parenting Stress    → SR + Longitudinal
ET-033   Participation × Family Functioning  → Cross-sectional (N=90, FAD)
ET-034   Participation × FQOL               → Cross-sectional (N=242, PEM-CY)
ET-035   Family Support × Parenting Stress   → MOAS (k=82, N=7,675)
ET-036   Family Support × Family Functioning → Cross-sectional (N=167, FACES)
ET-037   Family Support × FQOL              → MOAS (k=5, N=315)
```

**Architecture Note (Candidate — confirmed across 7 ETs):**
> Cross-concept ETs are built from the best available evidence at the time of construction. No uniform evidence tier is required. Evidence Level reflects current state; Future Evidence Triggers define upgrade paths.

---

## Gap Classification Summary (permanent fixture)

| ET | Longitudinal Gap | SR Gap | Gap Type |
|---|---|---|---|
| ET-031 | **Field-level Evidence Gap** | N/A (SR present) | Unique: field has no longitudinal studies |
| ET-032 | Repository Coverage Gap → FILLED | N/A | Found and included (SPARCLE) |
| ET-033 | Repository Coverage Gap | Repository Coverage Gap | Both open |
| ET-034 | Repository Coverage Gap | Repository Coverage Gap | Both open |
| ET-035 | Repository Coverage Gap | N/A (MOAS = SR-tier) | Longitudinal open |
| ET-036 | Repository Coverage Gap | Repository Coverage Gap | Both open; McMaster/FAD specific gap may be Field-level |
| ET-037 | Repository Coverage Gap | N/A (MOAS present) | Longitudinal open |

*This table is a permanent fixture. The Field-level vs Repository Coverage Gap distinction is a core Repository governance capability and should be preserved across all future versions.*

---

## Architecture Patterns — Status Update

| Pattern | Status | Cases | Notes |
|---|---|---|---|
| Search Priority Pattern | **Validated** | 7 ETs | SR/MOAS first; cross-sectional deferred when SR exists |
| Cross-concept Question Direction Principle | **Validated** | 7 ETs | ET-034 confirmed reversed direction; ET-036 bidirectional |
| Concept Boundary Enforcement | Strong Candidate | 2 cases | ET-033 (FAD); ET-036 (FACES≠FAD, accepted with boundary) |
| Framework Equivalence Principle | Candidate | 1 case | ET-036: McMaster + Circumplex both contribute to FF Concept |
| Evidence-first Starting Point | Candidate | 7 ETs | All 7 use field's best evidence at time of construction |
| MOAS in Evidence Level Scale | Candidate | 2 cases | ET-035, ET-037: MOAS = Moderate (same as SR, higher precision) |

---

## Network Roadmap (maintained)

**Sprint 26 — Family Support Hub (COMPLETE)**
```
ET-000035   Family Support × Parenting Stress   ✅ Moderate
ET-000036   Family Support × Family Functioning  ✅ Limited
ET-000037   Family Support × FQOL               ✅ Moderate
Knowledge Graph v2.0                            ✅ Two-Hub Network
→ This document updated to v4.0
```

**Sprint 27 — Real-World Validation (next)**
```
Navigation Validation:
  Can a user navigate from a clinical question to evidence?
  Does the Hub structure support search and retrieval?

Repository v3.0 Planning:
  Stage V Analytics Automation scoping
  Cross-hub connection candidates:
    Parenting Stress × Family Functioning
    Parenting Stress × FQOL
    Family Functioning × FQOL

ET Upgrade Candidates:
  ET-000033 (Limited → Emerging): SR search for FF × Participation
  ET-000034 (Limited → Emerging): SR search for FQOL × Participation
  ET-000036 (Limited → Emerging): McMaster/FAD × Family Support search
```

*This section is updated — not deleted — with each version.*

---

## Version History

| Version | Date | ETs | Change |
|---|---|---|---|
| v1.0 | 2026-07-13 | ET-031/032 | Initial |
| v2.0 | 2026-07-13 | ET-031–034 | Participation Hub complete |
| v3.0 | 2026-07-13 | ET-031–035 | Family Support Hub Step 1; MOAS pattern |
| v4.0 | 2026-07-13 | ET-031–037 | Family Support Hub complete; Two-Hub Network |
