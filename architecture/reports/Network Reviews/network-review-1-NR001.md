# Network Review 1 (NR-001)

**Anori Knowledge Operating System**
Date: 2026-07-07
Type: Knowledge Integrity Review
Scope: 5 Open KIR Issues + 2 Candidate RELs
Principle: **Produce decisions, not mutations.**

本 Report 输出决策和行动列表。实际修改在 NR Implementation 中执行，不在本 Review 中执行。

---

## Trigger Status

| 触发条件 | 当前值 | 触发值 | 状态 |
|---------|--------|--------|------|
| KIR Open Issues | 5 | 5 | ✅ 触发 |
| Candidate RELs | 2 | 5 | — |
| EA Count | 15 | 50 | — |

---

## Section ① — Duplicate Review（KIR-001）

**对象：** REL-000063 vs REL-000096

| 字段 | REL-000063 | REL-000096 |
|------|-----------|-----------|
| Source | Transition Readiness | Transition Readiness |
| Relation | enables | enables |
| Target | Community Participation | Community Participation |
| Effect | Protective | Protective |
| Primary Citation | Lindsay et al. 2018（SR） | Strnadová et al.（SR） |
| Status | Active | duplicate_candidate |

**Five-point Semantic Check：** 五项全部一致，已于 KIR-001 确认为 Semantic Duplicate。

**Decision：MERGE**

> REL-000096 合并入 REL-000063。
> Strnadová et al. 作为 REL-000063 的第二条 primary citation 补录。
> REL-000096 状态更新为 `Deprecated`，保留历史记录不删除。

**Action Items：**
- [ ] REL-000063：`secondary_citation` 字段新增 Strnadová et al.
- [ ] REL-000096：`status` 更新为 `Deprecated`，`deprecated_note` 记录合并原因
- [ ] EA-000004（Lindsay 2018）维持不变，挂接 REL-000063
- [ ] Lit 5（Strnadová）映射从 REL-000096 迁移至 REL-000063

---

## Section ② — Source–Citation Review（KIR-005、KIR-006）

### KIR-005：REL-000095

| 字段 | 当前值 |
|------|--------|
| Source VAR | VAR-000011 Friendship Support Satisfaction |
| Primary Citation | Carter et al. 2016（Peer Support Arrangements RCT） |
| 矛盾 | Peer Support Arrangements ≠ Friendship Support Satisfaction |

**分析：**
Carter 2016 研究的是 Peer Support Arrangements 对 School Inclusion / Community Participation 的影响，而非 Friendship Support Satisfaction。REL-000095 的 Source 定义与 Citation 所支持的构念不一致。

**Decision：REASSIGN CITATION**

> REL-000095 的 `primary_citation` 更换为真正支持 Friendship Support Satisfaction → Community Participation 的文献。
> Carter 2016 从 REL-000095 解除关联，改为支持新建的 Candidate REL（见 Section ④）。

**Action Items：**
- [ ] REL-000095：`primary_citation` 清空，标注 `citation_status: Needs Assignment`
- [ ] Carter 2016 重新对应 Candidate REL（Peer Support → Community Participation）

---

### KIR-006：REL-000089

| 字段 | 当前值 |
|------|--------|
| Source VAR | VAR-000023 Community Participation |
| Primary Citation | Lit 23（Community Attitudes & Autistic Experience） |
| 矛盾 | Lit 23 的因果方向：Community Attitudes → Belonging → Participation → Isolation |

**分析：**
Lit 23 的 Source 是 Community Attitudes，Participation 是 Mediator，Well-being（Isolation 的反面）是终点。这与 REL-000089（Community Participation → Well-being）的方向和 Source 均不一致。

**Decision：SPLIT**

> REL-000089（Community Participation → Well-being）：保留，更换 primary_citation（需找到真正支持此方向的文献）。
> 新建 Candidate REL：Community Attitudes → Community Participation（Lit 23 真正支持的关系）。

**Action Items：**
- [ ] REL-000089：`primary_citation` 标注 `citation_status: Needs Assignment`
- [ ] 新增 Candidate REL：Community Attitudes → Community Participation（依据 Lit 23）
- [ ] 下次 Evidence Production 优先为 REL-000089 寻找正确的 primary citation

---

## Section ③ — Evidence Basis Review（KIR-007）

**对象：** REL-000027

| 字段 | 当前值 |
|------|--------|
| reviewer_grade | High |
| exception_basis | EC-011（无具体文献） |
| evidence_basis_status | Missing |
| traceback_status | Failed |

**分析：**
Evidence Traceback 已执行，未能恢复 EC-011 的原始文献身份。其他 EC-011 REL 均有明确文献（Dunst 2023/2022、Hodge 2017、Verdonschot 2009），但 REL-000027 的 EC-011 字段为空白。

已确认原则：Traceback failure ≠ Evidence judgment is wrong。

**Decision：MAINTAIN + SCHEDULE NEW EVIDENCE SEARCH**

