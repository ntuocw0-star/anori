# SPRINT-36-CLOSEOUT.md

**Sprint:** 36
**Version:** 0.1 RC1
**Theme:** Public Pilot Preparation — First-use Validation
**Status:** CLOSED
**Closed:** 2026-07-13

---

## RC1 Verdict

```
30-Second Test:  4/5 clear pass · 1 marginal
TTFA (mean):     69.4 seconds (target: ≤ 120s) ✅
QCR:             5/5 (100%) ✅
Return intention: 3 Y · 2 Maybe · 0 N ✅
```

**RC1 passes the single success criterion:**
> A completely unfamiliar parent, with no help, knows within 30 seconds what this is for, and gets a trustworthy, understandable, actionable answer within 2 minutes.

Parent sessions (S001, S003, S005): all passed.
OT session (S002): passed cleanly.
Teacher session (S004): passed marginally — identity issue on Home page.

---

## What the tests actually revealed

### Knowledge layer: no failures

In five unguided sessions, not a single user:
- Received a factually wrong answer
- Received an overclaimed answer
- Was confused by evidence language
- Asked a question the Router couldn't handle

The knowledge layer held under real-world, unguided conditions.

### Product layer: five fixable findings

All five findings are copy, heading, or badge placement changes. None require knowledge changes.

| # | Finding | Severity | Fix |
|---|---|---|---|
| 1 | Teacher identity missing from tagline | Medium | Add "and the professionals who support them" |
| 2 | Block 3 heading not inviting reading | Medium | "What this means → What you can do" |
| 3 | Input placeholder causing phrasing anxiety | Medium | Shorter, lower-barrier example |
| 4 | Block 4 not read by 2/5 | Low | Investigate heading; consider "Honest limits + next step" |
| 5 | Evidence badge too small for clinicians | Low | Increase prominence |

None of these require ET revision, Template revision, or Router change.

### The single most important finding

**S005 (newly diagnosed parent):** "这个不像其他网站，它好像真的在听我说话。"

This user — the most distressed, the most uncertain, the most recently overwhelmed — had the clearest pass, the highest engagement, and the strongest intent to return and recommend.

She re-read Block 0 (Acknowledgment) twice.

She stayed on the page for 8 minutes.

She articulated the Emotionally-Attuned design — "先听你说话" — without knowing the term existed.

This confirms the design hypothesis that drove Sprint 32:
> Being heard before being educated is not a nice-to-have. It is the reason a distressed user stays.

---

## Three Metric Baselines (RC1)

### Metric 1: Time to First Answer (TTFA)

```
S001 (Parent, ASD):        67s
S002 (OT):                 41s
S003 (Parent, CP):         89s
S004 (Teacher):            98s
S005 (Newly diagnosed):    52s

Mean TTFA:   69.4 seconds
Target:      ≤ 120 seconds
Status:      ✅ PASS
```

Longest TTFA (S004, 98s) caused by missing teacher identity on Home → FAQ detour → Ask. Fixable with one tagline revision.

### Metric 2: Question Completion Rate (QCR)

```
All 5 users submitted a question: 5/5 (100%)
Target: ≥ 80%
Status: ✅ PASS
```

Note: Input anxiety was observed in S001 and S003 (hesitation before submitting), but both completed. The barrier exists — it just didn't cause abandonment. Fix the placeholder before public launch to reduce hesitation.

### Metric 3: Return Rate (RC1 — intention-based)

```
Would return: Y=3, Maybe=2, N=0
Target: ≥ 40% Y
Status: ✅ PASS (60% Y)
```

Both "Maybe" responses cited conditional reasons (S003: "depends on whether answers are useful"; S004: "if I had a specific student situation"). Neither expressed a negative reason.

Actual return rate measurable at Sprint 37 (7-day follow-up).

---

## Five Fixes for v0.2

All five fixes are product-layer changes. None affect Repository knowledge.

```
Fix 1: Home tagline
  Before: "Evidence-guided answers for families..."
  After:  "Evidence-guided answers for families and the
           professionals who support children with disabilities."

Fix 2: Block 3 heading
  Before: "What this means in practice"
  After:  "What you can do"

Fix 3: Input placeholder
  Before: "Type your question here — e.g. 'Does parenting stress
           affect how much my child participates in activities?'"
  After:  "Ask in plain language — e.g. 'My child won't join activities'
           or 'Which family factors matter most for participation?'"
           Note: You don't need a complete sentence.

Fix 4: Block 4 heading (investigate)
  Current: "What we don't know yet + shared decision"
  Concern: Demotivating to read
  Test option: "Honest limits — and your next step"
  Action: A/B test in first 25 public sessions

Fix 5: Evidence Level badge
  Current: Small text badge below answer title
  After:   Larger badge, same position — increase font and padding
```

---

## RC1 → v0.2 Transition

v0.2 is not a new knowledge release.
v0.2 is five copy and formatting changes applied to RC1.

After v0.2 fixes are applied:
- Re-run 30-second test with 2 new users (not the original 5)
- If both pass → v0.2 is confirmed → Sprint 37 soft launch

---

## What did not need to change

This is equally important:

```
❌ Not changed: Router
❌ Not changed: Clinical Answer Template
❌ Not changed: Evidence Topics
❌ Not changed: Knowledge Articles
❌ Not changed: Triage Protocol
❌ Not changed: Emotionally-Attuned Mode
❌ Not changed: Knowledge Boundaries
❌ Not changed: Clinical Navigation
```

The knowledge layer was invisible to users — not because they couldn't see it, but because it worked. No user experienced a moment where the knowledge system was the problem.

---

## Sprint 37 Recommendation

**Theme: v0.2 Soft Launch**

**Step 1:** Apply five product fixes (≤ 1 day)
**Step 2:** Re-test with 2 new users — 30-second test only
**Step 3:** If both pass → soft launch to first public group

**First public group (Sprint 37 target):**
- One parent Facebook group (ASD or CP community, 50–200 members)
- One OT professional network post

**Not a formal announcement.** One post: "We've built a tool that answers research questions about family factors and child participation. Happy to get feedback."

**Track for 7 days:**
- Visitor count
- Questions submitted
- QCR (% who submit after landing)
- Feedback received
- Return visits (7-day)

**At 7 days:** Sprint 37 debrief. First real-world public performance data.

---

## Project Milestone Log (updated)

```
Sprint 24    Template v1.3 frozen · Stage IV entered
Sprint 26    Two-Hub Network · Stage IV complete
Sprint 27    Validation baseline (91.7% / 89.4%)
Sprint 29    Automation · 100% navigation
Sprint 31    Real-world Pilot · 50-question set
Sprint 32    Clinical Utility Governance · Template v2.0
Sprint 33    First 20 cases · Learning Loop established
Sprint 34    50 cases · Repository Learning Curve baseline
Sprint 35    75 cases · Product MVP · Scope Statement
Sprint 36    RC1 · First-use validation · Three metrics baseline
             ← HERE: Knowledge validated. Product ready.
Sprint 37    v0.2 soft launch
Sprint 38+   Public performance data · Stage VI → VII assessment
```

---

## Sprint 36 One-line Summary

> *Five users. No knowledge failures. Five product fixes identified.
> The newly diagnosed mother who stayed for eight minutes said:
> "它好像真的在听我说话。"
> That is the success criterion, met.*
