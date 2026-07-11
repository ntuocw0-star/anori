# Evidence Production Queue (EPQ) v1.0

**Anori Knowledge Operating System**
Created: 2026-07-07
Purpose: 按投入产出比（ROI）排序的 Evidence Production 调度队列。

以后每次 KGO 开始时，先查 EPQ，选择 ROI 最高的候选文献，而不是按文献编号顺序处理。

---

## ROI Scoring Method

```
ROI Score
= 潜在新 EA 数量 × 2
+ 研究设计加权（Meta-analysis +3 / SR 或 RCT +2）
```

| Priority | ROI Score |
|----------|-----------|
| P1 | ≥ 4 |
| P2 | 2–3 |
| P3 | 0–1 |

---

## Queue（2026-07-07 生成）

### P1 — 最高优先级

| Seq | Literature | Type | Year | Potential EA | Target RELs | ROI |
|-----|-----------|------|------|-------------|------------|-----|
| 2 | Libster et al. 2025 — Friendship Support Protects Autistic Youth | Empirical | 2025 | **2** | REL-000090, REL-000091 | 4 |
| 4 | Carter et al. 2016 — Peer Support Arrangements RCT | RCT | 2016 | **0** | ~~REL-000094~~ KIR-004 Wrong EPQ Mapping | 0 |
| 5 | Strnadová et al. — Primary to High School Transition SR | SR | 待补 | **0** | REL-000095 KIR-005 Source–Citation Mismatch | 0 |

*Lit 5 → REL-000095 需注意：REL-000095 当前的 primary_citation 是 Carter et al.（Peer Support RCT），与 Strnadová 主题不一致，需要在 Appraisal 时重新确认 REL Mapping。

---

### P2 — 次优先级

| Seq | Literature | Type | Year | Potential EA | Target RELs | ROI |
|-----|-----------|------|------|-------------|------------|-----|
| 17 | 待补充 — Community Participation Model | Theoretical | 待补 | 1 | REL-000085 | 2 |
| 19 | Kim et al. — Disability and Social Participation | Population Survey | 待补 | 1 | REL-000086 | 2 |
| 21 | Qi et al. 2025 — Barriers / Ableism | Social Research | 2025 | 1 | REL-000084 | 2 |
| 22 | Thompson-Hodgetts et al. 2026 — Community Recreation | Case Study | 2026 | 1 | REL-000087 | 2 |
| 23 | 待补充 — Autistic Community Attitudes | Social Research | 待补 | 1 | REL-000089 | 2 |
| 25 | Badia et al. 2023 — Leisure Education | Empirical | 2023 | 1 | REL-000062 | 2 |
| 28 | Badia et al. 2013 — Leisure Participation & QoL | Empirical | 2013 | 1 | REL-000061 | 2 |

---

### P3 — 暂缓（已完成或有 KIR 问题）

| Seq | Literature | Status |
|-----|-----------|--------|
| 20 | Verdonschot 2009a | REL-000080/083 已完成（EA-000006/007）；REL-000013 KIR-003 挂起 |
| 13 | Lindsay et al. 2018 | EA-000004 已完成 |
| 16 | Coñoman et al. 2024 | EA-000005 已完成 |
| 33 | Hodge et al. 2017 | EA-000003 已完成 |

---

## KIR Pending Items（影响 EPQ 的未解决问题）

| KIR | 涉及文献 | 影响 REL | 当前状态 |
|-----|---------|---------|---------|
| KIR-001 | — | REL-000096 | Duplicate Candidate，待 Network Review |
| KIR-003 | Lit 20（Verdonschot 2009a/b） | REL-000013 | Citation Attribution Unconfirmed |

---

## EPQ Summary

| 指标 | 值 |
|------|-----|
| Total candidates | 14 |
| P1 candidates | 3 |
| P2 candidates | 7 |
| P3 / completed | 4 |
| Total potential new EAs | **11** |
| Current EA count | 7 |
| Target EA count（本批完成后） | 18 |

---

## Next Action（按 ROI 顺序）

**KGO-007 建议目标：** Lit 2（Libster et al. 2025）
- 2 条 REL，ROI = 4
- REL-000090（Friendship Support Satisfaction → Well-being）
- REL-000091（Well-being → Quality of Life）
- 均为 High，Type B

---


---

## Candidate REL Registry

待 Network Review 时统一评估是否加入 Knowledge Graph。

| Source | Outcome | Evidence | 来源 |
|--------|---------|----------|------|
| Peer Support Arrangements | Community Participation / School Inclusion | Carter et al. 2016 RCT（Tier 2） | KIR-004 |
| Unmet Family Needs | Caregiver Burden | Dunst 2022 Meta-analysis（Tier 1） | KGO-002 |

**触发 Network Review 的条件：**
- Candidate REL ≥ 5
- 或 KIR 问题积累达到 Network Review 触发条件

## Update Trigger

EPQ 在以下情况更新：
- 任意新 EA 生成（从 Queue 移除已完成项）
- 新文献加入 Evidence Index
- KIR 问题解决（影响 blocked items）
- Network Review 完成后重新计算

---

*EPQ v1.0 — Created 2026-07-07*
*KGO-007 产出*
*Next review: 任意 5 条 EA 生成后*
