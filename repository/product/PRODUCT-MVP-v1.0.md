# PRODUCT-MVP-v1.0.md

**Document Type:** Product Information Architecture
**Version:** 1.0
**Created:** 2026-07-13 · Sprint 35
**Purpose:** Define the six-page MVP structure for the first public-facing product.
             This is IA, not visual design. Content and navigation, not aesthetics.

---

## Design Principle

A first-time user should know within 30 seconds what this is for.
A first-time user should be able to get an answer within 2 minutes.
No login. No jargon on entry. No wall of text before the question box.

---

## Six Pages

### 1. Home

**Purpose:** Orientation and entry routing.
**30-second test:** Can a stranger understand what this is and who it's for?

```
Header (one line):
  Evidence-guided answers for families and professionals
  supporting children with disabilities.

Who is this for? (four tiles):
  [Parent / Caregiver]     [OT / PT / ST]
  [Teacher / School Staff] [Researcher / Planner]

Each tile → opens Ask page with role context pre-set.

Under the fold:
  "What kind of questions can I ask?"
  → 6 example questions (one per concept, plain language)

  "How are answers generated?"
  → One sentence: "Answers are grounded in peer-reviewed research,
    with evidence strength clearly stated."
  → Link to Evidence page.
```

---

### 2. Ask

**Purpose:** Question entry → Router → Answer.
**2-minute test:** Can a user get a useful answer without guidance?

```
Question box (large, centre):
  Placeholder: "Type your question here — e.g. 'Does parenting stress
  affect how much my child participates in activities?'"

[Ask] button

↓ Answer appears below (four-block structure):

  What we know          [Block 1]
  How confident         [Block 2]
  What this means       [Block 3]
  What we don't know    [Block 4]

  Emotionally-Attuned mode: activates automatically when distress signals detected.
  Triage mode: activates when multiple factors + prioritisation request detected.

Under the answer:
  [Was this helpful?]  [Confusing?]  [Need more?]
  → Routes to Feedback page with answer context preserved.

Side panel (desktop) / Expandable (mobile):
  Related topics: [ET labels as plain-language links]
  Evidence Level: [badge: Full / Moderate / Limited]
  Population note: [if scope boundary applies]
```

---

### 3. FAQ

**Purpose:** Browse without typing. Answers the 20 most common questions directly.

```
Organised by user type:

For Parents (8 questions):
  Does parenting stress affect my child's participation?
  Does family support make a difference to participation?
  What is Family Quality of Life?
  [...]

For Clinicians (7 questions):
  Which family factor has the strongest evidence for intervention?
  What does 'Moderate evidence' mean in practice?
  When should I use the Triage Protocol?
  [...]

For Teachers / Schools (3 questions):
  How does the home environment affect school participation?
  Can I share this with parents?
  [...]

For Researchers (2 questions):
  What evidence base does this Repository draw on?
  How is Evidence Level determined?
```

Each FAQ entry = a pre-run answer from the Router, formatted with all four blocks. Not static text — live answers that update as Repository updates.

---

### 4. Evidence

**Purpose:** Build trust by explaining how answers are generated.
**Not a jargon page.** Plain language explaining the governance layer.

```
Section 1: How are answers grounded in research?
  Brief explanation of EA / ET structure (without using those terms).
  "Every answer traces back to peer-reviewed studies. We tell you
  how many studies support each finding and how strong the evidence is."

Section 2: What do the evidence levels mean?
  Full Evidence  →  "Consistent findings across many studies and settings."
  Moderate       →  "Meaningful evidence, but we can't prove causation."
  Limited        →  "Preliminary signal. More research needed."
  Field-level Gap → "The research community hasn't studied this yet."

Section 3: What are Knowledge Boundaries?
  "Every answer tells you what the evidence cannot conclude.
  We never claim more than the research supports."

Section 4: How do we handle emotional questions?
  Brief note on Emotionally-Attuned mode.
  "When a question carries distress signals, the answer acknowledges
  that first — before presenting evidence."

Section 5: Can I cite this?
  Explanation of how to trace any answer to its source studies.
  Link to Evidence Topic index (ET list in plain language).
```

---

### 5. About

**Purpose:** Credibility and scope in minimal text.

```
One-line identity:
  "Evidence-guided Clinical Navigation Repository
   for families of children and youth with disabilities."

Three paragraphs max:
  What it does.
  What it doesn't do (link to REPOSITORY-SCOPE).
  Who built it and on what evidence base.

Population coverage table:
  [Abbreviated version of REPOSITORY-SCOPE population table]

Contact / Feedback link.
```

---

### 6. Feedback

**Purpose:** Close the Learning Loop from public users.

```
Three input types:

① Quick rating (appears after every answer):
   [Helpful] [Confusing] [Missing something]

② Open text (optional, after quick rating):
   "What was missing or unclear?"
   "What question did you really want answered?"

③ Case report (for clinicians / researchers):
   Structured form: Question + User type + Answer received + What happened next.
   This feeds PILOT-CASE-LOG.md automatically.

Privacy note (prominent):
   "Feedback is anonymous unless you choose to share contact details."
   "No personal health information should be submitted here."
```

---

## Navigation Structure

```
Home
 ├── Ask (primary CTA on every page)
 ├── FAQ
 ├── Evidence
 ├── About
 │    └── Scope (REPOSITORY-SCOPE.md content)
 └── Feedback

Global header (all pages):
  Logo + tagline | Ask | FAQ | Evidence | About | [Language toggle — future]

Global footer:
  Scope | Privacy | Feedback | Version (current Sprint)
```

---

## 30-Second Test Protocol

Present the Home page to someone with no prior context.
Ask after 30 seconds:

```
① What is this website for?
② Who would use it?
③ What would you do next?
```

Pass criteria:
- ① Mentions children with disabilities + evidence / research
- ② Names at least one of: parent / OT / teacher
- ③ Points to question box or FAQ

If any criterion fails → Home page copy needs revision before public launch.

---

## 2-Minute Test Protocol

Same person, now using Ask page.
Give one question from PILOT-QUESTION-SET-v1.0.md (Category C or F).
Measure time to first answer received.
Ask after:

```
① Did you understand the answer?
② Do you know what you would do next?
③ Was anything confusing?
```

Pass criteria:
- ① Y
- ② Y or Partial
- ③ Actionable feedback (not "no, it was fine") — means answer is too smooth

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-13 | Initial IA · Sprint 35 |
| v1.1 | TBD | After 30-second and 2-minute tests |
