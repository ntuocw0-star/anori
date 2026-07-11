# Governance Notes

**Anori Knowledge Operating System**
Created: 2026-07-07
Purpose: 记录尚未经过充分验证、不适合立即写入 Workflow 的方法学观察。
Promotion Condition: 每条观察需至少 2 个独立案例验证后，才考虑写入正式治理文件。

---

## Core Principle

> **Not every discovery becomes a rule.**
>
> 不是每一个新发现都应该立刻进入 Workflow；只有经过重复验证的方法，才进入治理规范。

---

## Active Observations

---

### OBS-001 — Construct Scope Gap

**Date:** 2026-07-07
**Source Case:** KGO-002（Dunst 2022 vs REL-000036）
**Status:** Observation only（1 case）

**描述：**
文献的 Predictor 与 KOS VAR 在方向、效应、研究设计上均一致，但构念范围不等同——文献测量的是更宽泛的上位构念，KOS VAR 是其子维度。

**典型结构：**
```
Literature Construct（宽）
    ├── KOS VAR（窄）← 子集
    └── Other dimensions
```

**案例记录：**
- Dunst 2022：Family Needs（多维）≠ Unmet Service Need（单维子集）
- REL-000036 因此不挂接，维持 Very Low

**Promotion Condition:**
需至少 1 个额外独立案例出现相同模式，再考虑写入 Evidence Gap Typology v1.0。

---

### OBS-002 — Repository-first Strategy

**Date:** 2026-07-07
**Source Cases:** KGO-000a（REL-000026 升级）、KGO-002（REL Mapping）
**Status:** 2 cases，正在积累

**描述：**
当内部证据库已足够成熟时，Evidence Appraisal 应优先于外部文献检索。

**执行逻辑：**
```
Repository → REL Mapping → Construct Check → Evidence Appraisal
                                    ↓
                        External Search（仅在 Repository 无答案时）
```

**Promotion Condition:**
再积累 1–2 个成功案例（Repository-first 直接产出 EA），考虑写入 Workflow v1.2。

---

### OBS-003 — Evidence-first Principle

**Date:** 2026-07-07
**Source Case:** KGO-000a（从 REL-000074 切换至 REL-000026）
**Status:** Observation only（1 case）

**描述：**
当 Repository 中出现 Tier 1 Evidence 时，允许优先执行对应 REL 的升级，不严格按照 EUQ 排名顺序。

**Promotion Condition:**
需至少 1 个额外独立案例验证，再考虑写入 Workflow v1.2。

---

## KGO Dashboard

*每次 KGO 结束后更新*

| 指标 | 当前值 |
|------|--------|
| Evidence Cards | 2 |
| Successful Upgrades（Type A） | 1 |
| Reinforcement Cases（Type B） | 1 |
| Repository-first Rate | 50%（3/6 operations） |
| Candidate RELs | 1 |
| Candidate Mappings | 1 |
| Confirmed Gap Types | 3（Direction / Outcome / Mechanism） |
| Observed Gap Types（未验证） | 1（Construct Scope） |
| Active Observations | 3（OBS-001/002/003） |

*Last updated: 2026-07-07 after KGO-002*

---

## Promoted Observations（已升级为正式规范）

| OBS | 升级至 | 升级日期 |
|-----|--------|----------|
| — | — | — |

---

*Governance Notes v1.0 — Created 2026-07-07*
*Next review: 任意 OBS 积累到 2 个独立案例时*
