# Evidence Upgrade Workflow v1.0

**Anori Knowledge Operating System**
Created: 2026-07-07
Status: Frozen
Case 0: REL-000078 (FQoL → Child Community Participation)

---

## 1. Purpose

本 Workflow 定义 Anori KOS 中所有 Evidence Upgrade 任务（EUQ）的标准执行流程。

它不是一份检索指南，而是一份**知识质量管理规范**。

每一条进入 Evidence Upgrade Queue 的 REL，都应按照本 Workflow 执行，并留下完整的 Decision Log 和 Failure Knowledge 记录。

---

## 2. Upgrade Philosophy

> Evidence Upgrade 的目标不是提高等级，而是提高知识可信度。

以下三条原则构成本 Workflow 的价值基础：

**原则一：Evidence Level 是结果，不是目标。**
Evidence Level 反映当前能够支持该 REL 的证据实际状态。它应该由检索和评估决定，而不是由预设目标决定。

**原则二：证据不足时，记录缺口，而不是降低标准。**
如果现有证据不足以支持升级，正确的做法是明确记录证据缺口，而不是扩大概念边界或接受低质量证据凑数。

**原则三：允许升级失败是系统可信度的一部分。**
一个不允许"维持原级"的升级系统，会逐渐失去知识的准确性。保持 Low 而原因充分，比升到 Medium 而证据不足更有价值。

> **Evidence Upgrade 的成功，不是把 Low 变成 High；而是让每一个 Evidence Level 都准确反映目前能够支持它的证据。**

---

## 3. Workflow

### Step 1 — Review Current REL

读取目标 REL 的完整当前状态。需要确认以下五项：

| 项目 | 内容 |
|------|------|
| 完整定义 | VAR-A `[relation]` VAR-B，Effect |
| 当前 Evidence Level | Low / Medium / High |
| 当前引用证据 | 文献或间接推断链 |
| 进入 EUQ 的原因 | evd_todo 备注 |
| Upgrade Target | 目标等级及所需证据类型 |

**核心问题：现在为什么是这个等级？**

---

### Step 2 — Define Upgrade Target

在检索之前，明确定义：

1. **证据缺口**：当前缺少什么类型的证据？
2. **目标证据规格**：
   - 自变量（Independent Variable）
   - 因变量（Dependent Variable）
   - 方向（Predictive direction）
   - 人群（Population）
   - 最低可接受研究设计
3. **分级标准（Tier）**：

| Tier | 证据类型 | 升级效果 |
|------|----------|----------|
| Tier 1 | SR / Meta-analysis | 直接 → High |
| Tier 2 | Longitudinal / Cohort | 直接 → High |
| Tier 3 | Cross-sectional + Regression / SEM / Path Analysis | 视质量 → Medium 或 High |
| Tier 3− | Cross-sectional correlation only | 支持性证据，不足以单独升级 |

---

### Step 3 — Direct Search

**只搜索目标构念，不扩展。**

每次只跑一条 Search Line，评估后再决定是否进入下一条。

**Stopping Rule：**
- 找到 1–3 篇 Tier 1 或 Tier 2 证据 → 立即停止，进入 Step 5
- 找到 3 篇以上一致的 Tier 3 证据 → 考虑停止，进入 Step 5
- 未命中或全为 Tier 3− → 不扩大关键词，进入 Step 4

**Three-Stage Stopping Rule（v1.1 新增）：**

连续完成以下三个阶段后，如均未满足升级条件，允许正式停止：

1. Direct SR / Meta-analysis search
2. Direct empirical search（regression / SEM / path model）
3. Concept Mapping Check

三阶段均未命中 → 停止扩展，不再引入更远的相邻构念。
证据缺口本身是有效的正式输出，记入 Decision Log 和 Failure Knowledge。

> 验证案例：REL-000076（Case 1，2026-07-07）

**Search Line 格式（PubMed）：**

```
("[Primary Construct]"[Title/Abstract])
AND
("[Outcome Construct]"[Title/Abstract])
AND
(child* OR adolescen*[Title/Abstract])
AND
(predict* OR longitudinal OR regression OR "structural equation")[Title/Abstract]
```

**重要：不使用普通搜索引擎。使用 PubMed / Scopus / Web of Science。**

---

### Step 4 — Concept Mapping Check

