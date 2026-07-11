# Evidence Index v1.0

**Anori Knowledge Operating System**
Created: 2026-07-07
Purpose: 所有已与 REL 建立映射关系的文献索引。可按 Predictor、Outcome、REL、Design、Tier 查询。

---

## Index Structure

| 字段 | 说明 |
|------|------|
| Lit ID | 文献库序号（来自 evidence-index-window-literature.json） |
| EA ID | Evidence Card 编号（已生成卡片的文献） |
| Citation | 作者 + 年份 + 标题缩写 |
| Design | 研究设计 |
| Tier | Tier 1–3（基于 Workflow 分级） |
| Predictor | 自变量 |
| Outcome | 因变量 |
| Supported REL | 对应 REL ID |
| REL Grade | REL 当前等级 |
| Mapping | Direct / Weak / Candidate |
| KGO Type | A（Upgrade）/ B（Reinforcement）/ Pending |
| Notes | 备注 |

---

## Section 1 — Active Evidence Cards（已生成 EA）

| Lit ID | EA ID | Citation | Design | Tier | Predictor | Outcome | Supported REL | REL Grade | Mapping | KGO Type |
|--------|-------|----------|--------|------|-----------|---------|---------------|-----------|---------|----------|
| — | EA-000001 | Dunst 2023（Informal） | Meta-analysis | Tier 1 | Social Support - Informal | Family Quality of Life | REL-000026 | **High** | Direct | A — Upgrade |
| — | EA-000002 | Dunst 2023（Formal） | Meta-analysis | Tier 1 | Social Support - Formal | Family Quality of Life | REL-000059 | High | Direct | B — Reinforcement |

---

## Section 2 — Literature Mapped to Existing RELs（已有映射，待生成 EA）

以下文献已在文献库中与 REL 建立对应关系，可按需生成 Evidence Card。

| Lit ID | Citation | Design | Grade | Predictor | Outcome | Supported REL | REL Grade | Priority |
|--------|----------|--------|-------|-----------|---------|---------------|-----------|----------|
| 33 | Hodge et al. 2017 | Meta-analysis | ★★★★★ | Shared Family Leisure | Family QoL | REL-000060 | High | Medium |
| 20 | Verdonschot et al. 2009 | Review | ★★★★★ | Caregiver Burden | Community Participation | REL-000013 | High | Low |
| 20 | Verdonschot et al. 2009 | Review | ★★★★★ | Community Participation | Quality of Life | REL-000080 | High | Low |
| 20 | Verdonschot et al. 2009 | Review | ★★★★★ | Community Participation | Well-being | REL-000083 | High | Low |
| 21 | Qi et al. 2025 | Social Research | ★★★★★ | Ableism | Community Participation | REL-000084 | High | Low |
| 22 | Thompson-Hodgetts et al. 2026 | Case Study | ★★★★★ | Shared Family Leisure | Community Participation | REL-000087 | High | Low |
| 23 | 待补充 | Social Research | ★★★★★ | Community Participation | Well-being | REL-000089 | High | Low |
| 25 | Badia et al. 2023 | Empirical | ★★★★★ | Family Leisure | Family QoL | REL-000062 | High | Low |
| 28 | Badia et al. 2013 | Empirical | ★★★★★ | Leisure Participation | Quality of Life | REL-000061 | High | Low |
| 4 | Carter et al. 2016 | RCT | ★★★★★ | Peer Support | Community Participation | REL-000094 | High | Low |
| 2 | Libster et al. 2025 | Empirical | ★★★★☆ | Friendship Support Satisfaction | Well-being | REL-000090 | High | Low |
| 2 | Libster et al. 2025 | Empirical | ★★★★☆ | Well-being | Quality of Life | REL-000091 | High | Low |
| 5 | Strnadová et al. | SR | ★★★★★ | Friendship Support Satisfaction | Community Participation | REL-000095 | High | Low |
| 13 | Lindsay et al. 2018 | SR | ★★★★★ | Transition Readiness | Community Participation | REL-000063 | High | Low |
| 16 | Coñoman et al. 2024 | SR | ★★★★★ | Transition Readiness | Community Participation | REL-000064 | High | Low |
| 17 | 待补充 | Theoretical | ★★★★★ | Community Participation | Family QoL | REL-000085 | High | Low |
| 19 | Kim et al. | Population Survey | ★★★★★ | Socioeconomic Status | Community Participation | REL-000086 | High | Low |

