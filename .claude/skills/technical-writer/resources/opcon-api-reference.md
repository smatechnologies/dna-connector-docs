# OpCon API Reference Template

The DNA Connector documentation does not expose a public REST API; however, this template applies to any command-line interface (CLI) or programmatic interface documentation in this repository.

---

## CLI Reference Template

Use this template for command-line program reference pages (e.g., SMARunDNAJob command-line options).

```markdown
---
title: <Program name> command-line options
description: "Complete reference for all command-line arguments accepted by <program name>."
tags:
  - Reference
  - <Role>
  - <Feature>
---

# <Program name> command-line options

## What is it?

<One paragraph: what the program does, when you use command-line arguments, and the general syntax.>

## Syntax

```
<ProgramName>.exe [options]
```

## Options

| Option | Required | Format | Description |
|---|---|---|---|
| `-ConfigFile` | No | `-ConfigFile=<path>` | Path to the configuration file. Defaults to `SMARunDNAJob.ini` in the program directory. |
| `-ApplName` | Either/Or | `-ApplName=<name>` | The APPL name for the DNA job. Either `-ApplName` or `-ApplNumber` is required. |

## Examples

### Basic invocation

```
SMARunDNAJob.exe -ConfigFile=C:\SMADNA\SMARunDNAJob.ini -ApplName=MYAPP -EffectiveDate=2026/01/15
```

### With cycle codes

```
SMARunDNAJob.exe -ConfigFile=C:\SMADNA\SMARunDNAJob.ini -ApplName=MYAPP -EffectiveDate=2026/01/15 -C1="EOM" -C2="REG"
```

## Exit codes

| Code | Meaning |
|---|---|
| 0 | Job completed successfully. |
| Non-zero | Job failed. Check the log file for details. |
```

---

## Configuration File Reference Template

Use this template for INI file and configuration file reference pages.

```markdown
---
title: <FileName>.ini configuration reference
description: "Complete reference for all settings in the <FileName>.ini configuration file."
tags:
  - Reference
  - System Administrator
  - Configuration
---

# <FileName>.ini configuration reference

## What is it?

<One paragraph: what this file configures and where it must be placed.>

## File location

Place this file in `<path>`.

## File format

```ini
[SectionName]
SettingName=<value>
```

## Settings

### <Section name>

| Setting | Required | Default | Description |
|---|---|---|---|
| `SettingName` | Yes/No | `<default>` | <Description. Use present tense. Note any constraints or allowed values.> |
```
