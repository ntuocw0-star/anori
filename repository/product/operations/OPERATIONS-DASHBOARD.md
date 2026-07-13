# OPERATIONS-DASHBOARD.md

**Document Type:** Real-world Operations Data (replaces internal analytics as primary view)
**Version:** 1.0
**Started:** 2026-07-13 · Version 0.2 · Sprint 37
**Update frequency:** Daily (even if only 1–3 users)
**Rule:** Data before documentation. Real behaviour before architecture.

---

## Priority Stack (from Version 0.2)

```
P0  Real users entering every day (even 1–3 is signal)
P1  Record real behaviour — not architecture
P2  Trigger PRs from real feedback
P3  Open a Sprint only when PR cannot solve the problem
```

---

## Daily User Log

Record every day, even if sparse. Gaps are also data.

| Date | Visitors | Questions submitted | Answers completed | Feedback received | Notes |
|---|---|---|---|---|---|
| 2026-07-13 | 5 (RC1 test) | 5 | 5 | 5 verbal | RC1 sessions — controlled |
| 2026-07-14 | — | — | — | — | Pre-launch |
| 2026-07-15 | — | — | — | — | Target: soft launch |

---

## Core Metrics (updated weekly)

### Acquisition
```
Total visitors (cumulative):     5
Unique returning visitors:       0  (not yet launched)
Traffic source:
  RC1 controlled test:           5
  Organic / referred:            0
```

### Activation
```
Question Completion Rate (QCR):  100%  (5/5 RC1)
Time to First Answer (mean):     69.4s (RC1 baseline)
FAQ used before Ask:             2/5  (S002 OT · S004 Teacher)
Ask used directly:               3/5
```

### Value
```
Answers rated Helpful:           3/5
Answers rated Maybe:             2/5
Answers rated Confusing:         0/5
Open feedback received:          5 (all verbal RC1)
```

### Retention
```
Return rate (7-day intention):   60%  (3/5 said Y)
Actual 7-day return:             Not yet measurable
Second question (same session):  1/5  (S005 stayed 8 min)
```

### Learning
```
New gaps from public use:        0  (not yet launched)
PRs triggered from public use:   1  (PR-000001 from User Feedback #001)
Answer mode distribution:
  Standard:            50%
  Emotionally-Attuned: 40%
  Triage:              10%
```

---

## Weekly Summary (template)

Fill this every Monday. Even if numbers are small.

```
Week of: YYYY-MM-DD

ACQUISITION
  New visitors this week:    N
  Returning visitors:        N
  Top traffic source:        [organic / referral / direct]

ACTIVATION
  Questions submitted:       N
  QCR:                       N%
  Mean TTFA:                 Ns

VALUE
  Helpful ratings:           N
  Confusing ratings:         N
  Open feedback items:       N

RETENTION
  Users returned (7-day):    N
  Users who asked 2+ Qs:     N

LEARNING
  New public-user gaps:      N
  PRs triggered:             N
  Sprints triggered by data: N

ONE SIGNAL THIS WEEK:
  [The single most important thing real users showed us]

ONE ACTION THIS WEEK:
  [What we changed as a result — PR number or "none yet"]
```

---

## Exit Analysis

When a user leaves without completing a question, record:

```
Exit point:
  [ ] Home page (never entered Ask)
  [ ] Ask page (opened but did not submit)
  [ ] Answer page (submitted but closed before reading)
  [ ] Post-answer (read answer, left without feedback)

Likely cause:
  [ ] Didn't understand purpose (→ PR: Home copy)
  [ ] Couldn't phrase question (→ PR: placeholder)
  [ ] Answer too long / academic (→ PR: Block formatting)
  [ ] Scope mismatch (→ Scope Statement)
  [ ] Unknown
```

Target: Exit rate < 20% at Ask page (Q submitted / Q started).

---

## Signal Escalation Rules

Not all data requires action. This table prevents over-reaction:

| Signal | Threshold | Action |
|---|---|---|
| Single user confused | 1 event | Log in Daily Log. No action yet. |
| Same confusion 3+ users | 3 events | Trigger PR |
| QCR drops below 70% | 1 week sustained | Urgent PR — input friction |
| TTFA > 120s for 3+ users | 3 events | Urgent PR — navigation |
| "Confusing" feedback | 3+ events same issue | PR within 24h |
| Knowledge error reported | 1 event | Sprint gate — Evidence Review |
| Scope question (new population) | 2+ events | REPOSITORY-SCOPE update |
| New gap type | 1 event | PILOT-GAP-LOG entry |

**Rule:** One data point is a signal. Three data points from different users is a pattern. Patterns trigger action. Single points are logged and watched.

---

## Operations vs Development Boundary

```
Operations Dashboard data → triggers PR (product changes, fast)
Operations Dashboard data → triggers Sprint ONLY IF:
  - A knowledge error is confirmed
  - A new population requires new ET
  - Router failure rate exceeds 5% over 7 days
  - Pattern of scope questions suggests systematic gap
```

This boundary prevents the mistake of treating every piece of user feedback as a knowledge problem.

---

## First Real-world Milestone Targets

| Milestone | Target date | Metric |
|---|---|---|
| First 10 public users | Sprint 37 | Visitors > 10 |
| QCR ≥ 80% sustained | Sprint 37 | 1-week average |
| First returning user | Sprint 38 | 7-day return observed |
| First PR from public data | Sprint 37–38 | PR-000002 triggered |
| 50 public questions | Sprint 38–39 | Cumulative |
| Return rate ≥ 20% actual | Sprint 39 | 30-day cohort |

---

## The Only Number That Matters Right Now

```
Daily active users: 0

(Pre-launch. Target from Sprint 37: ≥ 1 per day.)
```

Everything else — TTFA, QCR, return rate — is meaningless until this number is non-zero.

**Operational focus for Sprint 37:**
Get one real user who found the Repository independently to ask one real question.
Record what they asked, how long it took, and whether they stayed.
That is the only task.

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-13 | Initial · Version 0.2 launch |
