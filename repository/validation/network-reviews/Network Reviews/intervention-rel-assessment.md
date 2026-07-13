# Intervention REL Assessment Report

**Anori Knowledge Operating System**
Date: 2026-07-07
Subject: Should Peer Support Arrangements → Community Participation enter the REL model?
Output: Assessment only — no KOS changes

---

## Step 1 — Concept Classification

**Candidate：** Peer Support Arrangements（Carter et al. 2016 RCT）

| 분류 항목 | 판정 | 근거 |
|---------|------|------|
| Natural phenomenon | ❌ | 설계된 프로그램，자연적으로 존재하지 않음 |
| Exposure | 부분 | 학생이 프로그램에 '노출'되지만 의도적 설계 필요 |
| Risk Factor | ❌ | 해당 없음 |
| Protective Factor | 조건부 | 프로그램이 실행될 때만 존재 |
| **Intervention** | **✅** | 구조화된 프로그램，RCT로 검증 |
| Service/Program | ✅ | 학교 기반 서비스 |

**결론：Peer Support Arrangements = Intervention（프로그램이 실행될 때만 존재하는 인위적 구성）**

---

## Step 2 — Ontology Check

**Current KOS REL Sources（38개 Natural State VARs）：**

| 유형 | 예시 |
|------|------|
| 자연 상태 | Parent Stress, Family Functioning, Caregiver Burden |
| 환경 요인 | Ableism, Socioeconomic Status |
| 관계적 | Friendship Support Satisfaction, Social Support |
| 구조적 | Transition Readiness, Shared Family Leisure |

**현재 REL 모델의 암묵적 가정：**

```
X → Y 의미：
X가 존재하거나 높을 때, Y는 높거나 낮아지는 경향이 있다.
（자연 상태, 환경, 특성에 적용 가능）
```

**Peer Support Arrangements의 경우：**

```
Arrangements → CP 의미：
프로그램이 실행될 때, CP가 높아진다.

더 정확하게는：
Program(X)가 조건 Z 하에서 Y를 유발한다.
→ 이것은 관계 패턴이 아니라 개입 효과
```

**핵심 차이：**

| | Natural REL | Intervention REL |
|---|-------------|-----------------|
| 존재 방식 | 항상 존재（측정 가능） | 프로그램이 실행될 때만 존재 |
| 측정 질문 | "X의 수준은?" | "프로그램이 실행되었는가?" |
| 효과 메커니즘 | 상관/예측 | 인과（프로그램 → 결과） |
| 증거 유형 | SR, Longitudinal, Regression | RCT, Quasi-experimental |

---

## Step 3 — Boundary Decision

**질문：Should Intervention be modeled inside REL?**

**결론：Option C — 별도 Intervention Layer 필요**

**이유 4가지：**

**① 존재 조건이 다르다**

현재 KOS REL은 자연 상태 간의 관계를 표현합니다. Caregiver Burden → Family QoL은 두 상태가 동시에 존재할 때 관찰되는 패턴입니다. Peer Support Arrangements는 "프로그램이 실행 중"이라는 조건이 없으면 존재하지 않습니다.

**② 측정 단위가 다르다**

자연 상태 REL: 연속적 척도（높음/낮음）
Intervention REL: 이진적（프로그램 있음/없음）또는 충실도 기반

**③ 현재 VAR Registry에 기반이 없다**

KOS의 50개 VAR 중 Intervention 유형은 VAR-000043（Implementation Fidelity）뿐이며, 이것도 Independent Intervention VAR가 아닙니다. Peer Support Arrangements를 위한 VAR가 없고, 이를 위해 VAR를 추가하면 Parent Training, ABA, AAC, Naturalistic Teaching 등도 연쇄적으로 추가가 필요합니다.

**④ 증거 평가 기준이 다르다**

Workflow v1.2의 Tier 시스템은 관찰 연구 기준입니다:
- Tier 1: Meta-analysis
- Tier 2: SR / Review  
- Tier 3: Empirical

Intervention은 추가 기준 필요：
- RCT Tier: Single RCT vs Multi-site RCT vs Meta-analysis of RCTs
- Fidelity: 프로그램 충실도
- Generalizability: 일반화 가능성

---

## Four Options Assessment

| Option | 내용 | 판정 | 이유 |
|--------|------|------|------|
| A | 현재 REL로 직접 승격 | ❌ | 존재 조건과 측정 방식이 다름 |
| B | REL + `intervention=true` 필드 추가 | ⚠️ | 임시방편，장기적으로 불일치 |
| **C** | **Intervention Family 별도 설계** | **✅** | 의미적 경계 유지，장기 확장 가능 |
| D | 완전히 별도 Intervention Graph | 미결정 | C보다 범위가 크므로 별도 평가 필요 |

---

## Recommendation

**Peer Support Arrangements → Community Participation：**
- ❌ 현재 REL 모델로 승격하지 않음
- ⏸ Candidate REL 상태 유지
- ✅ Sprint 6에서 Intervention Layer 설계 후 재평가

**Sprint 6 Agenda（제안）：**

```
Intervention Layer Design
        ↓
Q1: Intervention VAR 유형 정의
Q2: Intervention Tier 기준 수립
Q3: Intervention-to-Outcome REL 건모 방식
Q4: 기존 Knowledge Graph와의 연결 방식
        ↓
Peer Support Arrangements → CP 재평가
```

---

## Summary

> **Intervention is not a relationship pattern — it is a causal mechanism activated by design. Modeling interventions alongside natural relationships risks conflating correlation/prediction with causal effect. A separate Intervention Layer with its own ontology, measurement standards, and evidence tiers is the architecturally appropriate direction.**

---

*Intervention REL Assessment Report — 2026-07-07*
*Sprint 5 Phase C Final Item*
*Decision: No immediate promotion. Defer to Sprint 6 Intervention Layer Design.*
