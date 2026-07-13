# CLINICAL-NAVIGATION-STANDARD-v1.0.md

**Document Type:** Repository Governance Standard
**Version:** 1.0
**Created:** 2026-07-13 · Sprint 32
**Scope:** All Cross-concept ETs · Mandatory for Limited ETs · Recommended for Moderate ETs

---

## Why Clinical Navigation Exists

Before Sprint 32, every ET ended at the boundary of its own evidence:

```
ET-000033 (Sprint 31 version):
  Evidence Level: Limited
  Known Boundary: Single cross-sectional study
  → [End]
```

A clinician reading this knows what the evidence doesn't support.
They do not know what to do next.

Clinical Navigation resolves this. Every ET now has a section that answers:

> "If the evidence here is insufficient for my decision — where should I look next?"

This converts ETs from **knowledge endpoints** into **decision waypoints**.

---

## When to Add Clinical Navigation

| ET Evidence State | Clinical Navigation | Notes |
|---|---|---|
| Limited | **Mandatory** | Always redirect to stronger-evidence alternatives |
| Moderate, no Temporal | **Recommended** | Add if intervention evidence absent |
| Moderate + Temporal | Optional | Add only if cross-concept redirects meaningfully help |
| Full Evidence | Not needed | ET is itself the destination |
| Field-level Gap confirmed | **Mandatory** | Redirect is the primary clinical value |

---

## Standard Section Format

Every Clinical Navigation section follows this structure:

```markdown
## Clinical Navigation

> This section redirects clinical users when evidence in this ET
> is insufficient for a clinical decision.

**When the evidence here is not enough, consider:**

| Priority | Topic | ET | Level | Reason |
|---|---|---|---|---|
| 1 | [Most actionable alternative] | ET-XXXXXX | [Level] | [One sentence] |
| 2 | [Second alternative] | ET-XXXXXX | [Level] | [One sentence] |
| 3 | [Third if applicable] | ET-XXXXXX | [Level] | [One sentence] |

**Clinical reasoning (one paragraph):**
[Why these priorities, in this order. Reference Evidence Level and
modifiability. Do not introduce new evidence claims here —
this is navigation, not evidence synthesis.]
```

---

## Prioritisation Rules for Navigation

When multiple ETs are listed in a Clinical Navigation section, order them by:

**Rule 1 — Evidence Level first**
Moderate + Temporal > Moderate > Limited

**Rule 2 — Modifiability second**
Factors that can be targeted in intervention take priority over background factors.
(Reference: Arakelyan 2019 — modifiable process factors before status factors.)

**Rule 3 — Proximity to original question third**
If the original ET is about Participation, prioritise ETs that also connect to Participation.

**Rule 4 — Never fabricate a redirect**
Only list ETs that genuinely exist in the Repository. Do not list hypothetical topics.
If no strong redirect exists, say so explicitly:

```
Note: No higher-evidence ET currently covers this specific relationship.
The strongest available starting point remains [ET-XXXXXX] at [Level].
```

---

## Clinical Navigation ≠ Clinical Recommendation

**Important distinction:**

Clinical Navigation tells users where to look for stronger evidence.
It does not replace clinical judgment.

Every Clinical Navigation section must include (or inherit from Template v2.0 Block 4):

> "The evidence gives us direction. The final decision should be made together
> with the family, based on their priorities and your clinical assessment."

---

## Current Clinical Navigation Index

| ET | Navigation Status | Redirects to |
|---|---|---|
| ET-000030 | Not needed (Full Evidence) | — |
| ET-000031 | Optional | ET-000032, ET-000035 |
| ET-000032 | Optional (Temporal Present) | ET-000031, ET-000035 |
| **ET-000033** | **Mandatory ✅ (Sprint 32)** | ET-000032 (P1), ET-000031 (P2), ET-000036 (P3) |
| ET-000034 | Mandatory (Limited, no Intervention) | ET-000037 (P1), ET-000031 (P2) |
| ET-000035 | Optional | ET-000031, ET-000032 |
| ET-000036 | Mandatory (Limited) | ET-000035 (P1), ET-000033 (P2) |
| ET-000037 | Optional | ET-000035 (P1), ET-000034 (P2) |

**Next additions (Sprint 33+):**
ET-000034 and ET-000036 are mandatory recipients — both are Limited ETs.

---

## Clinical Utility Rating

Clinical Navigation is one of the primary inputs to the Clinical Utility rating:

| Clinical Utility | Criteria |
|---|---|
| **High** | Moderate+ evidence AND clinical navigation present AND SDM block |
| **Medium** | Limited evidence BUT clinical navigation present (redirects user productively) |
| **Low** | Limited evidence AND no clinical navigation (user ends at "insufficient") |

**Before Sprint 32:** ET-000033 = Low (evidence limited, no navigation)
**After Sprint 32:** ET-000033 = Medium (evidence unchanged, navigation added)

This demonstrates that Clinical Utility can improve without any change to Evidence Level.

---

## Two-Dimension ET Rating System (established Sprint 32)

Every ET now carries two independent ratings:

```
Knowledge Quality:   Limited / Moderate / Strong / Full Evidence
Clinical Utility:    Low / Medium / High
```

These are independent. Examples:

| ET | Knowledge Quality | Clinical Utility | Explanation |
|---|---|---|---|
| ET-000030 | Full Evidence | High | Strong knowledge + direct clinical action |
| ET-000032 | Moderate | High | Good evidence + temporal + triage role |
| ET-000033 | Limited | **Medium** | Limited evidence + navigation added Sprint 32 |
| ET-000036 | Limited | Low→Medium | Navigation pending Sprint 33 |

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-13 | Initial standard · Sprint 32 |
| v1.1 | TBD | After ET-000034 and ET-000036 navigation added |