**Priority 说明：**
- High：对应 REL 当前等级 Low 或 Very Low，生成 EA 有升级价值
- Medium：对应 REL 当前等级 High，但文献为 Meta-analysis 或 SR，值得补强
- Low：对应 REL 当前等级已 High，文献质量一般，暂缓

---

## Section 3 — Candidate Mappings（弱映射，暂不生成 EA）

| Lit ID | Citation | Predictor（文献） | Outcome（文献） | KOS VAR 候选 | Mapping Strength | Gap Type | 处理方式 |
|--------|----------|-----------------|----------------|-------------|-----------------|----------|----------|
| — | Dunst 2022 | Unmet Family Needs | Parent Stress | VAR-000033 Unmet Service Need | Weak | Construct Scope Gap | 待 VAR alias 扩展或新增 Family Needs VAR |
| — | Milićević et al. 2017 | Family QoL | Community Participation | REL-000078 | Tier 3−（correlation only） | Direction Gap | EA-000000 已生成（context only） |

---

## Section 4 — Candidate RELs（REL 不存在，待 Network Review）

| Citation | Predictor（文献） | Outcome（文献） | 现有 REL | 状态 |
|----------|-----------------|----------------|----------|------|
| Dunst 2022 | Unmet Family Needs | Caregiver Burden | 不存在 | Candidate REL — 待下次 Network Review |

---

## Section 5 — Literature Without REL Mapping（未索引）

以下文献在文献库中存在但尚未与任何 REL 建立映射，待后续 Repository-first 评估：

| Lit ID | Citation | Design | 主要主题 |
|--------|----------|--------|----------|
| 1 | 待补充（Peer Victimization + ASD） | Observational | Peer Victimization → Psychopathology → Loneliness |
| 3 | Ali et al. 2023 | Practice Review | Peer Support → Community Inclusion |
| 26 | Schreuer et al. 2014 | Comparative | Physical Disability → Leisure Participation |
| 27 | Special Issue 2025 | Special Issue | Leisure + Sport → Participation |
| 29 | Frontiers Research Topic | Research Topic | Leisure Participation |
| 30 | Reference Work | Reference | FQoL Concept |
| 31 | FQoL Scale | Measurement | FQoL Measurement |
| 32 | 待补充 | Measurement | Community Participation Measures |

---

## Query Guide

**按 Predictor 查询：**
- Social Support - Informal → Section 1（EA-000001）
- Ableism → Section 2（Lit 21）
- Family Leisure → Section 2（Lit 25, 33）

**按 Outcome 查询：**
- Family Quality of Life → EA-000001, EA-000002, Lit 17, 25, 33
- Community Participation → Lit 4, 5, 13, 16, 19, 21, 22
- Quality of Life → Lit 20, 28

**按 REL 查询：**
- REL-000026 → EA-000001（升级依据）
- REL-000060 → Lit 33（Meta-analysis，待 EA）
- REL-000078 → EA-000000（context only）

**按 Design 优先级查询（Upgrade 候选）：**
- Meta-analysis：EA-000001, EA-000002, Lit 33
- Systematic Review：Lit 5, 13, 16
- RCT：Lit 4

---

## KGO Dashboard（同步更新）

| 指标 | 当前值 |
|------|--------|
| Evidence Cards（Active EA） | 2 |
| Literature with REL Mapping | 17条映射（14篇文献） |
| Literature without REL Mapping | 8篇 |
| Candidate Mappings | 2 |
| Candidate RELs | 1 |
| Successful Upgrades | 1（REL-000026） |
| Reinforcement Cases | 1（REL-000059） |

---

*Evidence Index v1.0 — Created 2026-07-07*
*KGO-003 产出*
*Next update trigger: 任意新 EA 生成，或新 REL Mapping 建立*
