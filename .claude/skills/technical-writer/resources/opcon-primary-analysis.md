# OpCon Primary Analysis — Page Completeness Scoring

Use this 13-section template to score any documentation page for completeness and standards compliance. Score each section 0–2:
- **2** = Fully met
- **1** = Partially met or minor issues
- **0** = Missing or major issues

Maximum score: **26 points**. Pages below 20 require revision before publishing.

---

## Section 1: Front Matter Completeness (0–2)

**Checks:**
- [ ] `title:` field present and matches H1
- [ ] `description:` present, one sentence, describes page purpose and audience value
- [ ] `tags:` present with at least three tags: Type (Conceptual/Procedural/Reference) + Role + Feature area
- [ ] No extraneous front matter fields

**Score: ___/2**

---

## Section 2: Page Type Clarity (0–2)

**Checks:**
- [ ] Page has a single, clear type (Conceptual, Procedural, or Reference)
- [ ] Content matches the declared type (no mixed Conceptual+Procedural on the same page)
- [ ] Heading structure matches the template for the declared type

**Score: ___/2**

---

## Section 3: "What is it?" Section (0–2)

**Checks:**
- [ ] Section exists (H2 `## What is it?`)
- [ ] Answers: What does this do? Why does it exist? What problem does it solve?
- [ ] 1–3 paragraphs; no bullet lists
- [ ] Does not restate the page title verbatim

**Score: ___/2**

---

## Section 4: Voice and Person (0–2)

**Checks:**
- [ ] Second person ("you") used throughout
- [ ] No first person ("we," "our," "I")
- [ ] No "users" or "the user" — rewritten as "you"
- [ ] Imperative mood for instructions; present tense for descriptions

**Score: ___/2**

---

## Section 5: Terminology Compliance (0–2)

**Checks:**
- [ ] No banned terms (click, navigate to, launch, checkbox, drop-down, LSAM, execute, task/process as job)
- [ ] Customer-facing terms used (Agent not LSAM; job not task/process)
- [ ] DNA-specific terms used correctly (APPL uppercase, cycle code lowercase, etc.)
- [ ] Product names capitalized correctly (OpCon, Fiserv DNA, Solution Manager)

**Score: ___/2**

---

## Section 6: UI Element Formatting (0–2)

**Checks:**
- [ ] Button and menu labels in **bold**
- [ ] File paths, parameter names, and values in `code`
- [ ] Field names in **bold**
- [ ] Key names in **bold**
- [ ] No quoted "button names" without bold

**Score: ___/2**

---

## Section 7: Procedure Structure (0–2)

**Applies to Procedural pages only. Score 2/2 if page is not Procedural.**

**Checks:**
- [ ] Lead-in sentence present: "To [goal], complete the following steps:"
- [ ] Steps are numbered
- [ ] One action per step
- [ ] Steps use imperative mood
- [ ] No procedures buried in conceptual paragraphs

**Score: ___/2**

---

## Section 8: Reference Structure (0–2)

**Applies to Reference pages only. Score 2/2 if page is not Reference.**

**Checks:**
- [ ] Settings/options presented in a table with columns: Setting, Required, Description (+ Default if applicable)
- [ ] Descriptions use present tense
- [ ] Required/optional clearly marked
- [ ] Examples provided for complex settings

**Score: ___/2**

---

## Section 9: Admonitions (0–2)

**Checks:**
- [ ] Admonitions used only when necessary (not decorative)
- [ ] Correct type used (NOTE for clarification, TIP for examples, WARNING for risk)
- [ ] Maximum two admonitions per page
- [ ] Admonition titles properly formatted (`:::info NOTE`, `:::tip Example`, `:::warning`)

**Score: ___/2**

---

## Section 10: Factual Accuracy (0–2)

**Checks:**
- [ ] File paths match known installation defaults
- [ ] Setting names match actual configuration file keys
- [ ] Command-line options match actual program behavior
- [ ] No fabricated information, placeholder text, or "TBD" content

**Score: ___/2**

---

## Section 11: Completeness (0–2)

**Checks:**
- [ ] All major scenarios covered for the page's scope
- [ ] No obvious gaps (e.g., Installation page missing a step)
- [ ] Prerequisites stated if non-obvious
- [ ] Examples provided for complex configurations

**Score: ___/2**

---

## Section 12: FAQs Section (0–2)

**Applies to pages covering complex features. Score 2/2 if page does not warrant FAQs.**

**Checks:**
- [ ] Section present if page covers a feature that commonly raises questions
- [ ] Questions are in natural language (not restating the heading)
- [ ] Answers are concise and actionable
- [ ] Q&A format used (`**Q: ...**` / `A: ...`)

**Score: ___/2**

---

## Section 13: Glossary Section (0–2)

**Applies to pages introducing new domain terms. Score 2/2 if page introduces no new terms.**

**Checks:**
- [ ] Section present if page introduces domain-specific terms not defined elsewhere in the docs
- [ ] Table format: Term | Definition
- [ ] Definitions use present tense and complete sentences
- [ ] No circular definitions

**Score: ___/2**

---

## Score Summary

| Section | Score |
|---|---|
| 1. Front matter completeness | /2 |
| 2. Page type clarity | /2 |
| 3. "What is it?" section | /2 |
| 4. Voice and person | /2 |
| 5. Terminology compliance | /2 |
| 6. UI element formatting | /2 |
| 7. Procedure structure | /2 |
| 8. Reference structure | /2 |
| 9. Admonitions | /2 |
| 10. Factual accuracy | /2 |
| 11. Completeness | /2 |
| 12. FAQs section | /2 |
| 13. Glossary section | /2 |
| **Total** | **/26** |

## Thresholds

| Score | Action |
|---|---|
| 24–26 | Publish-ready |
| 20–23 | Minor revisions needed before publishing |
| 14–19 | Significant revisions needed |
| 0–13 | Major rewrite required |
