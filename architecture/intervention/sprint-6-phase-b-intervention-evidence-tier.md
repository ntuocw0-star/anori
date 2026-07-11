# Sprint 6 Phase B — Intervention Evidence Tier

**Anori Knowledge Operating System**
Date: 2026-07-07
Status: Draft（설계 단계, KOS 미적용）

---

## 핵심 원칙

**Natural REL 질문：** X와 Y 사이에 안정적 관계/예측/종단 연관이 있는가?
**IREL 질문：** 이 Intervention이 실시되었을 때 Outcome이 변화하는가?

두 질문은 다른 연구 설계를 필요로 합니다. 따라서 Evidence Tier도 달라야 합니다.

---

## IREL Evidence Tier Framework

### Tier 1 — Meta-analysis of RCTs

```
설명：
무작위 대조 시험(RCT)의 체계적 통합
여러 연구에 걸쳐 일관된 인과 효과 확인

요건：
- 2개 이상의 RCT 포함
- 체계적 문헌 검색
- 효과 크기 통합（meta-analysis）
- 이질성 평가

예시：
Peer Support Meta-analysis, Social Skills Intervention SR+Meta
```

### Tier 2 — RCT（단일 또는 다중 현장）

```
설명：
무작위 대조 시험
인과 관계 추론 가능한 최고 단일 연구 설계

요건：
- 무작위 배정
- 대조군 존재
- 적절한 표본 크기
- 맹검（가능한 경우）

유형：
- Multi-site RCT → 더 높은 일반화 가능성
- Single-site RCT → Tier 2 하위
```

### Tier 3 — 통제 설계（비무작위）

```
설명：
준실험적 설계 또는 Single-case design
인과 추론 가능하지만 무작위성 없음

포함：
- Quasi-experimental（대조군 있음, 무작위 없음）
- Non-randomized controlled trial
- Single-case experimental design（SCED / ABA）
- Regression discontinuity
- Interrupted time series

주의：
SCED는 N이 적지만 엄격한 통제를 제공하므로 Tier 3에 포함
```

### Tier 4 — 관찰적 설계（Intervention 맥락）

```
설명：
Intervention이 실시되었지만 통제 없음

포함：
- Pre-post without control group
- Case series
- Cohort（대조군 없음）
- Descriptive study of program outcomes

주의：
이 Tier는 Natural REL의 Tier 3에 해당하지만
IREL에서는 별도로 분리
이유：RCT와 Pre-post는 인과 추론 측면에서 질적으로 다름

상태 표기：Tier 4 — Observational Only
```

---

## Q4 답변：관찰성 연구만 있는 IREL

**가능하지만 엄격히 제한됨：**

```
진입 조건：
- 관찰성 연구만 존재함을 명시
- IREL 상태：Tier 4 — Observational Only
- Evidence Grade：Low（자동, override 불가）
- 향후 RCT 확보 시 업데이트 우선 대상으로 표시
```

---

## Fidelity 필드

**IREL의 필수 필드（Natural REL에는 없음）：**

```
fidelity_reported: true / false
fidelity_level: high / moderate / low / not reported
fidelity_note: 실제 Fidelity 측정 방법이나 수준 기술
```

**이유：**

동일한 Intervention이라도 실행 충실도에 따라 효과가 크게 다를 수 있음. Fidelity를 기록하지 않으면 Evidence Grade가 불완전해짐.

**Fidelity와 Tier의 관계：**

```
Tier 1（Meta-analysis of RCTs）：
  Fidelity 보고 없어도 Tier 유지
  단, fidelity_reported: false 명시

Tier 2（RCT）：
  High Fidelity RCT → Tier 2 상위
  Low Fidelity RCT → Tier 2 하위（evidence_note 필요）

Tier 3（Quasi-experimental）：
  Fidelity 미보고 → 자동으로 Tier 3 하위 처리

Tier 4：
  Fidelity 평가 의미 없음（프로그램 구조 자체가 불명확）
```

---

## IREL vs Natural REL Tier 비교

| Tier | Natural REL | IREL |
|------|-------------|------|
| Tier 1 | Meta-analysis（관찰） | Meta-analysis of RCTs |
| Tier 2 | SR / Large Review | RCT（single or multi-site）|
| Tier 3 | Empirical（관찰, N≥50） | Quasi-experimental / SCED |
| Tier 4 | 해당 없음 | Observational（통제 없음）|

**핵심 차이：**
- Natural REL Tier 1 = 관찰 연구의 종합
- IREL Tier 1 = 실험 연구의 종합
- IREL에는 Tier 4가 별도 존재（인과 추론 불가 영역）

---

## IREL Evidence Grade 구조（초안）

```
evidence_grade: High / Moderate / Low / Insufficient

High → Tier 1 또는 Tier 2（High Fidelity）
Moderate → Tier 2（Low Fidelity）또는 Tier 3
Low → Tier 4（Observational Only）
Insufficient → 사례 보고 또는 전문가 의견만 존재
```

---

## Carter 2016（Peer Support Arrangements）에 적용

```
Carter et al. (2016). Exceptional Children, RCT.

IREL Tier：Tier 2（Single RCT）
Fidelity：보고 여부 확인 필요
Evidence Grade：Moderate（단일 RCT, 다기관 여부 불확실）

→ 충분히 IREL로 진입 가능
→ Tier 1로 올라가려면 추가 RCT Meta-analysis 필요
```

---

## Phase B 결론

**네 가지 질문 답변：**

| 질문 | 답변 |
|------|------|
| Q1. RCT 계열 Tier | Meta RCT=1, RCT=2, Quasi=3, Pre-post=4 |
| Q2. Meta of RCTs = IREL Tier 1? | ✅ 예 |
| Q3. Fidelity 필수 필드? | ✅ 필수（Natural REL과의 핵심 차이）|
| Q4. 관찰성 연구만 있을 경우? | 가능하지만 Tier 4 상한, Grade: Low |

**Phase C 예정：**
- IREL Relation Model 설계
- `affects` 동사 확정 또는 대안
- IREL Object 구조（JSON 초안）

---

*Sprint 6 Phase B — Intervention Evidence Tier*
*2026-07-07 — Draft，KOS 미적용*
*Next：Phase C — Intervention Relation Model*
