# CLINICAL-QUESTION-BENCHMARK-v1.0.md

**Document Type:** Repository Regression Benchmark (Long-term maintained)
**Version:** 1.0
**Established:** 2026-07-13 · Sprint 27
**Purpose:** QA baseline for Repository. Re-run after every Sprint.

---

## How to Use This Benchmark

1. Run all 12 questions against the current Repository state
2. Score each question on 6 dimensions (Step 2B) + Navigation (Step 2A)
3. Record Knowledge Graph Level (0–3)
4. Compare total scores against v1.0 baseline
5. Flag any regression (score drop) or improvement
6. Update Version History with Sprint number and date

**Regression Alert:** Any question dropping >2 points from baseline warrants investigation before proceeding.

---

## Scoring Rubric

### Step 2A: Navigation (binary per dimension)

| Dimension | Pass Condition |
|---|---|
| ① Route correct | Correct Concept / ET identified |
| ② ET correct | Specific ET(s) named accurately |
| ③ EA correct | Relevant EA(s) identified |
| ④ Evidence Level | Correct level stated |
| ⑤ Knowledge Boundary | Relevant limitation noted |

### Step 2B: Clinical Answer (scored)

| Dimension | Scale | Criteria |
|---|---|---|
| ① Evidence Level expression | Y/N | Correctly maps answer confidence to Evidence Level |
| ② Clinical understandability | 1–3 | 1=academic jargon; 2=accessible; 3=natural clinical language |
| ③ Actionability | 1–3 | 1=no guidance; 2=general direction; 3=specific actionable step |
| ④ No overclaim | Y/N | Does not assert causation from observational evidence |
| ⑤ Knowledge Boundary | Y/N | States what evidence cannot conclude |
| ⑥ SDM support | 1–3 | 1=no SDM; 2=acknowledges family variation; 3=actively invites shared decision |

**Max score per question: 15**
**Total max: 180**

### Knowledge Graph Level

| Level | Definition |
|---|---|
| 0 | Answer from single EA |
| 1 | Answer from single ET |
| 2 | Answer integrating multiple ETs (same Hub) |
| 3 | Answer integrating ETs from multiple Hubs |

---

## Question Set

### Category A: Single Concept Routing

**Q1**
> 障碍儿童在学校的参与情况与同龄人有什么差异？

- Standard Route: ET-000030 → EA-000027 (School environment)
- Expected Level: Full Evidence
- Expected Boundary: Cross-sectional; shared dataset N=576; no causal inference
- Expected KG Level: 1
- v1.0 Baseline: 13/15 · PASS

---

**Q2**
> 什么是 Family Quality of Life？它包含哪些维度？

- Standard Route: concept-FQOL → [KA if available] → Beach Center FQOL Scale (5 domains)
- Expected Level: Conceptual (no Evidence Level)
- Expected Boundary: Multiple FQOL frameworks exist; tool choice matters
- Expected KG Level: 1
- v1.0 Baseline: 12/15 · PARTIAL (KA absent; acceptable workaround)
- **Known Issue:** KA layer absent for concept-FQOL (P1 improvement item)

---

**Q3**
> Parenting Stress 对障碍儿童家庭的影响有多大？

- Standard Route: concept-parenting-stress → Parenting Stress Module ET → EA (MASEM, 28 studies)
- Expected Level: High-quality MASEM
- Expected Boundary: Primary outcome is QoL, not Participation; for Participation impact → ET-000032
- Expected KG Level: 1
- v1.0 Baseline: 13/15 △ (Boundary miss on result variable scope)
- **Known Issue:** Cross-reference to ET-000032 should be added (P2 improvement item)

---

### Category B: Cross-Concept Routing (Within Hub)

**Q4**
> 家庭支持不足会如何影响孩子的参与？

- Standard Route: ET-000031 (FS × Participation · Moderate · SR)
- Expected Level: Moderate (Association, not causal)
- Expected Boundary: Field-level Longitudinal Gap; observational only
- Expected KG Level: 1
- v1.0 Baseline: **15/15 · PASS**

---

**Q5**
> 父母压力大，孩子参与活动会减少吗？

- Standard Route: ET-000032 (PS × Participation · Moderate · SR + Longitudinal)
- Expected Level: Moderate; Temporal Evidence Present (SPARCLE)
- Expected Boundary: CP-specific; indirect effect through childhood participation
- Expected KG Level: 1
- v1.0 Baseline: 14/15 · PASS

---

**Q6**
> 提升家庭社会支持，能改善家庭生活质量吗？

- Standard Route: ET-000037 (FS × FQOL · Moderate · MOAS · r=.46)
- Expected Level: Moderate; r=.46 cited; k=5 (smaller subset)
- Expected Boundary: Observational; no Intervention evidence; MOAS not causal
- Expected KG Level: 1
- v1.0 Baseline: 14/15 · PASS

---

### Category C: Cross-Hub Routing

