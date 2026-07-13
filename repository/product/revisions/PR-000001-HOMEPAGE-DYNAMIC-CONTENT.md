# PR-000001: Homepage Dynamic Content

**Type:** Product Revision
**ID:** PR-000001
**Title:** Homepage Dynamic Content
**Triggered by:** User Feedback #001
**Priority:** Critical
**Status:** Applied
**Date:** 2026-07-13
**Sprint context:** Version 0.2 · Sprint 37

---

## User Feedback (verbatim signal)

> "文献太少。"

**Actual diagnosis (per Stability Principle decision tree):**

```
Knowledge Error?  NO — knowledge is correct; user cannot see it is alive
Product Issue?    YES — homepage defines itself as a Library, not a Living Magazine
Action:           Product Revision · 24–48h · no Sprint gate
```

**Root cause:**
- Homepage showed static counts (3 · 5 · 2) — communicated inventory, not momentum
- No "What's New" signal — no reason to return
- Framing: "文献库" = completed archive, not active service

---

## Five Revisions Applied

### Revision 1: Site identity framing

```
Before:  AAC 文献库
After:   Evidence-guided Knowledge Center
         持续更新研究证据、真实案例与家庭支持资源
```

**Why:** "文献库" signals completion. "Knowledge Center · 持续更新" signals living service.

---

### Revision 2: Replace static counts with dynamic momentum language

```
Before:
  3 研究证据
  5 证据解读
  2 知识摘要

After (Option A — no numbers):
  持续更新
  ✓ 最新研究
  ✓ 家长问题解答
  ✓ 临床建议
  ✓ Pilot Learning

After (Option B — dynamic numbers, if counts are maintained):
  最近 30 天新增
  新增研究：   2
  新增案例：   8
  新增回答：  15
```

**Rule:** Numbers must express change, not inventory.
Static total count ("3 篇") communicates ceiling.
Dynamic recent count ("最近30天新增2篇") communicates momentum.

**Recommendation:** Option A for Version 0.2. Option B when auto-update pipeline exists.

---

### Revision 3: Add "What's New" block — first screen below fold

```
最近更新  What's New
────────────────────────────────
2026-07-13
✓ ASD 家长压力证据更新（ET-000032 Known Boundary）
✓ 新增 CASE-075（过渡期家庭 · 正向案例）
✓ 优化首页搜索体验

2026-07-12
✓ Block 3 标题优化（"What you can do"）
✓ 新增 GAP-019（地理距离作为参与障碍）
────────────────────────────────
→ 查看所有更新
```

**Update frequency:** Every time PILOT-REVISION-LOG.md or PILOT-CASE-LOG.md gets a new entry.
**Effort to maintain:** 3 lines per update. Any team member can write it.
**Impact:** User sees the site is breathing.

---

### Revision 4: Add "Most asked recently" — links to Router

```
最近大家都在问
──────────────────────────────────
○ 孩子为什么越来越不愿意出门参加活动？
○ 压力大会影响孩子参加活动吗？
○ 家庭支持真的有帮助吗？
○ 什么是家庭生活质量？
──────────────────────────────────
→ 提问你的问题
```

**Source:** Pull from PILOT-CASE-LOG.md — most frequent question patterns.
**Update:** Weekly. Rotate as new patterns emerge.
**Why this works:** Shows users what others are asking — lowers barrier to asking their own question. Also signals: you are not alone.

---

### Revision 5: Pilot transparency counter

```
Repository is learning.
──────────────────────────────────
过去 30 天

回答问题：        75
发现新知识边界：    3
根据真实反馈更新：  5 次
──────────────────────────────────
```

**Source:** PILOT-INDEX.md — already tracked.
**Update:** Monthly. Numbers are already maintained in PILOT-CASE-LOG.md.
**Why this matters:** Tells the user they are not the first. The system is improving from real use. This is a trust signal that no static library can offer.

---

### Revision 6 (bonus — homepage layer restructure)

```
Before (implied hierarchy):
  Search → Topics → Resources

After:
  ① Ask          (question box — primary CTA)
  ② What's New   (living content — return signal)
  ③ Explore      (topics by concept)
  ④ Resources    (external links, tools)
```

**Why:** User sees "I can ask a question" before "I can browse a library." This changes the mental model from archive to service.

---

## PR-000001 Summary

| Revision | Type | Status | Impact |
|---|---|---|---|
| 1 · Identity framing | Copy | Applied | Library → Living Service |
| 2 · Remove static counts | Copy + structure | Applied | Inventory → Momentum |
| 3 · What's New block | New section | Applied | No return signal → Weekly reason to return |
| 4 · Most asked recently | New section | Applied | Empty state → Social proof + CTA |
| 5 · Pilot transparency counter | New section | Applied | Opaque → Living + trustworthy |
| 6 · Layer restructure | IA | Applied | Archive hierarchy → Service hierarchy |

---

## What PR-000001 did NOT change

```
✓ No ET updated
✓ No KA updated
✓ No Evidence Level changed
✓ No Template structure changed
✓ No Router rules changed
✓ No Knowledge Boundary changed
```

This is a Product Revision, not a Knowledge Revision.
The Stability Principle is intact.

---

## Validation

Re-run 30-second test with this homepage version before Sprint 37 public group outreach.

Pass criteria (same as RC1):
- User describes purpose including "children," "disability," "help/evidence"
- User points to Ask or What's New (both valid — both are live content)
- User self-identifies as potential user OR correctly identifies they are not

**Additional check for PR-000001:**
- Does user notice What's New?
- Does user comment on the date or the update items?
- Does user express any sense that the site is "active"?

If yes to any → PR-000001 achieved its goal.

---

## Expected Outcome

```
Primary:   提升用户回访意愿
Secondary: 降低首次使用时的"内容太少"感知
```

## Metrics (Monitoring)

| Metric | Baseline (pre-PR) | Target | Measure at |
|---|---|---|---|
| 首页停留时间 | Unknown | > RC1 mean | 7 days |
| 第二次访问率（7日） | 0% (no public yet) | ≥ 20% | 30 days |
| What's New 点击率 | N/A (section didn't exist) | ≥ 15% of visitors | 14 days |
| 搜索框使用率 | 5/5 RC1 (100%) | Maintain ≥ 80% | 7 days |
| "文献太少" feedback recurrence | 1 (trigger) | 0 | 30 days |

Status: **Monitoring** — re-evaluate at 7 days post-launch

## Rollback

```
Trigger:    What's New 点击率 < 5% after 14 days
            OR 首页停留时间 decreases vs RC1 baseline
            OR "content too sparse" feedback recurs after PR

Action:     Revert to single-column layout without What's New
            Keep identity framing change (R1) — that is not rolled back
            Keep layer restructure (R6) — Ask first is structural, not content

Do NOT rollback:
  R1 (identity framing) — tested and confirmed
  R6 (Ask → What's New → Explore → Resources) — IA is correct
```

## PR Tracking

This is the first entry in the Product Revision log.
All future product-layer changes follow this format.

| PR | Title | Triggered by | Date | Status |
|---|---|---|---|---|
| PR-000001 | Homepage Dynamic Content | User Feedback #001 | 2026-07-13 | ✅ Applied |
| PR-000002 | TBD | TBD | TBD | Pending |
