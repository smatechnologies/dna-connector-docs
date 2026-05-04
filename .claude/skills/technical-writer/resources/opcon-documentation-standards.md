# OpCon Documentation Standards

## Voice and Tone

| Rule | Correct | Incorrect |
|---|---|---|
| Second person | "You can configure…" | "Users can configure…" |
| No first person | "The connector connects to…" | "We connect to…" |
| Present tense (descriptions) | "The program runs the job." | "The program will run the job." |
| Imperative (steps) | "Select **Edit Configuration**." | "You should select Edit Configuration." |
| Active voice | "The connector sends the request." | "The request is sent by the connector." |

## Action Verbs for UI Instructions

| Approved verb | Used for |
|---|---|
| Select | Buttons, menu items, options, checkboxes, radio buttons |
| Enter | Text fields, numeric fields |
| Type | Inline code, command-line values |
| Choose | Dropdown lists when selecting one of several options |
| Open | Files, dialogs, applications |
| Close | Files, dialogs, applications |
| Save | Files, settings |
| Clear | Checkboxes, text fields (removing a value) |
| Expand | Collapsible sections, tree nodes |
| Collapse | Collapsible sections, tree nodes |

## Banned Terms

| Banned | Use instead |
|---|---|
| click | select |
| right-click | right-select |
| navigate to | go to / open |
| launch | open / start |
| checkbox | selection |
| drop-down / dropdown | list |
| check (a box) | select |
| uncheck | clear |
| LSAM | Agent |
| execute / executing / executed | run / running / ran |
| task (as job synonym) | job |
| process (as job synonym) | job |
| client (as UI synonym) | application / interface |
| hit (a button) | select |
| grab | select / retrieve |

## UI Element Formatting

| Element | Formatting | Example |
|---|---|---|
| Button labels | **Bold** | Select **Save**. |
| Menu items | **Bold** | Select **File > Open**. |
| Field names | **Bold** | In the **Host Name** field, enter the server name. |
| Tab names | **Bold** | Select the **Configuration** tab. |
| File and path names | `code` | Navigate to `C:\ProgramData\OpConxps\DNA\`. |
| Settings and parameter names | `code` | Set `opcondatfile` to the full path. |
| Values | `code` | Enter `true` or `false`. |
| Key names | **Bold** | Press **Enter**. |

## Front Matter Requirements

Every page in `docs/` must include:

```yaml
---
title: <Short, noun-phrase title — no verbs>
description: "<One sentence describing what this page covers and why it matters.>"
tags:
  - <Type: Conceptual | Procedural | Reference>
  - <Role: System Administrator | OpCon User | Developer | All>
  - <Feature: DNA Connector | Installation | Configuration | Reference>
---
```

## Heading Rules

- **H1** (`#`): Page title only — must match the `title:` field in front matter
- **H2** (`##`): Major sections (What is it?, Prerequisites, Procedure, Configuration, Reference, FAQs, Glossary)
- **H3** (`###`): Subsections within an H2
- **H4** (`####`): Sub-subsections, rarely used
- Do not skip heading levels
- Use sentence case for all headings (capitalize only the first word and proper nouns)

## Procedure Formatting

Required lead-in sentence:
```
To [accomplish goal], complete the following steps:
```

Required format:
```markdown
To configure the Oracle connection, complete the following steps:

1. Open `C:\ProgramData\OpConxps\DNA\`.
2. Create a new file named `SMAOracleConnection.ini`.
3. Enter the following content in the file:
   ```
   [General]
   UserName=
   Password=
   ```
4. Save the file.
```

Rules:
- One action per step
- If a step has a sub-procedure, use a nested numbered list
- Bold UI element names within steps
- Use `code` for file paths, parameter names, and values

## Admonition Guidelines

Use sparingly — maximum two per page.

| Type | When to use |
|---|---|
| `:::info NOTE` | Clarification that prevents a common mistake |
| `:::tip Example` | Concrete example of a configuration or value |
| `:::warning` | Action that could cause data loss or system issues |
| `:::danger` | Action that is irreversible or destructive |

## Pre-flight Checklist

Before marking any documentation task complete, verify:

- [ ] Front matter has `title:`, `description:`, and `tags:`
- [ ] H1 matches the `title:` field
- [ ] No banned terms (click, navigate to, launch, checkbox, drop-down, LSAM, execute, task/process as job)
- [ ] Steps use imperative mood and lead-in sentence
- [ ] UI elements are bold; paths and values are in `code`
- [ ] Present tense throughout (no "will" for descriptions)
- [ ] Second person ("you") — no "users" or "we"
- [ ] One action per step in numbered lists
- [ ] Admonitions used sparingly and correctly typed
- [ ] "What is it?" section present on Conceptual pages
- [ ] FAQs present if page covers a complex feature
- [ ] Glossary present if page introduces domain-specific terms
