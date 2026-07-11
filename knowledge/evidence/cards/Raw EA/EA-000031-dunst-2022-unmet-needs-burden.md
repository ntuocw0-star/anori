# Evidence Card

---

**Evidence ID:** EA-000031

**Status:** Active
**Date Added:** 2026-07-07
**Supports REL:** REL-000104
**Operation Type:** Type B — Evidence Reinforcement（Candidate REL Promotion + Ontology Expansion）

---

## Citation

Dunst, C. J. (2022). Systematic Review and Meta-Analysis of the Relationships Between Family Social Support and Parenting Stress, Burden, Beliefs and Practices. *International Journal of Health and Psychology Research*, 10(4).

*(Same source as EA-000025, which covers Formal Support → Caregiver Burden for REL-000007. EA-000031 covers the Unmet Family Needs → Caregiver Burden relationship.)*

---

## Study Characteristics

| 项目 | 내용 |
|------|------|
| Type | Meta-analysis |
| Tier | **Tier 1** |
| Independent Samples | 82 |
| N | 7,675 |
| Population | Caregivers / families with children with disabilities |
| Instrument | Family Needs Scale（Dunst et al.）|

---

## Variables

**Predictor:** Unmet Family Needs（VAR-000050）
- 다차원：Information, Support, Financial, Service, Community, Future Planning 需求
- Measured by：Family Needs Scale

**Outcome:** Caregiver Burden（VAR-000009）
**Direction:** Risk（Unmet Family Needs↑ → Caregiver Burden↑）

---

## KOS Alignment

| KOS Element | Alignment |
|-------------|-----------|
| Predictor VAR | **VAR-000050 Unmet Family Needs**（신규, 2026-07-07）✅ |
| Outcome VAR | VAR-000009 Caregiver Burden ✅ |
| Relation | increases（Risk）✅ |
| Evidence Type | Direct ✅ |

---

## Ontology Expansion Note

**VAR-000050 신규 생성 배경：**

Dunst 2022는 Family Needs Scale을 사용하는데, 이는 서비스 필요 외에도 정보/지원/경제적 필요를 포함하는 다차원 구성 개념입니다. 기존 VAR-000033（Unmet Service Need）은 이 중 서비스 필요 하나만 커버하므로 Construct Scope Gap이 존재합니다.

- **Metadata 확장**（population 필드처럼）이 아닌 **Ontology 확장**（상위 Concept 신규 추가）이 필요한 경우로 판단
- VAR-000050은 VAR-000033의 상위 개념이며，VAR-000033은 VAR-000050의 하위 서비스 차원

---

## Candidate REL Promotion Record

**Origin：** KGO-002 Candidate Registry（2026-07-07）
**History：** KGO-002에서 Dunst 2022가 REL-000074（Parent Stress → Caregiver Burden）에 맞지 않아 Candidate 등록. 당시 "Family Needs" VAR 부재로 승격 보류.
**Promoted：** Sprint 5 Phase C，VAR-000050 생성 후 즉시 승격
**New REL：** REL-000104

---

*Evidence Card EA-000031 — Created 2026-07-07*
*Sprint 5 Phase C / KGO-019*
*Candidate REL → Promoted（REL-000104）*
*VAR-000050 Ontology Expansion + Candidate REL Promotion 동시 완료*
