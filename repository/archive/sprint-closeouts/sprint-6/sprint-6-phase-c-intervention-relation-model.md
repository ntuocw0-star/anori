# Sprint 6 Phase C — Intervention Relation Model（IRM）

**Anori Knowledge Operating System**
Date: 2026-07-07
Status: Draft（KOS 미적용）

---

## Step 1：IREL = REL 인가?

**결론：아니다. 평행 관계 유형（Parallel Edge Type）이다.**

```
Knowledge Graph
├── REL（자연 상태 사이의 관계）
│     Source: VAR_state
│     Edge:   REL
│     Target: VAR_state
│
└── IREL（Intervention이 상태에 미치는 관계）
      Source: Intervention Object
      Edge:   IREL
      Target: VAR_state
```

**왜 REL에 흡수하지 않는가：**

| 차원 | REL | IREL |
|------|-----|------|
| Source 유형 | 자연 상태（VAR） | 설계된 행동（Intervention） |
| 존재 조건 | 항상 관찰 가능 | 실행될 때만 존재 |
| 인과성 | 상관/예측 | 실험적 효과 |
| 측정 | 연속적 상태 | 프로그램 실시 여부 |
| 증거 기준 | Workflow v1.2 Tier | IREL Tier（별도） |

흡수하면 두 가지 근본적으로 다른 논리가 혼합되어 Knowledge Graph의 일관성이 무너집니다.

---

## Step 2：관계 동사 확정

**`affects`（확정）**

```
Intervention --affects--> VAR_state
```

**선택 이유：**

| 후보 | 탈락 이유 |
|------|---------|
| `causes` | 인과성을 과도하게 주장, 모든 RCT에서 확정할 수 없음 |
| `improves` | 긍정 방향만 표현, `effect_polarity`로 방향을 구분해야 하는 설계와 충돌 |
| `reduces` | 위와 동일 |
| `targets` | 의도만 표현, 실제 효과 없음 |
| **`affects`** | **중립, 양방향, `effect_polarity`와 결합하면 완전한 표현 가능** |

---

## Step 3：IREL Concept 구조

### 핵심 개념（구현 전 정의）

**Source Layer（Intervention Object）：**

```
Intervention
  ├── Name（이름）
  ├── Aliases（별칭）
  ├── Definition（정의）
  ├── Target Population（대상 인구）
  ├── Delivery Mode（전달 방식）
  ├── Domain（영역：Educational / Clinical / Family / Community / Transition）
  ├── Intensity（세션 수, 기간, 빈도）
  └── Implementation Context（학교 / 클리닉 / 가정 / 지역사회）
```

**Edge Layer（IREL 자체）：**

```
IREL
  ├── relation: affects（고정）
  ├── effect_polarity: Positive / Negative / Mixed
  ├── effect_size: Large / Moderate / Small / Unknown
  ├── evidence_grade: High / Moderate / Low / Insufficient
  ├── evidence_tier: 1 / 2 / 3 / 4（IREL Tier 기준）
  ├── primary_evidence: 문헌 인용
  ├── fidelity_reported: true / false
  ├── fidelity_level: High / Moderate / Low / Not reported
  └── population: [선택적, 특정 인구에만 적용될 경우]
```

**Target Layer（VAR — 결과 상태）：**

```
VAR_state（기존 KOS VAR 재사용）
  예：
  - VAR-000023 Community Participation
  - VAR-000002 Parent Stress
  - VAR-000004 Family Quality of Life
```

---

## Step 4：Knowledge Graph 연결 구조

### IREL이 Natural REL과 연결되는 방식

**핵심 패턴：Intervention → Natural Chain**

```
Intervention
      ↓（IREL: affects, Positive）
VAR_state A（근위 결과）
      ↓（REL: decreases）
VAR_state B（원위 결과）
```

**실제 예시（Carter 2016 기반）：**

```
Peer Support Arrangements（Intervention）
      ↓ IREL: affects
      ↓ effect_polarity: Positive
      ↓ evidence_tier: 2（RCT）
Community Participation（VAR-000023）
      ↓ REL: increases（REL-000080）
Well-being（VAR-000019）
```

**의미：**
Intervention이 직접 닿는 것은 근위 결과（Proximal Outcome）입니다. 그 후의 연쇄는 이미 KOS에 있는 REL이 담당합니다. IREL은 자연 Knowledge Graph의 진입점이 됩니다.

---

### 연결 모델 세 가지 패턴

**Pattern 1：Intervention → Single Outcome**

```
Intervention --IREL--> VAR_A
```

가장 단순. 하나의 Intervention이 하나의 VAR에 직접 효과.

**Pattern 2：Intervention → Chain（REL 계승）**

```
Intervention --IREL--> VAR_A --REL--> VAR_B --REL--> VAR_C
```

Intervention이 자연 관계 체계에 진입. IREL만 새로 필요하고 이후 체계는 기존 REL 재사용.

**Pattern 3：Intervention → Multiple Outcomes**

```
Intervention --IREL--> VAR_A
             --IREL--> VAR_B
             --IREL--> VAR_C
```

복수 IREL 허용. 각각 별도의 evidence_grade와 effect_size.

---

## IRM 완성 후 Knowledge Graph 구조

```
Knowledge Graph
│
├── VAR Registry（50개 상태 개념）
│
├── REL Layer（104개 자연 관계）
│     VAR → REL → VAR
│
└── IREL Layer（신규）
      Intervention → IREL → VAR
      │
      └── 기존 REL Layer와 VAR를 통해 연결됨
```

---

## Phase C 결론

**IRM（Intervention Relation Model）정의：**

> IREL은 Intervention Object가 KOS의 VAR（결과 상태）에 미치는 효과를 표현하는 관계 유형이다. Natural REL과 평행하게 존재하며, `affects` 동사를 사용하고, `effect_polarity`와 IREL Tier로 방향과 강도를 표현한다. IREL의 Source는 항상 Intervention Object이며, VAR가 될 수 없다.

**Phase C 산출물：**

1. ✅ IREL = 별도 관계 유형（REL과 평행）
2. ✅ 동사：`affects`（확정）
3. ✅ IREL Concept 구조（Source / Edge / Target）
4. ✅ Knowledge Graph 연결 패턴（3가지）

**Phase D 예정：**

Carter 2016 Pilot—IRM을 실제 사례에 적용하여 전체 설계 검증

---

## Sprint 6 자산 현황

| 자산 | 상태 |
|------|------|
| Intervention Ontology（Phase A） | ✅ Draft |
| Intervention Evidence Tier（Phase B） | ✅ Draft |
| **Intervention Relation Model（Phase C）** | **✅ Draft** |
| Intervention Pilot：Carter 2016（Phase D） | 예정 |

---

*Sprint 6 Phase C — Intervention Relation Model（IRM）*
*2026-07-07 — Draft，KOS 미적용*
*Next：Phase D — Carter 2016 Pilot*