**触发条件：Direct Search 未找到足够的直接证据。**

**目的：** 在宣布"无直接证据"之前，确认文献是否使用了不同的构念命名表达同一关系。

**执行步骤：**

1. 列出候选构念（与目标构念在理论框架中有重叠的相邻构念）
2. 按映射可信度分级：

| 映射强度 | 条件 |
|----------|------|
| 强 | 目标构念的上位或包含概念，理论框架明确 |
| 中 | 部分重叠，但边界需要说明 |
| 弱 | 仅相关，不能直接映射 |

3. 只对"强"映射构念执行检索
4. 对命中文献逐条评估

**Concept Mapping Check Rule（三条同时满足，Mapped Evidence 才成立）：**

> **Rule 1：理论框架存在明确的包含或规范映射关系**（不能只是概念相关）
>
> **Rule 2：Outcome 与目标 REL 保持一致**（不能用相邻 Outcome 替代，例如 physical activity ≠ community participation）
>
> **Rule 3：方向一致**（预测方向必须与目标 REL 一致）

**不满足三条规则的文献：**
- 移入 Literature Notes
- 不计入 Evidence Score
- 不进入 Evidence Card

**Evidence Card 标注要求：**
满足三条规则的 Mapped Evidence 进入 Evidence Card 时，必须显式标注：
> `Evidence Type: Mapped Evidence — via [构念名称]`

---

### Step 5 — Evidence Appraisal

对所有 Candidate 逐条评估：

| 评估项目 | 判断标准 |
|----------|----------|
| 研究设计 | Tier 1 / 2 / 3 / 3− |
| 证据类型 | Direct / Mapped |
| 方向 | 与 REL 一致 / 反向 / 双向 |
| 样本 | 人群、年龄、诊断 |
| 统计方法 | 相关 / 回归 / SEM / Meta |
| 局限性 | 影响可信度的主要问题 |

**Evidence Card 草稿在此步骤完成。**

---

### Step 6 — Decision

根据 Step 5 的评估结果，做出以下判断之一：

**Upgrade（升级）**
- 找到足够的直接或映射证据
- 明确新的 Evidence Level
- 记录升级依据

**Maintain（维持）**
- 现有证据不足以支持升级
- 明确记录证据缺口
- 更新 EUQ 备注（缺少什么、需要什么类型的文献）

**Partial Upgrade（部分升级）**
- 证据支持升至中间等级（如 Low → Medium）
- 记录仍然存在的缺口

---

### Step 7 — Snapshot Update

升级或维持决定冻结后，更新以下文件：

- [ ] `rels.json` — 更新 evidence_grade、evidence_timeline
- [ ] `evidence-upgrade-queue-v1.json` — 更新状态或移除
- [ ] `system-snapshot-[date].json` — 更新 key_metrics
- [ ] Evidence Card 文件 — 新增或修改

---

### Step 8 — Decision Log

每次执行留下完整决策链，格式如下：

```
Decision 1: [触发条件或初步判断]
↓
Decision 2: [检索策略调整]
↓
Decision N: [最终决定]
Final: [Upgrade / Maintain / Partial Upgrade]
```

目的：建立审计轨迹，以后任何人都能理解"为什么这样判断"。

---

### Step 9 — Failure Knowledge

**适用条件：升级未成功，或执行过程中发现方法论问题。**

固定问题：

> **What did we learn even though the upgrade failed?**

记录以下内容：
- 发现了哪些此前未知的证据缺口
- 检索过程中发现了哪些方法论问题
- 哪些判断规则得到了验证或新增
- 这次经验如何影响后续 EUQ 的执行

---

## Appendix A — Case 0: REL-000078

### REL 定义

```
REL-000078
VAR-000004 Family Quality of Life
  enables
VAR-000023 Child Community Participation
Effect: Protective
```

### 执行记录

**Step 1 — Current State**

| 项目 | 内容 |
|------|------|
| Evidence Level | Low（evidence_score: 35） |
| 当前证据 | 间接推断链（REL-000013 + REL-000076 + REL-000027） |
| EUQ 原因 | 无直接文献，全为机制推断 |
| Upgrade Target | SR 或 Longitudinal，直接预测方向 |

**Step 2 — Upgrade Target**

