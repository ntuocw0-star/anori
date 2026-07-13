# Sprint 7 Phase D — 社交技能训练生产记录

**Anori Knowledge Operating System**
日期：2026-07-07
状态：完成

---

## Boundary Assessment 结论（已通过）

**Social Skills Training 建立为上位概念 INT，理由：**
1. 多项 Meta-analysis 整合分析（符合 Intervention Registry Rule）
2. 共同干预目标：Social Competence → Community Participation → Belonging
3. 机制差异（PEERS vs Video Modeling）不超过允许范围——学术界以整合概念处理

**Variants（别名/变体）：**
PEERS®、Social Stories、Video Modeling、Group Social Skills Intervention（GSSI）、Social Skills Groups

---

## INT-000004：社交技能训练（Social Skills Training）

| 字段 | 内容 |
|------|------|
| ID | INT-000004 |
| 正式名称 | Social Skills Training（社交技能训练）|
| 别名 | SST、Group Social Skills Intervention（GSSI）、PEERS®（Program for the Education and Enrichment of Relational Skills）、Social Stories、Video Modeling Social Skills、Social Skills Groups |
| 定义 | 通过明确教授、角色扮演、观察学习等多种方式帮助 ASD 或其他发展差异儿童/青少年习得社交技能的结构化干预。核心目标是改善社交互动、友谊建立、社区参与和归属感。|
| 目标人群 | ASD、高功能 ASD、阿斯伯格综合征儿童及青少年（3-18岁为主）|
| 传递方式 | 小组 / 个别 / 技术辅助（视频建模等）|
| 领域 | 教育 / 社区 |
| 强度 | 典型为 8-20 次会话，持续 10-20 周 |
| 实施情境 | 学校、临床机构、社区中心 |
| 粒度说明 | INT-000004 是上位概念。PEERS® 等具体项目为 Variants，共享核心目标（社交能力 → 参与 → 归属感），Meta-analysis 以整合层级分析。如未来研究需要区分具体机制，可拆出子 INT。|
| 创建日期 | 2026-07-07 |

---

## 四条 IREL

### IREL-000010：社交技能训练 → 社区参与

| 字段 | 内容 |
|------|------|
| ID | IREL-000010 |
| 来源 | INT-000004 |
| 关系动词 | affects |
| 目标 VAR | VAR-000023 社区参与（Community Participation）|
| 效应极性 | 正向 |
| 效应大小 | 小到中（Small-to-Moderate）|
| 证据 Tier | **Tier 1**（RCT Meta-analysis）|
| 证据等级 | **Moderate**（社区参与作为远端结果，直接证据为低确实性）|
| 充实度报告 | 是 |
| 充实度水平 | 中等（实施忠实度对结果影响显著）|
| 主要证据 | 多项 Meta-analysis（50个研究，10,904名参与者）：SST 改善社交技能，进而影响社区参与 |
| **Annotation** | **Evidence Strength**：社区参与属于远端结果（distal outcome）；当前证据对直接社区参与改善为低确实性，通过改善社交技能的中介路径更稳健。|

---

### IREL-000011：社交技能训练 → 归属感/孤独感减少

| 字段 | 内容 |
|------|------|
| ID | IREL-000011 |
| 来源 | INT-000004 |
| 关系动词 | affects |
| 目标 VAR | VAR-000028 归属感（Belonging）|
| 效应极性 | 正向（孤独感↓，归属感↑）|
| 效应大小 | 中等 |
| 证据 Tier | **Tier 1** |
| 证据等级 | **Moderate** |
| 充实度报告 | 是 |
| 主要证据 | GSSI Meta-analysis（Gates et al. 2017; Reichow et al. 2012）：减少孤独感，提升归属感 |

---

### IREL-000012：社交技能训练 → 友谊支持满意度

| 字段 | 内容 |
|------|------|
| ID | IREL-000012 |
| 来源 | INT-000004 |
| 关系动词 | affects |
| 目标 VAR | VAR-000011 友谊支持满意度（Friendship Support Satisfaction）|
| 效应极性 | 正向（友谊质量↑，友谊数量↑）|
| 效应大小 | 中到大 |
| 证据 Tier | **Tier 1** |
| 证据等级 | **High** |
| 充实度报告 | 是 |
| 主要证据 | Reichow et al. 2012（SR+Meta）：社交技能训练改善友谊质量和社会网络提名数；PEERS® RCT 多项研究证实友谊形成改善 |
| 注 | 友谊结果是 SST 最强、最一致的证据领域，Grade 为 High。|

