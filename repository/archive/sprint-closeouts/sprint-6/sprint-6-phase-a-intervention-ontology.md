# Sprint 6 Phase A — Intervention Ontology Design

**Anori Knowledge Operating System**
Date: 2026-07-07
Status: Draft（설계 단계, KOS 미적용）

---

## Step 1：Intervention은 무엇인가?

### 현재 KOS의 Natural REL 세계관

```
State（상태）
        ↓
Relationship（관계）
        ↓
State（상태）

예시：
Parent Stress（상태）
        ↓
increases
        ↓
Caregiver Burden（상태）
```

모든 현재 REL은 두 개의 **자연 상태** 사이의 관계를 표현합니다.

---

### Intervention의 본질

Intervention은 자연 상태가 아닙니다. 그것은 **설계된 행동**입니다.

**다섯 가지 후보 개념 분석：**

| 후보 | 정의 | Intervention과의 관계 |
|------|------|---------------------|
| Exposure | 환경/물질에 노출 | 부분적 포함—Intervention도 노출이지만 역방향（설계→노출） |
| Program | 구조화된 활동의 집합 | Intervention의 **구현 형태** |
| Service | 전문가가 제공하는 지원 | Intervention의 **전달 방식** |
| Strategy | 목표를 위한 접근법 | Intervention의 **논리적 기반** |
| Practice | 반복적으로 수행하는 방법 | Intervention의 **실행 단위** |
| Treatment | 의학적 처치 | 임상 맥락에서의 Intervention |

**결론：**

Intervention은 위 개념들의 상위 Concept입니다.

> **Intervention = 특정 Outcome을 달성하기 위해 의도적으로 설계되고 실행되는 구조화된 행동，Program / Service / Strategy / Practice / Treatment 등의 형태로 구현된다.**

---

### Intervention의 필수 속성

다음이 없으면 Intervention이 아닙니다：

1. **의도성（Intentionality）**：특정 목적을 위해 설계됨
2. **구조성（Structure）**：프로토콜 또는 지침이 존재함
3. **실행 조건（Activation Condition）**：누군가가 실행해야 효과가 발생함
4. **목표 대상（Target）**：특정 Population 또는 System을 대상으로 함

**Natural REL과의 근본적 차이：**

```
Natural REL：
X라는 상태가 존재할 때 Y라는 상태가 관찰된다.

Intervention REL：
X라는 프로그램이 실행될 때 Y라는 결과가 나타난다.
```

---

## Step 2：Intervention Taxonomy

### 주요 분류 축

**축 1：Target（대상）**

```
Intervention
├── Child-focused（아동 중심）
│     예：ABA, Social Skills Training
├── Parent/Caregiver-focused（부모/돌봄자 중심）
│     예：Parent Training, Mindfulness
├── Family-focused（가족 중심）
│     예：Family Therapy, Parent-Child Interaction
├── School/Community-focused（학교/지역사회 중심）
│     예：Peer Support Arrangements, Inclusive Education
└── System-focused（시스템 중심）
      예：Policy Change, Professional Training
```

**축 2：Delivery Mode（전달 방식）**

```
Intervention
├── Individual（개별）
├── Group（집단）
├── Technology-mediated（기술 매개）
└── Environment-based（환경 기반）
```

**축 3：Domain（영역）**

```
Intervention
├── Educational（교육적）
│     예：Peer Support Arrangements, Learning Support
├── Clinical（임상적）
│     예：ABA, CBT, Medication
├── Family Support（가족 지원）
│     예：Respite Care, Parent Training
├── Community（지역사회）
│     예：Inclusion Programs, Recreation
└── Transition（전환기）
      예：Transition Planning, Supported Employment
```

---

## Step 3：Intervention Object 속성

각 Intervention이 가져야 할 최소 속성（JSON/데이터 구조 아님, 개념적 정의）：

### 필수 속성（Must Have）

```
Name（이름）
  공식 프로그램명

Aliases（별칭）
  일반 명칭, 약어

Definition（정의）
  Intervention의 내용과 메커니즘

Target Population（대상 인구）
  누구를 대상으로 하는가

Delivery Mode（전달 방식）
  개별/집단/기술/환경

Primary Outcome（주요 결과）
  무엇을 개선하고자 하는가

Evidence Base（증거 기반）
  어떤 연구 설계로 검증되었는가

Intensity（강도）
  세션 수, 기간, 빈도
```

### 선택 속성（Optional）

```
Secondary Outcomes（부차적 결과）
Contraindications（금기 사항）
Implementation Requirements（실행 요건）
Fidelity Measures（충실도 측정）
Cost（비용）
Accessibility（접근성）
Cultural Considerations（문화적 고려사항）
```

---

## Step 4：Intervention → Outcome 관계의 이름

**현재 KOS의 관계 유형：**

```
REL：increases / decreases / enables / associated_with
```

**Intervention → Outcome을 위한 새 관계 유형 후보：**

| 후보명 | 의미 | 장점 | 단점 |
|--------|------|------|------|
| `causes` | 인과 관계 강조 | RCT 근거에 적합 | 너무 강한 주장 |
| `improves` | 긍정적 변화 방향 | 직관적 | 방향이 하나뿐 |
| `reduces` | 감소 효과 | 명확 | 증가 효과 표현 불가 |
| `targets` | 목적 관계 | 의도 표현 | 효과를 담보하지 않음 |
| `produces_effect_on` | 효과 관계 | 정확 | 너무 길고 기술적 |
| **`affects`** | **중립적 효과** | **양방향 가능, 충실도 포함** | **추가 극성 필드 필요** |

**권장：** `affects`（중립적, 극성은 `effect_polarity` 필드로 표현）

```
IREL：
Intervention --affects--> Outcome
effect_polarity: Positive / Negative / Mixed
effect_size: large / moderate / small
evidence_grade: RCT-Meta / RCT / Quasi-experimental
```

---

## Intervention vs Natural REL 비교

| 항목 | Natural REL | Intervention REL（IREL） |
|------|-------------|------------------------|
| Source | VAR（자연 상태） | Intervention Object |
| Target | VAR（자연 상태） | VAR（결과 상태） |
| 관계 동사 | increases / decreases / enables | affects |
| 존재 조건 | 항상 | 실행될 때만 |
| 증거 기준 | SR, Longitudinal | RCT, Quasi-experimental |
| Tier 기준 | Workflow v1.2 | 별도 IREL Tier 필요 |

---

## Phase A 결론

**Intervention의 정의（KOS 버전）：**

> Intervention은 특정 Outcome을 달성하기 위해 의도적으로 설계된 구조화된 행동이다. 자연 상태 사이의 관계（REL）와 달리, Intervention은 실행 조건이 없으면 존재하지 않으며, Program / Service / Strategy / Practice의 형태로 구현된다.

**Phase A 산출물：**
1. ✅ Intervention 정의 확정
2. ✅ Taxonomy（3축：Target / Delivery / Domain）
3. ✅ Object 속성 목록
4. ✅ 관계 동사（`affects`）제안

**Phase B 예정：**
- Intervention Evidence Tier 정의（RCT vs SR vs 관찰연구）
- IREL Workflow 초안

---

*Sprint 6 Phase A — Intervention Ontology Design*
*2026-07-07 — Draft，KOS 미적용*
*Next：Phase B — Intervention Evidence Tier*
