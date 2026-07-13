# PILOT-GAP-LOG.md

**Document Type:** Long-term Pilot Gap Log (maintained across all Sprints)
**Version:** 1.0
**Started:** 2026-07-13 · Sprint 31
**Purpose:** Record every failure, gap, or quality issue found during real-world pilot testing

---

## How to Use This Log

Every time a question from the Pilot Set (or any real-world question) reveals a problem, add an entry here.
Never delete entries. Mark resolved entries with a Sprint number.

**Gap Types:**
- **Router Error** — Question routed to wrong ET or no ET
- **ET Gap** — No ET exists for this cross-concept Q
- **Evidence Gap** — Evidence exists but not in Repository
- **Language Gap** — Answer correct but clinically unusable (too academic, too vague)
- **SDM Gap** — Answer doesn't invite shared decision-making
- **KA Gap** — Concept question hits no KA
- **Boundary Gap** — Answer overclaims or misses a critical Known Boundary
- **Utility Gap** — Clinician/parent wouldn't actually use this answer

---

## Log Format

```
Entry ID:     GAP-001
Date:         2026-07-13
Sprint:       31
Question:     [Q# or verbatim question]
Gap Type:     [Router Error / ET Gap / Evidence Gap / Language Gap / SDM Gap / KA Gap / Boundary Gap / Utility Gap]
Description:  [What went wrong]
Impact:       [High / Medium / Low]
Action:       [Proposed fix]
Resolved:     [Sprint # when resolved, or Open]
```

---

## Active Gap Log

### GAP-001
**Date:** 2026-07-13 · Sprint 31
**Question:** Q19 — 单亲家庭的障碍儿童参与是否比双亲家庭少？
**Gap Type:** Evidence Gap
**Description:** Family type (single vs. dual parent) is a Status Factor in Arakelyan (2019) / EA-000024, but Repository has no dedicated ET or EA addressing the specific comparison of single vs. dual parent family participation outcomes.
**Impact:** Medium
**Action:** Flag as Known Boundary in ET-000031. Candidate future EA if relevant study found.
**Resolved:** Open

---

### GAP-002
**Date:** 2026-07-13 · Sprint 31
**Question:** Q28 — 家长压力对孩子参与的影响，在CP和ASD中一样吗？
**Gap Type:** Evidence Gap
**Description:** Current longitudinal evidence (SPARCLE / EA-000033) is CP-specific. No ET or EA covers the ASD-disability comparison on this dimension. ET-000032 boundary notes CP specificity but doesn't resolve the ASD question.
**Impact:** High (ASD is a major user population)
**Action:** Add ASD-specific search to EA-000032 gap list; note as Known Boundary in ET-000032.
**Resolved:** Open

---

### GAP-003
**Date:** 2026-07-13 · Sprint 31
**Question:** Q33 — 作为OT，我想评估家庭功能对孩子参与的影响，有什么好的工具？
**Gap Type:** KA Gap
**Description:** KA-FF-001 covers FAD and FACES as measurement tools, but doesn't explicitly guide clinicians on tool selection for the specific purpose of assessing FF→Participation relationship in pediatric disability settings.
**Impact:** Medium
**Action:** Add "Clinical tool selection guidance" section to KA-FF-001 in Sprint 32+.
**Resolved:** Open

---

### GAP-004
**Date:** 2026-07-13 · Sprint 31
**Question:** Q35 — 有没有证据说明改善家庭功能可以提升孩子参与？
**Gap Type:** Evidence Gap (Intervention)
**Description:** ET-000033 (FF × Participation) has no Intervention Evidence. Current evidence is limited cross-sectional. No RCT or intervention study on FF → Participation improvement.
**Impact:** High (clinicians need intervention evidence)
**Action:** Record as Intervention Gap in ET-000033. Add to Future Evidence Triggers.
**Resolved:** Open

---

### GAP-005
**Date:** 2026-07-13 · Sprint 31
**Question:** Q44 — 家长问："这是我的错吗？" OT该怎么回答？
**Gap Type:** Language Gap + SDM Gap
**Description:** Repository can provide evidence that PS→Participation association exists, but the clinical answer template doesn't have specific guidance for handling parental self-blame framing. Block 4 SDM language is generic; no emotionally attuned response guidance exists.
**Impact:** High (very common clinical encounter)
**Action:** Add "Emotionally sensitive framing" variant to CLINICAL-ANSWER-TEMPLATE. Consider SDM v2.0 that includes acknowledgment of parental distress before evidence.
**Resolved:** Open

---

### GAP-006
**Date:** 2026-07-13 · Sprint 31
**Question:** Q50 — 这个家庭什么都很糟糕——我从哪里开始？
**Gap Type:** Language Gap
**Description:** Cross-Hub routing works (ET-031/032/035 all trigger), but the generated answer doesn't have a "triage protocol" format. The clinical answer lists factors by Evidence Level but doesn't provide a decision tree for when multiple factors are all present simultaneously.
**Impact:** High (highest-complexity clinical scenario)
**Action:** Create Multi-factor Triage Protocol as an optional answer mode in ANSWER-GENERATION-GUIDELINE v2.0.
**Resolved:** Open

---

### GAP-007
**Date:** 2026-07-13 · Sprint 31
**Question:** Q6 — 孩子上了特教班之后，参与社区活动的机会是变多还是变少了？
**Gap Type:** Evidence Gap
**Description:** Repository covers participation differences broadly (ET-000030) but has no specific EA on special education placement → community participation change. This is a common and important clinical question.
**Impact:** Medium
**Action:** Flag as future EA candidate. Note boundary in ET-000030.
**Resolved:** Open

---

## Resolved Gaps

*(None yet — first pilot run)*

---

## Gap Summary by Type

| Gap Type | Count | Open | Resolved |
|---|---|---|---|
| Router Error | 0 | 0 | 0 |
| ET Gap | 0 | 0 | 0 |
| Evidence Gap | 4 | 4 | 0 |
| Language Gap | 2 | 2 | 0 |
| SDM Gap | 1 | 1 | 0 |
| KA Gap | 1 | 1 | 0 |
| Boundary Gap | 0 | 0 | 0 |
| Utility Gap | 0 | 0 | 0 |
| **Total** | **7** | **7** | **0** |

---

## Pilot Utility Scoring Template (Step 3)

For each question answered in the Pilot, record:

| Q# | Router correct | ⑦ Clinician utility (1–5) | ⑧ Parent understandability (1–5) | Gap logged |
|---|---|---|---|---|
| Q1 | | | | |
| Q2 | | | | |
| ... | | | | |

**Scoring guide:**
- 5 = Would definitely use / definitely understand without assistance
- 4 = Would use with minor modification / understand with one clarification
- 3 = Would use as a starting point / partially understand
- 2 = Needs substantial reworking / mostly unclear
- 1 = Not usable / not understandable

---

## Sprint Log

| Sprint | Questions tested | Gaps found | Gaps resolved | Net open |
|---|---|---|---|---|
| Sprint 31 | 50 (collection phase) | 7 | 0 | 7 |
| Sprint 32+ | TBD | TBD | TBD | TBD |
