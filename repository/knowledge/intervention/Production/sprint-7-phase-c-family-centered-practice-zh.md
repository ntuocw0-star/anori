# Sprint 7 Phase C — 家庭中心实践生产记录

**Anori Knowledge Operating System**
日期：2026-07-07
状态：完成

---

## Evidence Scope Verification（已通过）

**Dunst et al. 2007 同时支持 INT-000002 与 INT-000003 的依据：**

| 维度 | INT-000002 亲职训练 | INT-000003 家庭中心实践 |
|------|-----------------|---------------------|
| 因果机制 | 行为技能传授 → 父母能力↑ | 专业关系质量↑ → 家庭自效能↑ |
| 实施者变化 | 父母学习技能 | 专业人员改变帮助给予方式 |
| 核心构念 | Parenting Skills | Relational + Participatory Helpgiving |

机制独立，OBS-017 验证通过，允许共享文献来源。

---

## INT-000003：家庭中心实践（Family-centered Practice）

| 字段 | 内容 |
|------|------|
| ID | INT-000003 |
| 正式名称 | Family-centered Practice（家庭中心实践）|
| 别名 | Family-centered Care（FCC）、Family-centered Helpgiving、Family-centered Early Intervention（FCEI）、家庭中心服务、以家庭为中心的支持 |
| 定义 | 一种以家庭-专业人员伙伴关系为核心的服务实践模式，通过关系性帮助给予（Relational Helpgiving）和参与性帮助给予（Participatory Helpgiving）两类核心实践，增强家庭自效能与功能，使家庭在子女发展支持中发挥主导作用。|
| 目标人群 | 发展障碍、ASD、残障儿童的家庭（父母/主要照顾者）|
| 传递方式 | 专业人员主导、服务机构或早期干预系统内实施 |
| 领域 | 家庭支持 / 早期干预 |
| 与亲职训练的区别 | 亲职训练的变化主体是父母（学习技能）；家庭中心实践的变化主体是专业人员（改善服务质量）|
| 核心机制 | Relational Helpgiving（尊重、倾听、合作）→ Participatory Helpgiving（家庭决策参与、能力建设）→ 家庭自效能↑ → 家庭结果↑ |
| 粒度说明 | INT-000003 是上位概念，不同实施模型（Dunst 模型、Patient-centered Care 等）作为实践变体，而非独立 INT。|
| 创建日期 | 2026-07-07 |

---

## 四条 IREL

### IREL-000006：家庭中心实践 → 家庭功能

| 字段 | 内容 |
|------|------|
| ID | IREL-000006 |
| 来源 | INT-000003 |
| 关系动词 | affects |
| 目标 VAR | VAR-000015 家庭功能（Family Functioning）|
| 效应极性 | 正向 |
| 效应大小 | 中到大 |
| 证据 Tier | **Tier 1**（47项研究 Meta-analysis）|
| 证据等级 | **High** |
| 充实度报告 | 是 |
| 充实度水平 | 高（各项目有标准化实践框架）|
| 主要证据 | Dunst, Trivette & Hamby 2007（与 EA-000028 同源）|
| 注 | 与 IREL-000004（亲职训练 → 家庭功能）形成 Many-to-One 首次验证：两个独立 INT 收敛于同一 Outcome。|

---

### IREL-000007：家庭中心实践 → 父母压力

| 字段 | 内容 |
|------|------|
| ID | IREL-000007 |
| 来源 | INT-000003 |
| 关系动词 | affects |
| 目标 VAR | VAR-000002 父母压力（Parent Stress）|
| 效应极性 | 负向（压力降低）|
| 效应大小 | 中等 |
| 证据 Tier | **Tier 1** |
| 证据等级 | **High** |
| 充实度报告 | 是 |
| 主要证据 | Dunst et al. 2007：家庭中心帮助给予实践与降低父母压力直接相关 |

---

### IREL-000008：家庭中心实践 → 亲职质量

