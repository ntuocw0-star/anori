# Sprint 7 Phase B — 亲职训练生产记录

**Anori Knowledge Operating System**
日期：2026-07-07
状态：完成

---

## INT-000002：亲职训练（Parent Training）

**基本信息：**

| 字段 | 内容 |
|------|------|
| ID | INT-000002 |
| 正式名称 | Parent Training（亲职训练）|
| 别名 | Parent Management Training（PMT）、Triple P、Stepping Stones Triple P（障碍适配版）、Incredible Years、Parent-Child Interaction Therapy（PCIT）、Parent Management Training Oregon Model（PMTO）、Signposts for Building Better Behavior、Parent-mediated Intervention（PMI） |
| 定义 | 通过结构化训练帮助父母/照顾者掌握支持子女行为、发展和家庭功能所需技能的干预措施。核心组成包括：正强化、行为管理策略、亲子互动质量提升。包含针对障碍/发展差异儿童家庭的专门适配版本。 |
| 目标人群 | ASD、智力障碍、发展障碍儿童的父母/主要照顾者 |
| 传递方式 | 小组 / 个别 / 远程（Telehealth） |
| 领域 | 家庭支持 / 临床 |
| 强度 | 典型为 8-20 次会话，持续 8-20 周，每周一次 |
| 实施情境 | 临床机构、社区中心、学校、远程平台 |
| 粒度说明 | INT-000002 是上位概念（亲职训练总类），Triple P、Incredible Years 等具体项目作为别名处理，这些项目共享共同机制（父母指导、正强化、行为限制设定）。|

---

## 四条 IREL

### IREL-000002：亲职训练 → 父母压力

| 字段 | 内容 |
|------|------|
| ID | IREL-000002 |
| 来源 | INT-000002 |
| 关系动词 | affects |
| 目标 VAR | VAR-000002 父母压力（Parent Stress）|
| 效应极性 | 负向（Negative）—— 压力降低 |
| 效应大小 | 中到大（Medium-to-Large）|
| 证据 Tier | **Tier 1**（RCT Meta-analysis）|
| 证据等级 | **High** |
| 充实度报告 | 是 |
| 充实度水平 | 中等（因项目而异）|
| 主要证据 | 系统综述+Meta分析：亲职中心干预在降低父母压力、困扰、抑郁症状方面显著优于对照组（中到大效应）。 |
| 人群 | ASD/发展障碍儿童的父母 |

---

### IREL-000003：亲职训练 → 亲职质量

| 字段 | 内容 |
|------|------|
| ID | IREL-000003 |
| 来源 | INT-000002 |
| 关系动词 | affects |
| 目标 VAR | VAR-000003 亲职质量（Parenting Quality）|
| 效应极性 | 正向（Positive）|
| 效应大小 | 中等（Medium）|
| 证据 Tier | **Tier 1** |
| 证据等级 | **High** |
| 充实度报告 | 是 |
| 主要证据 | SR+Meta（30个RCT，N=1,934）：亲职训练改善父母知识和处理子女行为的自信心。适应性功能有临床相关效应。 |
| 人群 | ASD/发展障碍儿童的父母 |

---

### IREL-000004：亲职训练 → 家庭功能

| 字段 | 内容 |
|------|------|
| ID | IREL-000004 |
| 来源 | INT-000002 |
| 关系动词 | affects |
| 目标 VAR | VAR-000015 家庭功能（Family Functioning）|
| 效应极性 | 正向（Positive）|
| 效应大小 | 小到中（Small-to-Medium）|
| 证据 Tier | **Tier 2**（RCT 系统综述）|
| 证据等级 | **Moderate** |
| 充实度报告 | 是 |
| 主要证据 | 问题解决技能亲职训练系统综述（RCT）：改善家庭凝聚力、家庭功能、减少家庭冲突。障碍适配版（Incredible Years、Stepping Stones Triple P）产生约0.5个标准差的行为改善效果。 |
| 人群 | ASD/发展障碍/慢性健康状况儿童的父母 |

---

