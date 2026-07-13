# Knowledge Evolution Roadmap v1.0

**Anori Knowledge Operating System**
Created: 2026-07-07
Purpose: 定义 Knowledge Graph 未来 1–2 年的演化方向、里程碑和触发条件。

---

## Current Baseline（2026-07-07）

| 指标 | 当前值 |
|------|--------|
| Active RELs | 99 |
| High Evidence RELs | 32（32%） |
| Low Evidence RELs | 6（6%） |
| Very Low Evidence RELs | 61（62%） |
| Active VARs | 47 |
| Knowledge Domains | 3（KD-FAM / KD-PAR / KD-TRA） |
| KD-TRA KAs | 0（骨架存在，未激活） |
| Evidence Cards | 9 |
| High RELs with EA | 9 / 32（28%） |
| High RELs without EA | 23 / 32（72%） |

---

## Question 1 — Knowledge Graph 未来如何增长？

### Phase 1（现在 → EA 达到 50 张）
**主题：Evidence Coverage**

目标：让每条 High REL 至少有 1 张 EA。

```
当前：9 / 32 High RELs 有 EA
目标：32 / 32 High RELs 有 EA
需要：约 23 张新 EA
```

优先顺序：
1. KD-FAM 主链 High REL（直接支撑 Core Pathway）
2. KD-PAR 主链 High REL（Community Participation 枢纽）
3. Bridge REL（REL-000078，跨域连接）

**里程碑：** Every High REL has at least 1 Evidence Card

---

### Phase 2（EA 50 → EA 100）
**主题：Evidence Density**

目标：关键 REL 从"有证据"升级为"有充分证据"。

```
Bridge REL（REL-000078）：找到 SR 或 Longitudinal → Very Low → High
CP-FAM-001 主链低质量 REL：Rank 2-5 EUQ 升级
STR 变量群（VAR-000045-048）：骨架 REL 升级
```

**里程碑：** Core Pathway evidence fully supported at High level

---

### Phase 3（EA 100+）
**主题：Knowledge Domain Expansion**

目标：KD-TRA 正式激活，Knowledge Network 扩展到三个 Domain。

```
前提：找到 KD-TRA 与 KD-FAM/PAR 的 Bridge REL（Rule 10）
触发：Bridge REL 升至 High
动作：KD-TRA KA 建设，Concept Pages 生成
```

**里程碑：** KD-TRA activated — Knowledge Network spans 3 domains

---

## Question 2 — Evidence Repository 目标

### EA 数量目标

| 阶段 | EA 目标 | 重点 |
|------|---------|------|
| Phase 1 | 50 | Coverage：每条 High REL 至少 1 张 |
| Phase 2 | 100 | Density：关键 REL 2–3 张，EUQ 升级 |
| Phase 3 | 200 | Expansion：KD-TRA 证据基础 |

### 每个 KD 的 EA 目标

| KD | 当前 EA | Phase 1 目标 | Phase 2 目标 |
|----|---------|------------|------------|
| KD-FAM | 3 | 15 | 30 |
| KD-PAR | 6 | 25 | 50 |
| KD-TRA | 0 | 5（Bridge） | 20 |

### Bridge REL 最低证据要求（Rule 10）

```
REL-000078（FQoL → Community Participation）：
当前：Low
最低要求：High（SR 或 Longitudinal）
状态：Evidence Gap 已确认为真实研究空白
策略：等待领域内新 SR 发表，或扩展到 family functioning 映射

任何新 KD 的 Bridge REL：
最低要求：High（否则 KD 不开启）
```

### High REL 最低 EA 标准

| REL 类型 | 最低 EA 数 | 目标 EA 数 |
|---------|-----------|-----------|
| Bridge REL | 2（Tier 1 优先） | 3 |
| Core Pathway REL | 1 | 2 |
| 其他 High REL | 1 | 1 |

---

## Question 3 — Network Review 节点

### Network Review 触发条件

以下任一条件满足时，启动 Network Review：

| 条件 | 当前进度 | 触发值 |
|------|---------|--------|
| Candidate RELs | 2 | **5** |
| KIR Open Issues | 3 | **5** |
| EA 达到里程碑（50 / 100 / 200） | 9 | **50** |
| Duplicate Candidates | 1 | **3** |

**预计下次 Network Review：** EA 达到 50 张时，或 Candidate RELs 达到 5 条

### Network Review 内容

每次 Network Review 执行以下四项：

1. **Duplicate Merge**：处理所有 `duplicate_candidate` REL
2. **Candidate REL Review**：决定哪些 Candidate REL 正式加入图谱
3. **REL Refactoring**：修复 KIR Open Issues（Source–Citation Mismatch 等）
4. **Network Health Report**：更新 Network Report，计算新的 Health Score

---

## Evolution Principles（演化原则）

这些原则约束整个 Roadmap 的执行：

**① Evidence drives structure, not vice versa.**
新 REL 只有在有 Evidence 支持时才加入图谱，不为了"看起来完整"而建骨架。

**② Bridge REL before Domain expansion.**
新 KD 只有在 Bridge REL 达到 High 后才开启（Rule 10）。

**③ Coverage before Density.**
Phase 1 优先让每条 High REL 有证据，Phase 2 再提高关键 REL 的证据密度。

**④ KIR before Production.**
每次 KGO 开始前，Definition Verification 和 KIR Check 优先于 EA 生产。

**⑤ Repository-first always.**
外部检索只在内部 Repository 无答案时启动。

---

## Long-term Vision

```
2026（现在）
│
├── Era 3 Complete
│   Architecture + Governance + Evidence Production
│
▼

2026–2027（Phase 1）
│
├── Coverage Complete
│   Every High REL has EA
│   EA Count → 50
│
▼

2027（Phase 2）
│
├── Density Complete
│   Core Pathway fully supported
│   EUQ Main Chain upgraded
│   EA Count → 100
│
▼

2027–2028（Phase 3）
│
├── Expansion
│   KD-TRA activated
│   Knowledge Network: 3 Domains
│   EA Count → 200
│
▼

Era 4（Knowledge Evolution Operational）
│
└── Self-sustaining knowledge growth
    driven by new literature and
    structured by governance
```

---

## Roadmap Review Trigger

本 Roadmap 在以下情况更新：

- Phase 1 完成（EA 达到 50）
- KD-TRA 开启
- 重大新 SR/Meta-analysis 改变某条 Bridge REL 的证据缺口状态
- Era 4 正式开始

---

*Knowledge Evolution Roadmap v1.0 — Created 2026-07-07*
*Next review: EA 达到 50 张，或 KD-TRA Bridge REL 升至 High*
