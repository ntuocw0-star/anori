# Sprint 7 Phase H — 转衔规划生产记录

**Anori Knowledge Operating System**
日期：2026-07-07
状态：完成

---

## Life Stage Intervention Assessment 结论

**INT-000008 = Transition Planning（Life-stage Intervention）**

```
Q1：本体？
→ Life-stage Intervention
→ Coordinated / Time-dependent / Multi-system
→ 核心机制：跨发展阶段的系统协调，而非单一技能传授

Q2：Primary Outcome？
→ Transition Readiness（转衔准备度）
→ 需要新建 VAR-000053（Ontology Expansion）

Q3：时间属性？
→ life_stage: adolescence（Metadata Expansion）
→ 与 age_scope、population 字段模式一致
```

**Coverage Matrix 最后一个预登记 Modeling Risk——Life Stage Intervention——正式验证完成。**

---

## VAR-000053（新建）：转衔准备度

| 字段 | 内容 |
|------|------|
| ID | VAR-000053 |
| 正式名称 | Transition Readiness（转衔准备度）|
| 中文名 | 转衔准备度 |
| 别名 | Transition Preparedness、School-to-Adult Transition Readiness、Independent Living Readiness |
| 类型 | Protective |
| 定义 | 青少年在从儿童教育/医疗系统过渡到成人系统过程中，具备必要技能、知识和自我倡导能力的程度。包括医疗自我管理、职业准备、社区生活技能和自我决定能力四个核心维度。|
| 测量工具 | TRAQ（Transition Readiness Assessment Questionnaire）；Self-Determination Scale |
| 与已有 VAR 的区别 | ≠ Community Participation（VAR-000023）：是"准备过渡"的状态，不是参与行为本身。≠ 生活质量：是功能性准备度，不是主观幸福感。|
| 新建原因 | Ontology Expansion（OBS-015）：Transition Readiness 是独立 Construct，测量工具标准化，学术界作为独立结果变量处理。|

---

## INT-000008：转衔规划（Transition Planning）

| 字段 | 内容 |
|------|------|
| ID | INT-000008 |
| 正式名称 | Transition Planning（转衔规划）|
| 别名 | Transition Support、Life Stage Planning、School-to-Adult Transition、IEP Transition Planning、Healthcare Transition Intervention（HTI）|
| 定义 | 围绕发展性关键转换期（如学校到成人生活）进行的跨系统协调性干预，整合教育、医疗、就业和社区支持资源，提升青少年转衔准备度和成人生活质量。|
| 目标人群 | 发展障碍、ASD、智力障碍青少年（主要 14-22 岁）|
| 传递方式 | 多系统协调（学校、家庭、医疗、职业服务）|
| 领域 | 转衔 / 教育 / 社区 |
| **干预类型** | **Life-stage Intervention** |
| **Metadata** | **life_stage: adolescence**；**coordination_based: true**；**time_dependent: true** |
| 粒度说明 | INT-000008 是上位概念，具体服务（IEP 转衔计划、医疗转衔干预等）作为 Variants。|

---

## IREL-000018：转衔规划 → 转衔准备度↑

| 字段 | 内容 |
|------|------|
| ID | IREL-000018 |
| 来源 | INT-000008 |
| 目标 VAR | VAR-000053 转衔准备度 |
| 效应极性 | 正向 |
| 效应大小 | 中等 |
| 证据 Tier | **Tier 2** |
| 证据等级 | **Moderate** |
| Outcome Type | **Primary** |
| 主要证据 | SR of Transitional Care Interventions（TCIs）；TRAQ 验证研究；特殊教育转衔 SR |
| 路径说明 | Transition Planning → Transition Readiness↑（Primary）→ Community Participation↑（Natural REL，Intermediate）→ Employment↑ / QoL↑（Natural REL，Distal）|

---

## IEA-000012：IREL-000018 证据

| 字段 | 内容 |
|------|------|
| ID | IEA-000012 |
| 支持 IREL | IREL-000018 |
| 支持 INT | INT-000008 |
| 证据 Tier | 2 |
| 证据等级 | Moderate |
| 关键发现 | Transitional Care Interventions 系统综述确认转衔规划干预改善转衔准备度；TRAQ 作为 Primary Outcome 测量工具在多项 RCT 中使用；特殊教育转衔规划与成人自我决定和社区参与正相关。|
| 证据局限 | 高质量 RCT 相对较少；转衔本身的跨度（多年）使随机对照设计困难；证据主要来自特殊教育和医疗保健两个子领域，整合 SR 有限。|

---

## Intervention Ontology 七种类型——全部确立

| 类型 | 代表 INT | 核心机制 | 新增字段 |
|------|---------|---------|---------|
| Program Family | Parent Training | 技能传授 | — |
| Professional Practice | Family-centered Practice | 专业关系质量 | — |
| Generic Intervention | Social Skills Training | 通用技能培训 | — |
| Framework | PBS | 行为支持框架 | Outcome Hierarchy |
| Tool-based | AAC | 工具 + 方法 + 环境 | tool_dependency |
| Program Cluster | NDBI | 共享机制的项目群 | age_scope |
| **Life-stage Intervention** | **Transition Planning** | **跨系统生命阶段协调** | **life_stage, coordination_based, time_dependent** |

**Coverage Matrix 中六种预登记 Modeling Risk 全部完成验证。**

---

## Ontology Expansion 汇总（Intervention Layer 新增 VAR）

| VAR | 来源 | 类型 |
|-----|------|------|
| VAR-000050 Unmet Family Needs | REL-000104 / KGO-002 | Natural Layer |
| VAR-000051 Challenge Behavior | INT-000005 PBS | Intervention Layer |
| VAR-000052 Communication | INT-000006 AAC | Intervention Layer |
| **VAR-000053 Transition Readiness** | **INT-000008 Transition Planning** | **Intervention Layer** |

---

## Sprint 7 KPI 最终更新

| 指标 | 之前 | 现在 |
|------|------|------|
| INT | 7 | **8** |
| IREL | 17 | **18** |
| IEA | 11 | **12** |
| VAR（Intervention 新增）| 3 | **4**（VAR-000053）|
| Domains Covered | 5/8 | **6/8**（+Transition）|
| Modeling Risk Resolved | 5/6 | **6/6（全部完成）** |

---

*Sprint 7 Phase H — 转衔规划 完成*
*2026-07-07*
*Coverage Matrix Modeling Risk：全部完成验证*