> REL-000027 `reviewer_grade` 维持 High。
> 下一次 Evidence Production Sprint 中，将 REL-000027 列为优先目标，启动 New Evidence Search（不是 Traceback，而是主动寻找新 Meta-analysis）。
> 目标：Community Participation → Family Quality of Life，Tier 1 或 Tier 2 直接证据。

**Action Items：**
- [ ] REL-000027：状态维持，`evidence_basis_status: Missing` 字段保留
- [ ] EPQ 新增：REL-000027 New Evidence Search（Sprint 3 P1 候选）
- [ ] Network Report v2 更新此 REL 的状态

---

## Section ④ — Candidate REL Review

### Candidate 1：Peer Support Arrangements → Community Participation

| 字段 | 内容 |
|------|------|
| Source Construct | Peer Support Arrangements |
| Target | VAR-000023 Community Participation |
| Evidence | Carter et al. 2016 RCT（Tier 2） |
| 来源 | KIR-004 |

**分析：**
Carter 2016 是 RCT，研究 Peer Support Arrangements → School Inclusion / Social Participation，证据质量良好（Tier 2）。这是一个真实的关系，KOS 中目前没有对应 REL。

**Decision：CREATE NEW REL**

> 新建 REL：Peer Support Arrangements（VAR-000011 alias 或新 VAR）→ Community Participation（VAR-000023）
> 等 NR Implementation 时正式建立。

**Action Items：**
- [ ] 评估是否需要新建 VAR（Peer Support vs Friendship Support Satisfaction），或使用现有 VAR 别名
- [ ] 新建 REL，Evidence Grade 初始为 High（Carter 2016 RCT = Tier 2，sufficient for High）
- [ ] 生成 EA，挂接新 REL

---

### Candidate 2：Unmet Family Needs → Caregiver Burden

| 字段 | 内容 |
|------|------|
| Source Construct | Unmet Family Needs |
| Target | VAR-000009 Caregiver Burden |
| Evidence | Dunst 2022 Meta-analysis（Tier 1） |
| 来源 | KGO-002 |

**分析：**
Dunst 2022 是 Tier 1 Meta-analysis，但 Unmet Family Needs 目前不是 KOS 的规范 VAR。VAR-000033 是 Unmet Service Need（较窄），与 Family Needs 是 Construct Scope Gap。

**Decision：DEFER — VAR Review Required**

> 不立即建 REL。
> 先评估是否扩展 VAR-000033 的 aliases，或新建 VAR for Family Needs。
> 等 VAR 定义明确后，再建 REL 和 EA。

**Action Items：**
- [ ] VAR Review：VAR-000033 Unmet Service Need 的 aliases 是否可以扩展覆盖 Family Needs
- [ ] 或新建 VAR：Unmet Family Needs（独立于 Service Need）
- [ ] VAR 确认后，建 REL + 生成 EA（Dunst 2022，Tier 1，eligible for High）

---

## Decision Summary

| KIR / Issue | Decision | Action Type |
|-------------|---------|------------|
| KIR-001（Duplicate REL-000096） | MERGE into REL-000063 | REL Deprecate + Citation Update |
| KIR-005（REL-000095 Source–Citation） | REASSIGN CITATION | Citation Update |
| KIR-006（REL-000089 Source–Citation） | SPLIT + New Candidate REL | Citation Update + Candidate |
| KIR-007（REL-000027 Missing Basis） | MAINTAIN + New Evidence Search | EPQ Update |
| Candidate 1（Peer Support） | CREATE NEW REL | VAR Check + REL Create + EA |
| Candidate 2（Family Needs） | DEFER — VAR Review | VAR Review First |

---

## Action Priority

**Immediate（NR Implementation）：**
1. REL-000096 → Deprecated
2. REL-000063 → 补录 Strnadová secondary citation
3. REL-000095 → citation_status: Needs Assignment
4. REL-000089 → citation_status: Needs Assignment

**Next Sprint：**
5. REL-000027 → New Evidence Search（Sprint 3 P1）
6. Candidate 1（Peer Support REL）→ VAR Check + REL Create
7. REL-000089 → 寻找正确 primary citation

**Deferred：**
8. Candidate 2（Family Needs）→ VAR Review

---

## Governance Principles Validated in NR-001

| Principle | 来源 |
|-----------|------|
| Not every duplicate becomes a deletion | KIR-001 → MERGE not DELETE |
| Traceback failure ≠ Evidence refutation | KIR-007 → MAINTAIN High |
| Construct must match | KIR-005/006 → 不用错误文献替代 |
| Missing evidence history is an integrity issue | KIR-007 |

---

## NR-001 Outcome

**Decisions made:** 6
**Actions queued:** 8（4 Immediate + 4 Next Sprint/Deferred）
**RELs to be deprecated:** 1（REL-000096）
**New RELs to be created:** 1（Peer Support → Community Participation，pending VAR check）
**Deferred items:** 1（Candidate 2）

---

*Network Review 1 (NR-001) — 2026-07-07*
*Next step: NR Implementation（执行 Immediate Actions）*
*Next Network Review trigger: EA 达到 50，或 KIR Open 再次达到 5*