### IREL-000005：亲职训练 → 生活质量（父母层面）

| 字段 | 内容 |
|------|------|
| ID | IREL-000005 |
| 来源 | INT-000002 |
| 关系动词 | affects |
| 目标 VAR | VAR-000022 生活质量（Quality of Life）|
| **人群字段** | **population = parents**（沿用 Sprint 5 模式）|
| 效应极性 | 正向（Positive）|
| 效应大小 | 中等（Medium）|
| 证据 Tier | **Tier 1** |
| 证据等级 | **High** |
| 充实度报告 | 是 |
| 主要证据 | SR+Meta（2025）：对比喘息照顾与亲职训练对ASD儿童照顾者QoL的影响，亲职训练在改善父母个人QoL方面有公认效果。 |
| 说明 | 沿用 population=parents 字段（与 REL-000102 一致），不新建"父母QoL"VAR。与家庭生活质量（VAR-000004）明确区分。|

---

## 暂缓 IREL：家庭生活质量（Boundary Pending）

| 字段 | 内容 |
|------|------|
| 暂定 ID | IREL-PENDING-001 |
| 来源 | INT-000002 |
| 目标 VAR | VAR-000004 家庭生活质量（Family QoL）|
| **状态** | **⏸ Pending Boundary** |
| 原因 | 以 Beach Center FQoL Scale 为主要结果的 RCT 未显示显著组间差异（p=.22）；以亲职干预提升 FQoL 为焦点的 Meta-analysis 证据不足。|
| 解除条件 | 出现以 Beach Center FQoL 为主要结果的 RCT 或 Meta-analysis 时，立即解除并建立 IREL。|

**建模原则（OBS-016）：**
> Pattern 3 的完整性不能凌驾于 Concept 边界准确性之上。每条 IREL 必须独立通过 Outcome Boundary Verification。

---

## 四张 IEA

| IEA ID | 支持 IREL | 证据 Tier | 等级 | 主要研究 |
|--------|---------|---------|------|---------|
| IEA-000002 | IREL-000002 | 1 | High | Zhu et al. 2024 SR+Meta（父母压力）|
| IEA-000003 | IREL-000003 | 1 | High | Postorino et al. 2017 SR+Meta（亲职知识/自信）|
| IEA-000004 | IREL-000004 | 2 | Moderate | Zhang et al. 2024 SR of RCTs（家庭功能）|
| IEA-000005 | IREL-000005 | 1 | High | Kim et al. 2025 SR+Meta（照顾者QoL）|

---

## Knowledge Graph 连接结构（Pattern 3 首次验证）

```
INT-000002（亲职训练）
        ├── IREL-000002 → VAR-000002（父母压力）
        │                     ↓ REL → VAR-000009（照顾者负担）
        │                     ↓ REL → VAR-000004（家庭QoL）
        │
        ├── IREL-000003 → VAR-000003（亲职质量）
        │                     ↓ REL → VAR-000015（家庭功能）
        │
        ├── IREL-000004 → VAR-000015（家庭功能）
        │                     ↓ REL → VAR-000004（家庭QoL）
        │
        └── IREL-000005 → VAR-000022（生活质量，population=parents）
                               ↓ REL → （通过 Natural REL 延伸）

IREL-PENDING-001：VAR-000004（家庭QoL）—— Boundary 待解除
```

亲职训练通过 Natural REL 体系间接触达家庭QoL，无需直接建立 FQoL IREL。这正是双层 Knowledge Graph 的核心优势。

---

## Phase B 产出汇总

| 指标 | Sprint 7 起始 | Phase B 后 |
|------|-------------|----------|
| INT | 1 | **2**（+1）|
| IREL | 1 | **5**（+4）|
| IEA | 1 | **5**（+4）|
| Intervention Domains | 1（教育）| **2（教育 + 家庭支持）**|

---

*Sprint 7 Phase B — 亲职训练 完成*
*2026-07-07*
*下一步：Phase C — 继续 Repository 扩展（家庭中心实践 或 社交技能训练）*
