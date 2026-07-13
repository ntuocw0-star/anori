# concept-participation Module v1.0
冻结日期：2026-07-12
Sprint：23

---

## Concept Profile

id: concept-participation
label: Participation
concept_type: Hierarchical
concept_maturity: Mature International Framework
concept_origin: Language Harmonization
status: Active
lifecycle: Growing

core_framework:
  - ICF（WHO, 2001/2007）
  - fPRC（Imms et al., 2016/2017）

primary_unit_of_analysis: Child Participation

primary_measurement_unit:
  - Attendance（频率 · 多样性）
  - Involvement（投入体验质量）

---

## Evidence Articles（6篇）

EA-000020  Imms et al. (2016)
  'Participation': A Systematic Review of Language, Definitions, and Constructs
  Dev Med Child Neurol, 58(1), 29–38 · doi:10.1111/dmcn.12932
  Evidence Type: Systematic Review · Role: Language Harmonization
  Cluster: cluster-fprc-framework
  Validator: PASS

EA-000021  Imms et al. (2017)
  Participation, Both a Means and an End
  Dev Med Child Neurol, 59(1), 16–25 · doi:10.1111/dmcn.13237
  Evidence Type: Empirical Study · Role: Framework Definition
  Cluster: cluster-fprc-framework
  Validator: PASS

EA-000022  Adair et al. (2018)
  Measures Used to Quantify Participation: Alignment with fPRC
  Dev Med Child Neurol, 60(11), 1101–1116 · doi:10.1111/dmcn.13959
  Evidence Type: Systematic Review · Role: Measurement Review
  Cluster: cluster-participation-measurement
  Validator: PASS

EA-000023  Adair et al. (2015)
  The Effect of Interventions Aimed at Improving Participation Outcomes
  Dev Med Child Neurol, 57(12), 1093–1104 · doi:10.1111/dmcn.12809
  Evidence Type: Systematic Review · Role: Intervention Evidence
  Cluster: cluster-participation-intervention
  Validator: PASS

EA-000024  Arakelyan et al. (2019)
  Family Factors Associated with Participation of Children with Disabilities
  Dev Med Child Neurol, 61(5), 514–522 · doi:10.1111/dmcn.14133
  Evidence Type: Systematic Review · Role: Associated Factors · Cross-concept
  Secondary: concept-family-support · concept-parent-stress
  Validator: PASS

EA-000025  Schlebusch et al. (2020)
  Participation in LMICs: A Scoping Review
  Dev Med Child Neurol, 62(11), 1259–1265 · doi:10.1111/dmcn.14609
  Evidence Type: Systematic Review · Role: Evidence Mapping
  Validator: PASS

---

## Evidence Clusters

cluster-fprc-framework
  Type: Framework Evolution
  Roles: EA-000020 Language Harmonization · EA-000021 Framework Definition
  Purpose: fPRC 从语言统一到正式概念框架的两步发展

cluster-participation-measurement
  Type: Measurement Development
  Roles: EA-000022 Measurement Review
  Purpose: Participation 测量工具与 fPRC 框架的对应关系

cluster-participation-intervention
  Type: Evidence Accumulation
  Roles: EA-000023 Intervention Evidence
  Purpose: 障碍儿童 Participation 干预研究的证据积累

---

## Evidence Topics（3篇）

ET-000028  Participation（Concept ET）
  supported_by: EA-000020（primary）· EA-000021（primary）
  Validator: PASS · Repository Status: Full

ET-000029  Participation Measurement（Measurement Framework ET）
  supported_by: EA-000022（primary）
  Validator: PASS · Repository Status: Full

ET-000030  Participation Evidence（Evidence ET）
  supported_by: EA-000023 · EA-000024 · EA-000025
  Validator: PASS
  Repository Status: Conditionally Ready
  Reason: Participation Differences 节当前反映研究覆盖差异而非系统综合的群体参与水平差异

---

## Knowledge Article

KA-000007  Participation
  Structure: Core Concepts → Measurement Framework → Evidence
  Concept Type: Hierarchical · Origin: Language Harmonization
  Functional Complete · Revision 1
  Validator: PASS

---

## Series

SERIES-000005  Participation
  Lifecycle: Growing
  Validator: PASS

---

## Analytics Result

  Growing Gate    PASS
    EA ≥ 1 ✓ · ET × 3（三层齐备）✓ · KA ≥ 1 ✓
  Lifecycle       Growing
  Repository Status  Calculated by Analytics

---

## Known Limitations

- ET-000030 Participation Differences 节：
  当前仅覆盖研究覆盖差异（Attendance 研究多 · Involvement 研究少）
  尚未系统综合群体间实际参与水平差异
  待后续 Evidence EA 补充后完善

- 跨链连接（Family Support · Parenting Stress · Family Functioning · FQOL）：
  当前基于 EA-000024 间接参考，无直接 Cross-concept EA 支撑
  待后续 Sprint 建立

---

## Next Planned Expansion

- Participation Instrument Evidence EA（PEM-CY / CAPE Psychometric）
- Participation Differences EA（群体间实际参与水平差异）
- Cross-concept EA（Participation ↔ Family Support / FQOL / Parenting Stress）
