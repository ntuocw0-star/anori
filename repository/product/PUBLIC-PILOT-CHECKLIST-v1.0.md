# PUBLIC-PILOT-CHECKLIST-v1.0.md

**Document Type:** Pre-launch Checklist (run before every public pilot)
**Version:** 1.0
**Created:** 2026-07-13 · Sprint 35
**Usage:** Complete every item before opening to users who find the Repository independently.

---

## How to use this checklist

Run through every section before each public pilot milestone.
Mark each item ✅ (pass), ❌ (fail — must fix before launch), or △ (acceptable with note).
A single ❌ blocks launch. △ items require a note and a Sprint-target for resolution.

---

## Section 1: Landing (Home Page)

```
□ One-sentence identity visible above the fold
□ Four user-type entry points clearly labelled
□ No jargon in first three sentences
□ 30-second test passed (see PRODUCT-MVP-v1.0.md)
□ Mobile-readable (no horizontal scroll, no overlapping elements)
□ No broken links on the home page
□ Load time < 3 seconds
```

---

## Section 2: Question Entry (Ask Page)

```
□ Question box is the most prominent element on the page
□ Placeholder text is a real example question (not "Type here...")
□ [Ask] button is clearly labelled and accessible
□ Answer appears within 5 seconds of submission
□ Answer is formatted in four blocks (What we know / Confidence / Practice / Boundary+SDM)
□ Emotionally-Attuned Mode triggers correctly for distress-signal questions
□ Triage Protocol triggers correctly for multi-factor + prioritisation questions
□ Evidence Level badge appears with every answer
□ Population/scope note appears when applicable (see REPOSITORY-SCOPE.md)
□ "Was this helpful?" prompt appears after every answer
```

---

## Section 3: Router

```
□ Correct ET identified for all 12 Benchmark questions (re-run before each launch)
□ Navigation Accuracy ≥ 100% (Sprint 29 baseline)
□ No answer claims Moderate evidence for a Limited ET
□ No answer claims causation from observational evidence
□ Knowledge Boundary present in every answer
□ SDM invitation present in Block 4 of every answer
□ Overclaim rate = 0% (verified by spot-check of 10 random answers)
```

---

## Section 4: Answer Quality

```
□ Clinical Answer Template v2.1 is the active template
□ Block 0 (standard) activates for moderate distress signals
□ Block 0+ (extended) activates for high-distress signals
□ Block 5 (Communication) activates for parent + relational context
□ Block 3+ (Newly Diagnosed) activates for new-diagnosis questions
□ All four Triage Priority rules are correctly applied when triggered
□ Clinical Navigation redirects are correct for Limited-evidence ETs
□ Scope boundary disclosed for all GAP-012, 014, 015, 016 scenarios
```

---

## Section 5: Feedback

```
□ Quick rating (Helpful / Confusing / Missing) visible after every answer
□ Open text field available and functional
□ Feedback routes to PILOT-CASE-LOG.md (or staging equivalent)
□ Privacy note visible before feedback form
□ No PII (personal health information) prompt in feedback fields
□ Feedback submission confirmed to user ("Thank you" message)
```

---

## Section 6: Privacy and Safety

```
□ No user data stored without explicit consent
□ Crisis / safety note present on About or Scope page:
  "If you or someone in your family is in crisis, please contact
   a healthcare provider or emergency services immediately."
□ Repository does not provide medical advice — stated clearly on Evidence page
□ Feedback form does not request identifying health information
□ Data handling statement present (even if minimal at this stage)
```

---

## Section 7: About and Scope

```
□ REPOSITORY-SCOPE.md content accessible from About page
□ Population coverage table visible (which groups are covered / not covered)
□ "What this cannot answer" section present
□ When to see a professional — present
□ Evidence Level definitions accessible from Evidence page
□ Current version / Sprint number visible in footer
```

---

## Section 8: Analytics (baseline)

```
□ Session count tracking active (anonymous)
□ Question submission count tracking active
□ Answer mode distribution tracking active (Standard / Attuned / Triage)
□ Feedback submission count tracking active
□ Error / no-answer rate tracking active
□ PILOT-INDEX.md updated with public pilot start date
```

---

## Pre-launch Sign-off

| Reviewer | Date | All ✅? | Notes |
|---|---|---|---|
| | | | |

**Launch blocked if:** Any item marked ❌.
**Launch allowed with:** All items ✅ or △ with documented note and Sprint-target.

---

## Post-launch (first 48 hours)

```
□ First 10 public questions reviewed manually
□ Any new Gap type logged in PILOT-GAP-LOG.md
□ Any answer quality regression logged in PILOT-REVISION-LOG.md
□ PILOT-INDEX.md updated with first public case count
□ No crisis / safety issue has occurred without appropriate response
```

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-13 | Initial checklist · Sprint 35 |
| v1.1 | TBD | After first 30-second and 2-minute test results |