---

### IREL-000013：社交技能训练 → 儿童心理健康

| 字段 | 内容 |
|------|------|
| ID | IREL-000013 |
| 来源 | INT-000004 |
| 关系动词 | affects |
| 目标 VAR | VAR-000013 儿童心理健康（Child Mental Health）|
| 效应极性 | 正向（社交反应性改善、孤立感减少）|
| 效应大小 | 小到中 |
| 证据 Tier | **Tier 1** |
| 证据等级 | **Moderate** |
| 充实度报告 | 是 |
| 主要证据 | SR+Meta（Springer, 2025）：RCT 研究证实 SST 改善 ASD 人群社交反应性；降低孤立感，改善课堂社交行为 |

---

## 两张 IEA

### IEA-000007：支持 IREL-000010/011/013

| 字段 | 内容 |
|------|------|
| ID | IEA-000007 |
| 支持 IREL | IREL-000010、IREL-000011、IREL-000013 |
| 支持 INT | INT-000004 |
| 证据 Tier | 1 |
| 证据等级 | Moderate |
| 引用 | 多项 Meta-analysis：Bellini et al.（2007）; Reichow et al.（2012）; Gates et al.（2017）; SR+Meta 2025（PMC11918677）|
| 研究数 | 17-55 项不等（各 Meta-analysis）|
| N | 10,904（最大样本 Meta-analysis）|
| 关键发现 | SST 对社交技能、社交反应性、孤独感、社区参与有小到中等效应（d=0.28-0.60）；友谊结果效应最大。|
| Annotation | Community Participation 为远端结果，Low Certainty；Belonging/Loneliness 为 Moderate；Friendship 为 High |

---

### IEA-000008：支持 IREL-000012（友谊专项证据）

| 字段 | 内容 |
|------|------|
| ID | IEA-000008 |
| 支持 IREL | IREL-000012 |
| 支持 INT | INT-000004 |
| 证据 Tier | 1 |
| 证据等级 | High |
| 引用 | Reichow, B., et al.（2012）. Social skills interventions for individuals with ASD: Evaluation for evidence-based practices within a best evidence synthesis framework. Journal of Autism and Developmental Disorders. |
| 关键发现 | 父母报告和自我报告均显示友谊质量和社交能力有中等改善；PEERS® RCT 多项研究证实友谊形成、社交网络中心性提升。|

---

## Pattern 4 验证：Participation Domain 集中连接

```
INT-000004（社交技能训练）
        ├── IREL-000010 → VAR-000023（社区参与）
        │                     ↓ REL → VAR-000022（生活质量）
        │                     ↓ REL → VAR-000019（幸福感）
        │
        ├── IREL-000011 → VAR-000028（归属感）
        │                     ↓ REL → VAR-000019（幸福感）
        │
        ├── IREL-000012 → VAR-000011（友谊支持满意度）
        │                     ↓ REL → VAR-000019（幸福感）
        │
        └── IREL-000013 → VAR-000013（儿童心理健康）
                               ↓ REL → （扩展路径）
```

**首次与 Participation Knowledge Graph 深度融合：**

IREL-000010/011/012/013 全部指向 KD-PAR（参与科学）领域的核心变量，Intervention Layer 第一次真正与最早建立的 Natural Knowledge Graph 主链形成深度连接。

---

## Sprint 7 KPI 更新

| 指标 | Phase C 后 | Phase D 后 |
|------|----------|----------|
| INT | 3 | **4**（+1）|
| IREL | 9 | **13**（+4）|
| IEA | 6 | **8**（+2）|
| Intervention Domains | 2 | **3（+ 教育/社区）**|
| Production Patterns 验证 | 3 | **4（+ Participation Domain 集中连接）**|

---

## Annotation 体系总览（截至 Phase D）

| IREL | Annotation Type | 说明 |
|------|----------------|------|
| IREL-000009 | Measurement Heterogeneity | FQoL 工具异质 |
| IREL-000010 | Evidence Strength | CP 属于远端结果，低确实性 |
| IREL-PENDING-001 | Pending Boundary | Parent Training → FQoL 证据不足 |

---

*Sprint 7 Phase D — 社交技能训练 完成*
*2026-07-07*
*下一步：Phase E — 积极行为支持（Positive Behavior Support）*
