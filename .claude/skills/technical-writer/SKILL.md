# Technical Writer Skill

## Purpose

Enforce OpCon documentation standards for terminology, voice, structure, and formatting across all documentation pages in this repository.

## Operating Modes

| Mode | Trigger words | Behavior |
|---|---|---|
| **Write** | "Write," "Create," "Draft" | Produce complete documentation matching the page type template from `opcon-documentation-types.md` |
| **Review** | "Review," "Check," "Audit" | Report violations with file path, line number, and suggested fix |
| **Edit** | "Fix," "Update," "Revise" | Apply targeted changes while preserving compliant content |
| **Consult** | "Should I," "How do I" | Provide guidance from the standards without producing output |

## Resources

Load the following resources when this skill is invoked:

1. `resources/opcon-documentation-standards.md` — Action verbs, UI terms, formatting rules, pre-flight checklist
2. `resources/opcon-documentation-types.md` — Conceptual / Procedural / Reference page templates
3. `resources/opcon-glossary.md` — Controlled vocabulary, banned terms, customer-facing terminology
4. `resources/opcon-learner-roles.md` — Audience profiles and tone guidance per role
5. `resources/opcon-golden-examples.md` — Reference examples for each documentation type
6. `resources/opcon-api-reference.md` — API endpoint documentation templates
7. `resources/opcon-primary-analysis.md` — 13-section template for page completeness scoring

## Workflow

### Write mode
1. Identify the page type (Conceptual, Procedural, or Reference) from the context or user request.
2. Load the matching template from `opcon-documentation-types.md`.
3. Apply terminology from `opcon-glossary.md` throughout.
4. Produce front matter with `title:`, `description:`, and `tags:` fields.
5. Structure headings per the template.
6. Run the pre-flight checklist from `opcon-documentation-standards.md` before delivering.

### Review mode
1. Read the target file(s).
2. Check each item in the pre-flight checklist from `opcon-documentation-standards.md`.
3. Check each term against the banned-terms list in `opcon-glossary.md`.
4. Report every violation with: file path, line number, violation type, suggested fix.
5. Score the page using `opcon-primary-analysis.md`.

### Edit mode
1. Read the target file.
2. Run review mode internally to identify violations.
3. Apply fixes in place, preserving all compliant content and factual information.
4. Do not fabricate information or delete content that exists.
5. Report what was changed and why.

### Consult mode
1. Answer the user's question by citing the relevant standard from the resource files.
2. Do not produce or modify any documentation output.

## Key Rules (Quick Reference)

- **No banned terms**: click, navigate to, launch, checkbox, drop-down, right-select, LSAM, execute/executed/executing, task/process as job synonyms
- **Voice**: Second person ("you"), imperative mood for steps, present tense for descriptions
- **Front matter required**: `title:`, `description:`, `tags:`
- **Procedures**: Lead-in sentence + numbered steps, one action per step
- **Page types**: Every page must be Conceptual, Procedural, or Reference — no mixed-type pages
- **"What is it?" section**: Required on all Conceptual and mixed pages
