# Sprint 7 Phase G — NDBI 自然发展行为干预生产记录

**Anori Knowledge Operating System**
日期：2026-07-07
状态：完成

---

## Program Cluster Assessment 结论

**INT-000007 = NDBI（上位概念）**

判断依据：
- 学术界以"NDBI"为整合层级进行 Meta-analysis（Intervention Registry Rule）
- 四项共同机制：自然情境 / 自然强化 / 发展原理 / 行为原理（OBS-017：共享核心机制）
- ESDM / PRT / JASPER / EMT = Variants，不是独立 INT

---

## INT-000007：自然发展行为干预（NDBI）

| 字段 | 内容 |
|------|------|
| ID | INT-000007 |
| 正式名称 | Naturalistic Developmental Behavioral Intervention（NDBI，自然发展行为干预）|
| 别名 | Early Start Denver Model（ESDM）、Pivotal Response Treatment（PRT）、JASPER（Joint Attention Symbolic Play Engagement and Regulation）、Enhanced Milieu Teaching（EMT）、Project ImPACT、Incidental Teaching |
| 定义 | 结合应用行为分析与发展科学，在自然情境（游戏、日常作息）中通过自然强化物、儿童主导和发展适龄目标，提升ASD儿童社会沟通、语言、认知和游戏技能的干预系列。|
| 目标人群 | 早期 ASD 儿童（主要 0-8 岁，部分项目延伸至学龄期）|
| 传递方式 | 治疗师、家长中介（Parent-mediated）或两者结合 |
| 领域 | 临床 / 教育 / 家庭支持 |
| **Metadata：age_scope** | **early childhood（主要），school age（部分项目，如 PRT）**|
| 类型 | Program Cluster（首次验证此 Intervention 组织形式）|

---

## 两条 IREL（双 Primary Outcome 首次出现）

### IREL-000016：NDBI → 沟通能力

| 字段 | 内容 |
|------|------|
| ID | IREL-000016 |
| 来源 | INT-000007 |
| 目标 VAR | VAR-000052 沟通能力（Communication）|
| 效应极性 | 正向 |
| 效应大小 | 中到大 |
| 证据 Tier | **Tier 1** |
| 证据等级 | **High** |
| Outcome Type | **Primary** |
| 主要证据 | Project AIM Meta-analysis（Crank et al. 2021，27项 NDBI 研究）；网络 Meta-analysis（41个 RCT，N=2,781，2025）|

---

### IREL-000017：NDBI → 儿童心理健康

| 字段 | 内容 |
|------|------|
| ID | IREL-000017 |
| 来源 | INT-000007 |
| 目标 VAR | VAR-000013 儿童心理健康（Child Mental Health）|
| 效应极性 | 正向（ASD症状严重度↓，社会参与↑，游戏技能↑）|
| 效应大小 | 小到中 |
| 证据 Tier | **Tier 1** |
| 证据等级 | **Moderate** |
| Outcome Type | **Primary** |
| **Annotation** | **Evidence Strength**：效果在情境约束型近端结果中更强；泛化至社区参与和 QoL 的效果更有限。|
| 主要证据 | Project AIM（Sandbank et al. 2020）；Tiede & Walton 2019 Meta-analysis |

---

## IEA-000011（共用）：IREL-000016/017 证据

| 字段 | 内容 |
|------|------|
| ID | IEA-000011 |
| 支持 IREL | IREL-000016、IREL-000017 |
| 支持 INT | INT-000007 |
| 证据 Tier | 1 |
| 证据等级 | High（Communication）/ Moderate（Child MH）|
| 引用 1 | Crank, J. M., et al.（2021）. Understanding the Effects of Naturalistic Developmental Behavioral Interventions: A Project AIM Meta-analysis. Autism Research. PMC8862714. |
| 引用 2 | 网络 Meta-analysis（2025）：41篇 RCT，2781名参与者，6种 NDBI 方法比较。ESDM 被认为是最有效的综合 NDBI。|
| 关键发现 | NDBI 对社会沟通、语言、游戏技能有显著效果，近端结果效应大于远端结果。|

---

## Outcome Hierarchy（NDBI 双 Primary 首次出现）

```
INT-000007（NDBI）
        ├── IREL-000016（Primary）
        │         ↓ VAR-000052 沟通能力↑
        │         ↓ Natural REL → VAR-000023 社区参与↑（Intermediate）
        │
        └── IREL-000017（Primary，Annotation：Evidence Strength）
                  ↓ VAR-000013 儿童心理健康↑
                  ↓ Natural REL → VAR-000023 社区参与↑（Intermediate）
                  ↓ Natural REL → VAR-000022 生活质量↑（Distal）
```

**首次出现：** 两条独立 Primary IREL 指向不同 Primary Outcome VAR（Communication + Mental Health），均通过 Outcome Boundary Verification，不合并为单一 IREL。

---

## Metadata Expansion：age_scope

**新增 Metadata 字段（OBS-015 Metadata Expansion，不是 Ontology Expansion）：**

```yaml
age_scope: early childhood（主），school age（PRT）
```

Concept 不变（NDBI），只是研究对象年龄范围不同 → 使用 Metadata 字段，不新建 VAR。这与 `population=parents`（REL-000102）的处理方式一致。

---

## Sprint 7 KPI 更新

| 指标 | Phase F 后 | Phase G 后 |
|------|----------|----------|
| INT | 6 | **7**（+1）|
| IREL | 15 | **17**（+2）|
| IEA | 10 | **11**（+1）|
| Intervention Types 验证 | 4种 | **5种（+ Program Cluster）**|

---

*Sprint 7 Phase G — NDBI 完成*
*2026-07-07*
*下一步：INT-000008 Transition Planning（Life Stage Intervention Assessment）*
