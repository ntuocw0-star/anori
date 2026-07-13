# RC1-RELEASE-CANDIDATE.md

**Version:** 0.1 RC1
**Sprint:** 36
**Date:** 2026-07-13
**Status:** Active — Validation in progress

---

## What RC1 means

This is the first version that allows real users to use the Repository independently — without a researcher present, without explanation, without guidance.

RC1 does not mean complete.
RC1 means: ready to be tested by strangers.

---

## Success Criterion (single)

> A completely unfamiliar parent, with no help,
> knows within 30 seconds what this is for,
> and gets a trustworthy, understandable, actionable answer within 2 minutes.

If this succeeds: the project has crossed from research to product.
If this fails: fix the product layer, not the knowledge layer.

---

## Three Steps

### Step 1: 30-Second Test

**Who:** 5 people with no prior knowledge of this project.
**What:** Show them the Home page. Say nothing.
**Observe (do not help):**

```
At 30 seconds:
  □ Do they know what this is for?
  □ Do they know where to click?
  □ Do they know if this is for them?
```

**Pass criteria (all three must be yes):**
- They describe the purpose using the words "children," "disability," and either "evidence" or "research"
- They point to the question box or FAQ without being told
- They identify themselves as a potential user (or correctly identify they are not)

**If any criterion fails:** Revise Home page copy. Re-test. Do not touch Router, ET, or Template.

---

### Step 2: 2-Minute Test

**Same 5 people.** Give them this question verbally:
> "我孩子不愿意出去参加活动。"

Say nothing else. Observe:

```
□ Can they find the input box?
□ Can they type and submit the question?
□ Can they read and understand the answer?
□ Do they stay on the page after receiving the answer?
```

**Measure:**
- Time from page open to first answer received
- Whether they scroll through all four blocks or stop reading

**Pass criteria:**
- Time to first answer: ≤ 2 minutes
- Answer read: at least Block 1 and Block 2 (observed, not self-reported)
- Page not closed immediately after answer

**If any criterion fails:** Fix the product (input UX, answer formatting, page load). Do not add more evidence.

---

### Step 3: Three Questions (post-test)

Ask only these three. Nothing else.

```
① What do you think this website is for?

② Would you come back to use it again?

③ What made you hesitate?
```

**What to do with answers:**

| Answer to ① | Action |
|---|---|
| Correct (children, disability, evidence/help) | Home page passes |
| Partially correct | Minor copy revision |
| Wrong or blank | Home page fails — full revision |

| Answer to ② | Action |
|---|---|
| Yes | Return Rate baseline: positive |
| Maybe | Acceptable — note what created doubt |
| No | Critical — understand why before any other work |

| Answer to ③ | Action |
|---|---|
| Any hesitation named | Log immediately in RC1-FINDINGS.md |
| "Nothing" | Probe once: "Was there any moment you weren't sure what to do?" |

---

## Three Metrics (RC1 only)

These replace all previous internal metrics for Sprint 36.

### Metric 1: Time to First Answer (TTFA)

```
Start: User opens Home page
End:   User reads first word of Block 1

Target: ≤ 120 seconds
Fail:   > 120 seconds
```

If TTFA > 120s: the bottleneck is product (navigation, input friction, load time), not knowledge.

---

### Metric 2: Question Completion Rate (QCR)

```
Numerator:   Users who submit a question
Denominator: Users who open the Ask page

Target: ≥ 80%
Watch:  40–79% = friction in input
Fail:   < 40% = input design failure
```

Most drop-off happens at the question box — either the placeholder doesn't invite them, or they don't know what to type. Neither is a knowledge problem.

---

### Metric 3: Return Rate (RR)

```
Measure: Do users return within 7 days?

Target (RC1): ≥ 40% intention to return (self-reported at Step 3)
Aspirational:  ≥ 20% actual return (measurable in Sprint 37+)
```

Return Rate is the only metric that proves the Repository has durable value — not just novelty.

---

## Public Pilot Dashboard (RC1 version)

Replaces Evidence Dashboard as the primary operational view during public pilot.

```
Layer 1 — Acquisition
  Visitors (unique)
  Source (how did they find it?)

Layer 2 — Activation
  Question Completion Rate (QCR)
  Time to First Answer (TTFA)

Layer 3 — Value
  Answers rated Helpful / Confusing / Missing
  Open feedback received

Layer 4 — Retention
  Return Rate (7-day)
  Second question asked (same session / return session)

Layer 5 — Learning
  New gaps discovered
  Answer mode distribution (Standard / Attuned / Triage)
  Scope disclosures triggered
```

This dashboard is updated after every 25 new public cases.

---

## What RC1 does NOT change

```
❌ No new Hub
❌ No new ET
❌ No new KA
❌ No Dashboard revision
❌ No Template change
```

Everything built through Sprint 35 is frozen for RC1 testing.
If tests reveal a knowledge problem → note it, fix it in Sprint 37.
If tests reveal a product problem → fix it immediately, re-test.

The distinction matters:
- Knowledge problem: Router returned wrong ET, overclaim occurred, boundary missing
- Product problem: User couldn't find the input box, answer was unreadable, page was confusing

RC1 validation will almost certainly reveal product problems. That is the point.

---

## Observer Protocol

The most important instruction for RC1 testing:

**Say nothing.**

Sit beside the user. Watch where they look. Watch where they hesitate. Watch what they type. Watch when they stop reading.

Do not explain.
Do not help.
Do not say "try clicking there."

The moment you explain, you have invalidated the test.

If the user asks "what should I do?" — respond only with: "Do whatever feels natural."

Every moment of hesitation the user experiences is data.
Every moment you rescue them, you erase that data.

---

## RC1 Readiness Checklist (abbreviated)

Run PUBLIC-PILOT-CHECKLIST-v1.0.md in full before Step 1.
Minimum gates:

```
□ Home page: one-sentence identity above the fold
□ Ask page: question box is the most prominent element
□ Answer: four blocks visible, no jargon in Block 1
□ REPOSITORY-SCOPE.md accessible from About
□ Feedback prompt appears after every answer
□ Privacy note present
□ No answer overclaims (spot-check 10)
□ Crisis referral present (About or Scope page)
```

---

## Version History

| Version | Date | Change |
|---|---|---|
| 0.1 RC1 | 2026-07-13 | First public-ready version |
| 0.2 | TBD | After RC1 test results and revisions |
