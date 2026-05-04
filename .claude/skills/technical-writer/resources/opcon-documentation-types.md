# OpCon Documentation Types

Every page must be one of three types: **Conceptual**, **Procedural**, or **Reference**.

---

## Conceptual Pages

### Purpose
Explain what something is, why it exists, and how it fits into the larger system. Do not mix procedures into conceptual pages.

### Template

```markdown
---
title: <Feature or component name>
description: "<What this feature is and why it matters in one sentence.>"
tags:
  - Conceptual
  - <Role>
  - <Feature>
---

# <Feature or component name>

## What is it?

<One to three paragraphs explaining what this feature or component is. Answer: What does it do? Why does it exist? What problem does it solve?>

## How it works

<Optional. Explain the internal behavior at a level appropriate for the audience. Use diagrams or images if helpful.>

## Key concepts

<Optional. Bullet list or brief sections covering the essential concepts a reader needs before using the feature.>

## FAQs

<Optional. Include if the feature commonly raises questions. Use Q&A format.>

**Q: <Question>**

A: <Answer>

## Glossary

<Optional. Include if the page introduces domain-specific terms not defined elsewhere.>

| Term | Definition |
|---|---|
| <Term> | <Definition> |
```

---

## Procedural Pages

### Purpose
Walk the reader through completing a task. Every step must have exactly one action.

### Template

```markdown
---
title: <Verb phrase describing the task, e.g. "Configure the Oracle connection">
description: "<What the reader will accomplish and why.>"
tags:
  - Procedural
  - <Role>
  - <Feature>
---

# <Verb phrase — same as title>

## What is it?

<One paragraph: what this procedure accomplishes and when to use it.>

## Prerequisites

<Optional. List what must be true or in place before starting.>

- <Prerequisite 1>
- <Prerequisite 2>

## <Procedure name>

To <accomplish goal>, complete the following steps:

1. <Step 1 — one action only.>
2. <Step 2 — one action only.>
3. <Step 3.>

## FAQs

<Optional. Common questions about performing this task.>

**Q: <Question>**

A: <Answer>
```

---

## Reference Pages

### Purpose
Provide lookup information: settings, parameters, options, error codes, command-line arguments. No procedures.

### Template

```markdown
---
title: <Topic — e.g. "SMARunDNAJob configuration settings">
description: "<What reference material this page contains and who uses it.>"
tags:
  - Reference
  - <Role>
  - <Feature>
---

# <Topic>

## What is it?

<One paragraph describing what this reference covers and when to consult it.>

## <Section name>

<Table or definition list of settings, parameters, or options.>

| Setting | Required | Default | Description |
|---|---|---|---|
| <Name> | Yes/No | <value> | <Description> |

## FAQs

<Optional.>

## Glossary

<Optional.>
```

---

## Page Type Selection Guide

| If the page answers… | Use this type |
|---|---|
| "What is X?" or "How does X work?" | Conceptual |
| "How do I do X?" | Procedural |
| "What are the options/settings/values for X?" | Reference |
| Installation or upgrade steps | Procedural |
| Configuration file settings | Reference |
| Command-line arguments | Reference |
| Troubleshooting | Reference (with optional Procedural sub-sections) |

## Required Sections by Type

| Section | Conceptual | Procedural | Reference |
|---|---|---|---|
| What is it? | Required | Required | Required |
| Prerequisites | Optional | Optional | — |
| Procedure | — | Required | — |
| Settings/Parameters table | — | — | Required |
| FAQs | If complex | If complex | If complex |
| Glossary | If new terms | — | If new terms |
