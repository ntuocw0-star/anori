# Sprint 6 Phase D — Carter 2016 IRM Pilot

**Anori Knowledge Operating System**
Date: 2026-07-07
Status: Pilot Complete — 검증 성공

---

## Pilot 목적

Carter et al. 2016 RCT를 IRM（Intervention Relation Model）에 완전히 표현할 수 있는지 검증.
세 가지 검증 질문：

1. Intervention Object로 완전히 표현 가능한가?
2. IREL이 KOS VAR와 올바르게 연결되는가?
3. Evidence Tier와 Fidelity 필드가 적절하게 채워지는가?

---

## INT-000001：Peer Support Arrangements

### Intervention Object

```
id: INT-000001
name: Peer Support Arrangements
aliases:
  - Peer Support Interventions
  - Peer Mediated Interventions（PMI）
  - Peer Network Strategies
  - 또래 지원 배치
definition: >
  일반 교육 환경에서 장애 학생을 지원하도록 훈련된 비장애 또래를 배치하는
  학교 기반 Intervention. 준전문가/특수교사가 또래를 모집·훈련·지원하며,
  장애 학생에게 개별화된 학업적·사회적 지원을 제공한다.
target_population: 중증 장애 고등학생（Severe Disabilities, including ASD）
delivery_mode: Group（Classroom-based, peer-dyad）
domain: Educational / Community
intensity:
  duration: one semester（약 4-5개월）
  frequency: 매일（일반 교육 수업 내）
  session_structure: 또래가 수업 중 지속적으로 함께함
implementation_context: 일반 교육 고등학교 교실
implementation_requirements:
  - 파라프로페셔널 또는 특수교사 역할
  - 또래 모집 및 사전 훈련
  - 지속적 코칭 및 모니터링
fidelity_instrument: Peer Support Fidelity Checklist（Brock & Carter 2016）
created: 2026-07-07
```

---

## IREL-000001：Peer Support Arrangements → Community Participation

### IREL Object

```
id: IREL-000001
source_type: Intervention
source_id: INT-000001
source_name: Peer Support Arrangements

relation: affects

target_var: VAR-000023
target_name: Community Participation

effect_polarity: Positive
effect_description: >
  Peer Support Arrangements 시행 후 사회적 참여（social participation）,
  동급생과의 상호작용, 사회적 목표 달성이 유의미하게 증가.
  새로운 우정 형성 수도 증가.

effect_size: Moderate-to-Large
effect_note: >
  친구 획득, 사회적 목표 달성, 동급생 상호작용에서 가장 큰 효과.
  학업 참여에서도 유의미한 개선.

evidence_tier: 2
evidence_tier_note: Single RCT（multi-site, well-powered）
evidence_grade: Moderate
evidence_grade_note: >
  Tier 2 RCT, 충분한 표본（N=51 experimental, N=48 control）.
  단일 연구이므로 High가 아닌 Moderate.
  Meta-analysis 추가 시 High로 승격 가능.

fidelity_reported: true
fidelity_level: High
fidelity_note: >
  Brock & Carter（2016）는 별도 연구로 Peer Support Arrangements의
  Fidelity 측정 도구와 실행 충실도를 검증. 본 RCT에서 파라프로페셔널이
  또래를 훈련·지원하는 프로토콜이 명확히 기술됨.

primary_evidence: >
  Carter, E. W., Asmus, J., Moss, C. K., et al.（2016）.
  Randomized evaluation of peer support arrangements to support the
  inclusion of high school students with severe disabilities.
  Exceptional Children, 82（2）, 209-233.
  DOI: 10.1177/0014402915598780

secondary_evidence: >
  Brock, M. E., & Carter, E. W.（2016）.
  Efficacy of teachers training paraprofessionals to implement peer
  support arrangements. Exceptional Children, 82（3）, 354-371.

population: high school students with severe disabilities
evidence_last_reviewed: 2026-07-07
```

---

## IEA-000001：Evidence Card for IREL-000001

### Intervention Evidence Card

```
id: IEA-000001
supports_irel: IREL-000001
supports_int: INT-000001
evidence_tier: 2
evidence_grade: Moderate

citation: >
  Carter, E. W., Asmus, J., Moss, C. K., Biggs, E. E., Bolt, D. M.,
  Born, T. L., ... & Weir, K.（2016）.
  Randomized evaluation of peer support arrangements to support the
  inclusion of high school students with severe disabilities.
  Exceptional Children, 82（2）, 209-233.
  DOI: 10.1177/0014402915598780

study_design: RCT（Randomized Controlled Trial）
n_experimental: 51
n_control: 48
duration: one semester

intervention: Peer Support Arrangements
outcome: Community Participation / Social Participation
effect: Positive — increased peer interactions, social participation, friendship formation
fidelity: High（Brock & Carter 2016 validated fidelity instrument）

notes: >
  Carter 2016은 KOS의 Intervention Relation Model（IRM）의
  첫 번째 Pilot이다. 이 연구는 이전에 REL-000094（Community Participation
  Citation）에 잘못 귀속되었다가（KIR-004），IRM 설계 완료 후
  올바른 IREL 형태로 표현되었다.
```

---

## Knowledge Graph 연결 구조

```
INT-000001（Peer Support Arrangements）
        ↓ IREL-000001
        ↓ affects（Positive, Tier 2, Moderate）
VAR-000023（Community Participation）
        ↓ REL-000080（increases）
VAR-000022（Quality of Life）
        ↓ REL-000083（increases）
VAR-000019（Well-being）
```

IREL이 자연 REL 체계의 진입점이 되어 이후의 연쇄는 기존 REL이 처리합니다.

---

## Pilot 검증 결과

| 검증 항목 | 결과 | 비고 |
|---------|------|------|
| Intervention Object 완전 표현 | ✅ | INT-000001 모든 필드 충족 |
| IREL → VAR 연결 | ✅ | VAR-000023 정확히 연결 |
| Evidence Tier 적용 | ✅ | Tier 2（RCT, Fidelity High） |
| Fidelity 필드 | ✅ | Brock & Carter 2016으로 확인 |
| Natural REL과의 연결 | ✅ | IREL → VAR → REL 체계 연결 |
| KIR 이력 반영 | ✅ | 이전 잘못된 귀속 명확히 기록 |

**Pilot 결론：IRM 설계가 실제 사례에서 완전히 작동한다.**

---

## Phase D 결론

**Sprint 6 전체 산출물：**

| 자산 | 상태 |
|------|------|
| Intervention Ontology（Phase A） | ✅ 확정 |
| Intervention Evidence Tier（Phase B） | ✅ 확정 |
| Intervention Relation Model（Phase C） | ✅ 확정 |
| IRM Pilot：Carter 2016（Phase D） | ✅ **검증 성공** |

**Sprint 6 설계 원칙（冻结）：**

> Natural Knowledge Graph와 Intervention Knowledge Graph는 분층되지만 VAR를 통해 연결된다. Intervention은 REL과 평행한 IREL 관계 유형으로 표현되며，`affects` 동사와 `effect_polarity`，IREL Tier，Fidelity 필드를 통해 완전히 기술된다.

---

*Sprint 6 Phase D — IRM Pilot Complete*
*2026-07-07*
*다음：Sprint 6 Final Review + Sprint 7 Starting State*
