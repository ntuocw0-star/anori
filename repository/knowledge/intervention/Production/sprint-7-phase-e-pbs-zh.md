# Sprint 7 Phase E — 积极行为支持生产记录

**Anori Knowledge Operating System**
日期：2026-07-07
状态：完成

---

## Pathway Verification 结论

**PBS 的 Outcome Hierarchy（来自 BPS Review + RCT 设计）：**

```
INT-000005（积极行为支持）
        ↓ IREL-000014（Primary IREL）
VAR-000051 挑战行为↓（Challenge Behavior）
        ↓ Natural REL
VAR-000013 儿童心理健康↑（Intermediate）
VAR-000015 家庭功能↑（Intermediate）
        ↓ Natural REL
VAR-000023 社区参与↑（Distal）
VAR-000022 生活质量↑（Distal）
```

**BPS Review（英国心理学学会）明确：**
> PBS 以实现有意义和可测量的生活质量结果为目标。挑战行为的减少是**次要结果**（secondary outcome）。

**注意：** 这意味着 PBS 在文献中将 Challenge Behavior 减少列为主要可测量结果，但真正的目标是 QoL 提升。本框架尊重两者：IREL 建立在直接测量的结果上（Challenge Behavior），路径则延伸至 QoL。

---

## VAR-000051（新建）：挑战行为

| 字段 | 内容 |
|------|------|
| ID | VAR-000051 |
| 正式名称 | Challenge Behavior（挑战行为）|
| 中文名 | 挑战行为 |
| 别名 | Challenging Behaviour、Behaviour that Challenges、Problem Behavior |
| 类型 | Risk |
| 定义 | 个体在特定情境下表现出的严重影响自身或他人安全、参与和生活质量的行为，包括自伤、攻击、破坏财物和严重的刻板行为。通常被理解为功能性沟通或需求表达的替代方式。|
| 测量工具 | Aberrant Behavior Checklist（ABC）; Challenging Behavior Interview |
| 与 VAR-000013 的区别 | 挑战行为是行为结果变量，是 PBS 和功能行为评估的主要靶目标；儿童心理健康是更宽泛的心理健康状态概念。两者是不同层级的构念。|
| 新建原因 | Ontology Expansion（OBS-015 原则）：挑战行为在 Intervention Science 中有独立的构念地位，不能归入已有 VAR。|

---

## INT-000005：积极行为支持

| 字段 | 内容 |
|------|------|
| ID | INT-000005 |
| 正式名称 | Positive Behavior Support（积极行为支持）|
| 别名 | PBS、PBIS（Positive Behavioral Interventions and Supports）、School-wide PBS（SW-PBS）、Individual PBS、积极行为干预与支持 |
| 定义 | 结合应用行为分析与其他循证实践，通过功能行为评估、环境修改和积极行为规划，减少挑战行为并提升个体独立性、参与度和生活质量的综合支持框架。包含三层支持体系（Tier 1 普遍支持 / Tier 2 小组支持 / Tier 3 个别化支持）。|
| 目标人群 | 发展障碍、智力障碍、ASD 等有挑战行为的儿童和成人 |
| 传递方式 | 学校系统（SW-PBIS）/ 社区与家庭（Individual PBS）|
| 领域 | 教育 / 社区 / 临床 |
| 强度 | 依层级不同：Tier 1 全校普遍实施；Tier 3 个别化高强度支持 |
| 核心机制 | 功能行为评估（FBA）→ 环境修改 + 替代行为教学 → 挑战行为减少 → 参与与生活质量提升 |
| 粒度说明 | INT-000005 是上位概念，SW-PBIS 和 Individual PBS 是不同实施规模，共享核心机制（功能评估 + 正向支持）。|

---

## IREL-000014：PBS → 挑战行为↓

| 字段 | 内容 |
|------|------|
| ID | IREL-000014 |
| 来源 | INT-000005 |
| 关系动词 | affects |
| 目标 VAR | VAR-000051 挑战行为（Challenge Behavior）|
| 效应极性 | Risk_Reduction（风险降低）|
| 效应大小 | Large |
| 证据 Tier | **Tier 2**（SR of controlled studies + cluster RCT）|
| 证据等级 | **High** |
| **Outcome Type** | **Primary** |
| 充实度报告 | 是 |
| 充实度水平 | 高（TFI 等标准化忠实度工具）|
| 主要证据 | Beqiraj et al. 2022（SR，30 项研究，28/30 显示挑战行为显著减少）；Hassiotis et al. RCT（英国多中心 RCT，主要结果 = 挑战行为减少）|
| 路径说明 | PBS → 挑战行为↓（Primary）→ 儿童心理健康↑（Natural REL，Intermediate）→ 社区参与↑ / 生活质量↑（Natural REL，Distal）|

---

## IEA-000009：IREL-000014 的证据

| 字段 | 内容 |
|------|------|
| ID | IEA-000009 |
| 支持 IREL | IREL-000014 |
| 支持 INT | INT-000005 |
| 证据 Tier | 2 |
| 证据等级 | High |
| 引用 1 | Beqiraj, L., et al.（2022）. Positive behavioural support for children and young people with developmental disabilities in special education settings: A systematic review. Journal of Intellectual Disability Research. PMC9306923. |
| 引用 2 | Hassiotis, A., et al. PBS RCT（多中心集群 RCT，23 个社区智力障碍服务机构，N=246）。主要结果：12 个月后挑战行为减少。|
| 关键发现 | 30 项研究中 28 项显示挑战行为显著减少；個别化高强度 PBS 对 ASD 合并智力障碍人群证据混杂（需谨慎外推）。|
| Fidelity | High（Tiered Fidelity Inventory，TFI）|

---

## Outcome Hierarchy 首次验证完成

```
INT-000005（积极行为支持）
        ↓ IREL-000014（Primary，直接建立）
VAR-000051 挑战行为↓

        ↓ Natural REL（间接，Intermediate）
VAR-000013 儿童心理健康↑
VAR-000015 家庭功能↑

        ↓ Natural REL（间接，Distal）
VAR-000023 社区参与↑
VAR-000022 生活质量↑
```

**第一次证明：** 一个 Intervention 可以通过单条 Primary IREL 触达多个远端 Outcome，这些远端 Outcome 不需要独立 IREL，而由 Natural REL 体系承担。

---

## Sprint 7 KPI 最终更新

| 指标 | 起始 | Phase E 后 |
|------|------|----------|
| INT | 1 | **5**（+4）|
| IREL | 1 | **14**（+13）|
| IEA | 1 | **9**（+8）|
| VAR（新增）| 50 | **51**（+1，VAR-000051）|
| Intervention Domains | 1 | **4（教育/家庭支持/社区/行为支持）**|
| Outcome Hierarchy | 无 | **✅ 正式建立**|

---

## Sprint 7 生产模式总览

| Pattern | 案例 | 状态 |
|---------|------|------|
| One INT → One Outcome | Carter 2016（INT-000001）| ✅ |
| One INT → Multiple Outcomes | Parent Training（INT-000002）| ✅ |
| One Evidence → Multiple INT | Dunst 2007 → INT-000002/003 | ✅（OBS-017）|
| Many INT → One Outcome | INT-000002/003 → Family Functioning | ✅ |
| Participation Domain 集中连接 | INT-000004 | ✅ |
| Primary → Distal Outcome 层级 | PBS（INT-000005）| ✅（OBS-019）|

---

*Sprint 7 Phase E — 积极行为支持 完成*
*2026-07-07*
*Sprint 7 Intervention Repository 第一阶段完成*