- 自变量：Family Quality of Life（整体构念）
- 因变量：Child Community Participation
- 方向：FQoL → Participation（不是反向）
- 人群：有障碍儿童的家庭
- 最低可接受：Tier 3（regression / SEM）

**Step 3 — Direct Search（Line A）**

检索式：`"Family Quality of Life" AND "community participation" AND child*`
数据库：PubMed / Scopus

命中：1篇相关文献（Milićević et al., 2017）
Stopping Rule：未触发

**Step 4 — Concept Mapping Check**

候选构念：Family Functioning（强映射）/ Family Environment（中）/ Family Support（中）/ Family-centered Services（弱）

执行检索：Family Functioning + community/social participation + child*

命中：3篇文献
- 2025 mixed-methods（TBI + participation）→ 关系理解，非预测模型
- 2025 longitudinal CP（预测变量为儿童行为，非家庭变量）→ 不符合方向
- 2025 SR（family functioning + physical activity）→ Outcome 为 physical activity，不等同于 community participation → **Reject**（违反 Rule 2）

Concept Mapping Check 结论：Family Functioning 映射理论成立，但现有文献证据不满足三条规则，不计入升级依据。

**Step 5 — Evidence Appraisal**

| 文献 | 设计 | 类型 | 方向 | Tier | 决定 |
|------|------|------|------|------|------|
| Milićević et al., 2017 | Cross-sectional comparative | Direct | 双向相关 | Tier 3− | 进入 Evidence Card，标注为 context only |
| TBI + participation 2025 | Mixed-methods | Mapped | 部分 | — | Pending Verification |
| SR: Family functioning + physical activity 2025 | SR | Mapped | — | — | Reject → Literature Notes |

**Step 6 — Decision**

> **Maintain: REL-000078 保持 Low**

原因：唯一 Direct Evidence 为相关研究（Tier 3−），不足以支持升级。Mapped Evidence 不满足 Concept Mapping Check Rule 2（Outcome 不一致）。

**Step 7 — Snapshot Update**

- REL-000078 evidence_grade：维持 Low
- EUQ 备注更新：需要 SR 或 Longitudinal，直接测量 FQoL → Child Community Participation，该缺口已在文献检索中确认为真实存在
- Evidence Card 新增：Milićević et al., 2017（Tier 3−，context only）

**Step 8 — Decision Log**

```
Decision 1: Line A 检索，找到 1 篇相关文献（Milićević et al., 2017）
            Stopping Rule 未触发
↓
Decision 2: 进入 Concept Mapping Check
            候选构念：Family Functioning（强映射）
↓
Decision 3: Family Functioning 检索，3 篇命中
            逐一评估：方向不符 / Outcome 不一致 / 非预测模型
↓
Decision 4: SR（physical activity）被拒绝
            理由：physical activity ≠ community participation（Rule 2 违反）
↓
Decision 5: 无证据满足升级条件
Final: Maintain — REL-000078 保持 Low
```

**Step 9 — Failure Knowledge**

> **What did we learn even though the upgrade failed?**

1. **证据缺口被精确定位，而非假设。** FQoL → Child Community Participation 的直接预测研究目前在文献中确认为极度稀缺，甚至可能不存在。这是真实的研究空白，不是检索失败。

2. **构念命名差异需要显式处理。** 科学文献使用的构念（family functioning、family environment）与知识图谱中的规范构念（Family Quality of Life）不一致。Concept Mapping Check 是必要步骤，不是可选步骤。

3. **Outcome 相似性不能替代 Outcome 等同性。** Physical activity 和 community participation 在理论上相邻，但不等同。允许这种替代会逐渐模糊知识边界。

4. **升级失败也可以改进方法论。** 本次执行新增了 Concept Mapping Check Rule，这是 Workflow v1.0 中最有价值的方法论贡献之一。

5. **间接推断链（REL-000013 + REL-000076 + REL-000027）逻辑成立，但不等于直接证据。** 机制推断（mechanistic inference）和直接实证（direct empirical evidence）之间的区别，是 Evidence Level 判断的核心依据。

---

*Evidence Upgrade Workflow v1.1 — Updated 2026-07-07*
*Change: Three-Stage Stopping Rule 正式加入 Step 3（validated by Case 1: REL-000076）*
*Next review trigger: 任意覆盖 FQoL → Child Participation 的新 SR 或 Longitudinal 研究，或出现第三种 Evidence Gap Type*
