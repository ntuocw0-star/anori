# Network Review 2 (NR-002)

**Anori Knowledge Operating System**
Date: 2026-07-07
Type: Knowledge Integrity Review
Trigger: **Strategic Trigger**（Evidence Production blocked by KIR accumulation）
Scope: KIR-005 / KIR-007 / KIR-008 / KIR-009
Principle: **Produce decisions, not mutations.**

---

## Trigger Record

| 项目 | 内容 |
|------|------|
| Trigger Type | Strategic Trigger（not Threshold Trigger） |
| Fresh Open KIR | 4（正式阈值 5，本次提前触发） |
| Reason | Sprint 5 Phase B 剩余 5 条 High REL 全部 KIR 阻塞，Evidence Production 进入治理瓶颈 |
| Reference | OBS-012（Governance Notes） |

---

## Section ① — KIR-005：Source–Citation Mismatch（REL-000095）

**REL-000095：** Friendship Support Satisfaction → Community Participation（High）

**Issue：**
- Primary Citation：Carter et al. 2016（Peer Support Arrangements RCT）
- Carter 2016 研究的是 Peer Support Arrangements → School Inclusion，Source 是 Peer Support，不是 Friendship Support Satisfaction

**Options：**

| 选项 | 动作 |
|------|------|
| A | 更换 Primary Citation → 找支持 Friendship Support Satisfaction → Community Participation 的文献 |
| B | 修改 REL Source VAR → Peer Support Arrangements（让 REL 与 Citation 一致） |

**Decision：REASSIGN CITATION（Option A）**

> REL-000095 的关系定义（Friendship Support Satisfaction → CP）理论上合理，保留 REL 定义。
> Primary Citation 更换为 `citation_status: Needs Assignment`，等待合适文献。
> Carter 2016 从 REL-000095 解除关联，改为支持 Candidate REL（Peer Support → CP）。

**Action Items：**
- [ ] REL-000095：`primary_citation` 标注 `Pending — Needs Assignment`
- [ ] Carter 2016 重新关联至 Candidate REL

---

## Section ② — KIR-007：Missing Evidence Basis（REL-000027）

**REL-000027：** Community Participation → Family Quality of Life（High）

**Issue：**
- `evidence_basis_status: Missing`
- EC-011 字段无具体文献
- Evidence Traceback 已执行，失败

**Update：**
- EA-000027（Wang et al. 2022 MASEM）已于 Sprint 5 生成，直接支持 REL-000027
- `evidence_basis_status: Missing` 状态需要评估是否可以关闭

**Decision：MAINTAIN MISSING FLAG + ACCEPT EA-000027**

> EA-000027 提供了新的直接证据（Tier 1 MASEM），REL-000027 现有实质性证据支持。
> 但 `evidence_basis_status: Missing` 针对的是 EC-011 历史依据的缺失，两者性质不同：
> - EA-000027 = 新证据（New Evidence）
> - EC-011 = 原始评级依据（Historical Basis）
> 保留 `evidence_basis_status: Missing`，同时新增 `new_evidence: EA-000027`。
> KIR-007 状态更新为 **Partially Resolved**（有新证据，原始 EC-011 依据仍缺失）。

**Action Items：**
- [ ] REL-000027：新增 `new_evidence: EA-000027`
- [ ] KIR-007：更新状态为 `Partially Resolved`
- [ ] 保留 `evidence_basis_status: Missing`（EC-011 问题未解决）

---

## Section ③ — KIR-008：Repository–REL Inconsistency（REL-000094）

**REL-000094：** Peer Victimization → Community Participation（High）

**Issue：**
- Primary Citation：Lit 1（Storch et al. 2012）
- Lit 1 的 Outcome 是 Psychopathology/Loneliness，未测量 Community Participation
- 两者 Outcome 完全不匹配

**Options：**

| 选项 | 动作 |
|------|------|
| A | 更换 Primary Citation → 找支持 Peer Victimization → Community Participation 的文献 |
| B | 新建 Candidate REL：Peer Victimization → Psychopathology/Loneliness（Lit 1 真正支持的关系） |

**Decision：REASSIGN CITATION（Option A）+ CREATE CANDIDATE REL（Option B，同步执行）**

> REL-000094 的关系定义（Peer Victimization → CP↓）理论合理，研究存在但当前文献不对。
> Primary Citation 标注为 Needs Assignment。
> Lit 1 同时支持新 Candidate REL：Peer Victimization → Psychopathology。

**Action Items：**
- [ ] REL-000094：`primary_citation` 标注 `Pending — Needs Assignment`
- [ ] Candidate REL 新增：Peer Victimization → Psychopathology（依据 Lit 1 Storch et al. 2012）

---

## Section ④ — KIR-009：Outcome–Citation Mismatch（REL-000057）

**REL-000057：** Social Support - Formal → Family Functioning（High）

**Issue：**
- Primary Citation：Cappe et al. 2011
- Cappe 2011 的 Outcome 是 Parent Quality of Life，不是 Family Functioning

**Options：**

| 选项 | 动作 |
|------|------|
| A | 更换 Primary Citation → 找支持 Formal Support → Family Functioning 的文献 |
| B | 修改 REL Target → Parent QoL（让 REL 与 Citation 一致） |
| C | 新建 Candidate REL：Formal Support → Parent QoL（Cappe 2011 真正支持的关系） |

**Decision：REASSIGN CITATION（Option A）+ CREATE CANDIDATE REL（Option C，同步）**

> REL-000057（Formal Support → Family Functioning）理论合理，保留。
> Primary Citation 标注 Needs Assignment。
> Cappe 2011 支持新 Candidate REL：Formal Support → Parent QoL。

**Action Items：**
- [ ] REL-000057：`primary_citation` 标注 `Pending — Needs Assignment`
- [ ] Candidate REL 新增：Social Support - Formal → Parent QoL（依据 Cappe et al. 2011）

---

## Decision Summary

| KIR | REL | Decision | Action Type |
|-----|-----|---------|------------|
| KIR-005 | REL-000095 | REASSIGN CITATION | Citation Update |
| KIR-007 | REL-000027 | MAINTAIN MISSING + Accept EA-000027 | Status Update（Partial） |
| KIR-008 | REL-000094 | REASSIGN CITATION + Candidate REL | Citation Update + Candidate |
| KIR-009 | REL-000057 | REASSIGN CITATION + Candidate REL | Citation Update + Candidate |

---

## Candidate REL Registry Update（NR-002 新增）

| Source | Outcome | Evidence | 来源 |
|--------|---------|----------|------|
| Peer Support Arrangements | Community Participation | Carter 2016 RCT | KIR-005 |
| Unmet Family Needs | Caregiver Burden | Dunst 2022 Meta | KGO-002 |
| Peer Victimization | Psychopathology / Loneliness | Storch et al. 2012 | KIR-008 |
| Social Support - Formal | Parent QoL | Cappe et al. 2011 | KIR-009 |

---

## Immediate Actions（NR Implementation）

1. REL-000095：citation → Needs Assignment
2. REL-000094：citation → Needs Assignment
3. REL-000057：citation → Needs Assignment
4. REL-000027：新增 `new_evidence: EA-000027`，KIR-007 → Partially Resolved
5. Candidate REL Registry 更新（2 条新增）

---

*Network Review 2 (NR-002) — 2026-07-07*
*Trigger: Strategic（OBS-012）*
*Next: NR-002 Implementation*