| 字段 | 内容 |
|------|------|
| ID | IREL-000008 |
| 来源 | INT-000003 |
| 关系动词 | affects |
| 目标 VAR | VAR-000003 亲职质量（Parenting Quality）|
| 效应极性 | 正向 |
| 效应大小 | 中等 |
| 证据 Tier | **Tier 1** |
| 证据等级 | **High** |
| 充实度报告 | 是 |
| 主要证据 | Dunst et al. 2007：参与性帮助给予 → 父母自效能↑ → 亲职实践质量↑ |
| 机制注 | 路径通过父母自效能（Self-efficacy）中介，而非直接技能传授，与 INT-000002 路径不同。|

---

### IREL-000009：家庭中心实践 → 家庭生活质量

| 字段 | 内容 |
|------|------|
| ID | IREL-000009 |
| 来源 | INT-000003 |
| 关系动词 | affects |
| 目标 VAR | VAR-000004 家庭生活质量（Family QoL）|
| 效应极性 | 正向 |
| 效应大小 | 中等 |
| 证据 Tier | **Tier 1** |
| 证据等级 | **Moderate**（因测量工具异质性降级）|
| 充实度报告 | 是 |
| **Annotation Type** | **Measurement Heterogeneity** |
| **Annotation Note** | Family QoL 在 Dunst 2007 Meta-analysis 中作为主要结果之一报告，有直接效应，但47项研究使用异质性测量工具（非统一使用 Beach Center FQoL Scale）。Concept 边界通过，等级因异质性调整为 Moderate。|
| 与 Parent Training 区别 | Parent Training → FQoL 是 Pending Boundary（证据不足）；此处是 Pass with Annotation（有证据但工具异质）。|

---

## 三张 IEA

### IEA-000006：IREL-000006/007/008/009 共用来源

| 字段 | 内容 |
|------|------|
| ID | IEA-000006 |
| 支持 IREL | IREL-000006、IREL-000007、IREL-000008、IREL-000009 |
| 支持 INT | INT-000003 |
| 证据 Tier | 1 |
| 证据等级 | High（FQoL 为 Moderate）|
| 引用 | Dunst, C. J., Trivette, C. M., & Hamby, D. W.（2007）. Meta-analysis of family-centered helpgiving practices research. Mental Retardation and Developmental Disabilities Research Reviews, 13, 370–378. DOI: 10.1002/mrdd.20176 |
| 研究设计 | Meta-analysis |
| 研究数 | 47项 |
| N | >11,000 |
| 国家数 | 7 |
| 关键发现 | 家庭中心帮助给予实践（关系性+参与性）对家庭功能、父母压力、亲职质量、家庭生活质量均有显著效应，距离帮助给予交换最近的结果效应最强。|
| 共享说明 | 与 EA-000028（REL-000057）同源文献。EA-000028 支持 Natural REL（正式支持 → 家庭功能），IEA-000006 支持 IREL（家庭中心实践 Intervention → 家庭结果）。两者机制不同，共享文献是合法的（OBS-017 验证）。|

---

## Pattern Many-to-One 首次验证

```
INT-000002（亲职训练）
        ↓ IREL-000004
        ↓
VAR-000015（家庭功能）← ← ← 同一 Outcome
        ↑
        ↑ IREL-000006
INT-000003（家庭中心实践）
```

两种独立机制的 Intervention 收敛于同一 Outcome，首次验证 Many-to-One Pattern。

---

## Sprint 7 KPI 更新

| 指标 | Phase B 后 | Phase C 后 |
|------|----------|----------|
| INT | 2 | **3**（+1）|
| IREL | 5 | **9**（+4）|
| IEA | 5 | **6**（+1，共用来源）|
| Intervention Domains | 2 | **2**（家庭支持 深化）|
| Production Patterns 验证 | 2 | **3**（新增 Many-to-One）|

---

## Annotation 体系正式建立

| 状态类型 | 含义 | 案例 |
|---------|------|------|
| ✅ Pass | 直接证据，概念对齐 | IREL-000006/007/008 |
| ✅ Pass with Annotation | 有证据，但需补充说明（如测量异质性）| IREL-000009 |
| ⏸ Pending Boundary | 证据不足，等待直接研究 | IREL-PENDING-001（Parent Training → FQoL）|

---

*Sprint 7 Phase C — 家庭中心实践 完成*
*2026-07-07*
*下一步：Phase D — 社交技能训练（Social Skills Training）*