**Q7**
> 如果想同时改善孩子的参与和家庭生活质量，应该从哪里入手？

- Standard Route: ET-000031 + ET-000037 → Family Support as shared node
- Expected Level: Both Moderate; combined framing
- Expected Boundary: Both observational; no guarantee simultaneous improvement
- Expected KG Level: **3 (Cross-Hub)**
- v1.0 Baseline: **15/15 · PASS**

---

**Q8**
> 父母压力和家庭支持，哪个对孩子参与的影响更有研究支撑？

- Standard Route: ET-000031 (FS→Part) vs ET-000032 (PS→Part)
- Expected Level: Both Moderate; ET-000032 has Temporal Evidence
- Expected Boundary: PS has stronger temporal evidence; FS lacks longitudinal
- Expected KG Level: 2 (multi-ET same Hub); 3 possible if ET-000035 invoked
- v1.0 Baseline: 14/15 · PASS

---

### Category D: Evidence Level Sensitivity

**Q9**
> 家庭功能（Family Functioning）与孩子参与之间的关系如何？现有证据强不强？

- Standard Route: ET-000033 (FF × Participation · Limited · single cross-sectional)
- Expected Level: **Limited** — must be stated proactively
- Expected Boundary: Single study N=90; FAD framework; no SR; no Longitudinal
- Expected KG Level: 1
- v1.0 Baseline: 13/15 · PASS
- **Critical test:** Answer must say "limited" without dismissing the relationship

---

**Q10**
> 有没有纵向研究证明压力会预测以后的参与减少？

- Standard Route: ET-000032 → EA-000033 (SPARCLE · N=594 · Longitudinal)
- Expected Level: Moderate; Temporal Present; β = −0.07 to −0.15
- Expected Boundary: CP-specific; indirect effect; β small but significant
- Expected KG Level: 1
- v1.0 Baseline: 13/15 · PASS

---

### Category E: Clinical Practice Questions

**Q11**
> 作为职业治疗师，我想帮助一个家庭提升孩子的社区参与，应该关注哪些家庭因素？

- Standard Route: All 4 Participation Hub ETs, prioritized by Evidence Level
- Expected priority: FS (Moderate) + PS (Moderate+Temporal) > FF (Limited) + FQOL (Limited)
- Expected Boundary: All observational; no Intervention; family-specific variation
- Expected SDM: Invite family to identify their priorities
- Expected KG Level: **3 (Cross-Hub)**
- v1.0 Baseline: **15/15 · PASS**

---

**Q12**
> 家长告诉我她压力很大，孩子很少参加课外活动。这两件事有关联吗？

- Standard Route: ET-000032 (PS × Participation · Moderate · Temporal Present)
- Expected Level: Moderate + Temporal — clearly stated
- Expected Boundary: CP-specific; indirect through early participation; no causation
- Expected SDM: Invite practitioner + family to decide where to start
- Expected KG Level: **3 (invites cross-concept thinking)**
- v1.0 Baseline: **15/15 · PASS**

---

## Baseline Scores (v1.0)

| Q | 2A Result | 2B Score | KG Level |
|---|---|---|---|
| Q1 | PASS | 13 | 1 |
| Q2 | PARTIAL | 12 | 1 |
| Q3 | PASS | 13△ | 1 |
| Q4 | PASS | 15 | 1 |
| Q5 | PASS | 14 | 1 |
| Q6 | PASS | 14 | 1 |
| Q7 | PASS | 15 | 3 |
| Q8 | PASS | 14 | 2 |
| Q9 | PASS | 13 | 1 |
| Q10 | PASS | 13 | 1 |
| Q11 | PASS | 15 | 3 |
| Q12 | PASS | 15 | 3 |
| **Total** | **11/12** | **161/180** | **Lv3: 3/12** |

**Navigation: 91.7% · Clinical Quality: 89.4% · KG Utilization (Lv3): 25%**

---

## Version History and Re-run Log

| Version | Date | Sprint | 2A Score | 2B Score | KG Lv3 | Key Change |
|---|---|---|---|---|---|---|
| v1.0 | 2026-07-13 | Sprint 27 | 11/12 | 161/180 | 3/12 | Baseline established |
| v1.1 | TBD | Sprint 28+ | — | — | — | After KA additions / ET upgrades |

---

## Expansion Notes

When adding new questions to the benchmark, ensure:
- At least 1 question per new Hub established
- At least 1 question testing each new Evidence Level state
- At least 1 cross-Hub question per new Hub pair
- Maintain question mix: 25% single-concept / 25% cross-concept / 25% cross-hub / 25% clinical

Suggested next additions (Sprint 28+):
- Q13: "What is Family Functioning and how does it relate to family support?" (tests KA layer after improvement)
- Q14: "How does family support affect parenting stress?" (ET-000035 direct test)
- Q15: Cross-Hub: "If parenting stress is high, what does that mean for both child participation and family quality of life?" (3-way network)
