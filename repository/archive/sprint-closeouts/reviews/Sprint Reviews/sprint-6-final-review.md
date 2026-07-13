# Sprint 6 — Final Review

**Anori Knowledge Operating System**
Date: 2026-07-07
Status: **Sprint Closed**

---

## ① Sprint Summary

> **Sprint 6 建立并验证了 Intervention Layer，使 KOS 从单一 Natural Knowledge Graph 演进为双层 Knowledge Graph。**

这不是对已有体系的修补，而是一次真正的架构扩展——KOS 现在可以同时表达：
- 自然状态之间的关系（REL Layer）
- 干预对自然状态的效果（IREL Layer）

---

## ② New Assets

| 资产 | 说明 |
|------|------|
| Intervention Ontology | 定义 Intervention 是什么、三轴 Taxonomy、必要属性 |
| Intervention Evidence Tier | IREL 专用 4 级证据体系（Tier 1–4） |
| Intervention Relation Model（IRM） | IREL 的语义模型、连接方式、Knowledge Graph 整合 |
| INT-000001 | 首个 Intervention Object：Peer Support Arrangements |
| IREL-000001 | 首个 IREL：Peer Support → Community Participation |
| IEA-000001 | 首个 Intervention Evidence Card：Carter et al. 2016 |

---

## ③ Design Principles（冻结）

| 原则 | 说明 |
|------|------|
| Intervention ≠ State | Intervention 是设计的行动，不是自然状态 |
| IREL ∥ REL | 平行关系类型，不混合 |
| `affects` 固定动词 | 中立，方向由 `effect_polarity` 表达 |
| Fidelity 必填 | IREL 专有字段，Natural REL 无此要求 |
| 通过 VAR 连接两层 | IREL 的 Target 是 VAR，与现有 REL 体系自然对接 |

---

## ④ Pilot Validation

**Carter et al. 2016 — IRM 첫 번째 완전 검증 사례**

| 항목 | 내용 |
|------|------|
| INT-000001 | Peer Support Arrangements |
| IREL-000001 | affects → VAR-000023（Community Participation） |
| IEA-000001 | Carter 2016 RCT，Tier 2，Moderate，Fidelity High |
| Knowledge Graph 연결 | IREL → VAR-000023 → REL-000080 → VAR-000022（QoL）|

**검증 결과：** 6개 항목 모두 통과。IRM 설계가 실제 사례에서 완전히 작동함.

**역사적 기록：** Carter 2016은 2016년부터 KOS에 존재했지만，KIR-004（EPQ Mapping 오류）와 KIR-008（Community Participation Outcome Gap）을 거쳐，IRM 완성 후 비로소 정확한 형태（IREL）로 표현됨.

---

## ⑤ Architecture Evolution

```
Era 1–3
Knowledge Graph（단일층）
        │
VAR → REL → VAR
        │
증거 축적, 거버넌스 수립
        │
        ▼

Era 4（Sprint 6 이후）
Dual-layer Knowledge Graph

─────────────────────────────────
IREL Layer（신규）
Intervention → IREL → VAR
─────────────────────────────────
        ↕ VAR를 통해 연결
─────────────────────────────────
REL Layer（기존）
VAR → REL → VAR
─────────────────────────────────
```

**두 Layer의 관계：**
- 공유 자산：VAR Registry（50개 상태 개념）
- 독립 자산：REL（104개）과 IREL（현재 1개，확장 예정）
- 연결 방식：Intervention이 VAR에 영향을 미치고，그 이후 REL이 이어받음

---

## ⑥ Sprint 7 Starting State

**주제：Intervention Repository Expansion**

목표：IREL Layer를 1개 Pilot에서 시스템적 지식 기반으로 확장

**우선순위 Intervention 후보：**

| Intervention | Domain | 예상 IREL Target |
|-------------|--------|----------------|
| Parent Training（Triple P 등） | Family | Parent Stress, Parenting Quality |
| AAC Intervention | Communication | Community Participation, Child QoL |
| Social Skills Training | School | Social Participation, Belonging |
| Family-centered Practice | Family | Family Functioning, FQoL |
| Positive Behavior Support（PBS） | School/Community | Child Mental Health, Community Participation |
| NDBI（Naturalistic Developmental Behavioral Intervention） | Clinical/Educational | Child Development, Participation |

**Sprint 7 목표：**
- IREL 5–10개 추가
- IEA 5–10개 생성
- Intervention Registry 공식화

---

## Project Status（Sprint 6 이후）

| 모듈 | 상태 |
|------|------|
| Architecture | ✅ Complete |
| Governance（Workflow v1.2） | ✅ Frozen |
| Workflow v1.3 Draft | 🟡 Active |
| Natural Knowledge Graph | ✅ Operational（104 RELs, 50 VARs, 31 EAs） |
| **Intervention Layer（IREL）** | **✅ Designed + Pilot Validated** |
| Intervention Repository | 🟡 Expanding（Sprint 7） |

**전체 건설 진도：약 96%**

---

## Closing Statement

> **Sprint 6의 의미는 새로운 Intervention을 추가한 것이 아니라，KOS가 새로운 종류의 지식을 표현할 수 있는 능력을 갖추게 된 것이다.**
>
> Natural Relationship과 Intervention Effect는 본질적으로 다른 것이다. 이 차이를 아키텍처 수준에서 분리한 것이 Sprint 6의 핵심 성과이다.

---

*Sprint 6 Final Review — 2026-07-07*
*Sprint 7：Intervention Repository Expansion*
