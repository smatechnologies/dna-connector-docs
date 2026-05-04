---
title: SMARunDNAJob command-line options
sidebar_label: Command-line options
description: "Complete reference for all command-line arguments accepted by SMARunDNAJob.exe, including parameter formats and date offset syntax."
tags:
  - Reference
  - Developer
  - Reference
---

# SMARunDNAJob command-line options

## What is it?

SMARunDNAJob accepts command-line arguments that override or supplement the settings in `SMARunDNAJob.ini`. Arguments that duplicate settings available in the configuration file are noted in the [SMARunDNAJob configuration settings](../configuration/sma-run-dna-job-program.md) reference. This page documents arguments that are available only on the command line.

## Options

| Option | Required | Description |
|---|---|---|
| `-ConfigFile` | No | Path and name of the configuration file to use. If not specified, SMARunDNAJob uses `SMARunDNAJob.ini` in the same directory as `SMARunDNAJob.exe`. Prefix the path with `.\` to indicate the current directory. |
| `-ApplName` | Either `-ApplName` or `-ApplNumber` | APPL name for the SQT. Used as the base name for the log file. |
| `-ApplNumber` | Either `-ApplName` or `-ApplNumber` | APPL number. When specified, SMARunDNAJob uses this number directly instead of performing a database lookup. Some APPLs have multiple APPL numbers; specifying the number on the command line ensures the correct one is used. |
| `-CreateFolderWithEDandQN` | No | Path to which the effective date and queue number are appended. SMARunDNAJob creates the resulting directory structure. The root directory must already exist. |
| `-CycleCodeNotRequired` | No | Allows a job with defined cycle codes in the database to run without any cycle codes specified on the command line. No value is required — specify `-CycleCodeNotRequired` alone. Has no effect if the job has no cycle codes. |
| `-EffectiveDate` | No | Effective date for the DNA job. Must be in `YYYY/MM/DD` format. If not specified, the value is retrieved from the `BANKOPTION` table. |
| `-EffectiveDateOffset` | No | A positive or negative integer added to the effective date. |
| `-FileLoad` | No | Indicates a FileLoad job. Format: `-FileLoad="filename"`. When specified, you must also supply the FileLoad arguments listed below. |
| `-FLBatchCount` | Required with `-FileLoad` | Name of the OpCon property to store the batch count from the file load. |
| `-FLRecordCount` | Required with `-FileLoad` | Name of the OpCon property to store the record count. |
| `-FLCredits` | Required with `-FileLoad` | Name of the OpCon property to store the credits. |
| `-FLDebits` | Required with `-FileLoad` | Name of the OpCon property to store the debits. |
| `-FLFileNum` | Required with `-FileLoad` | Name of the OpCon property to store the file number. |
| `-MaxSecondsToExecute` | No | Maximum seconds to allow SQRWT to run. SMARunDNAJob prints an error and exits if SQRWT has not finished within this time. If not specified, there is no maximum. |
| `-C1`…`-C99` | No | Cycle codes for the DNA job. Format: `-C1="EOM"`. Multiple cycle codes can be specified. |
| `-P1`…`-P99` | No | Parameter values for the DNA job. See [Parameter format](#parameter-format) below. |
| `-Property4EffectiveDate` | No | Name of the OpCon property in which to save the effective date for later reference. |
| `-Property4QueueID` | No | Name of the OpCon property in which to save the queue ID for later reference. |
| `-PVSeparator` | No | Alternate separator character to use in parameter specifications instead of the vertical pipe (`\|`). |
| `-UseBusinessDate` | No | Instructs SMARunDNAJob to look up the business date in the `BANKORGYEARMONTHDAY` table using the effective date. Requires `-EffectiveDate`. If `-EffectiveDateOffset` is also set, the offset is applied in business days. |

## Parameter format

Parameters are specified using the `-P1` through `-P99` options. The format is:

```
-P1="PARAMETER_CODE|value"
```

A vertical pipe (`|`) separates the parameter code from its value. Optional fields follow the value:

| Field position | Description | Values |
|---|---|---|
| 1 | Parameter code | Any valid DNA parameter code |
| 2 | Value | The parameter value, or `NULL` for a database null |
| 3 (optional) | Action | `B` = convert to business date; `O` = calendar offset |
| 4 (optional) | Offset | Integer from -365 to 365. Applied in business days if field 3 is `B`; in calendar days if field 3 is `O`. |
| 5 (optional) | Date format override | Overrides `DefaultParameterDateFormat` for this parameter. |

### Parameter examples

```
# Basic parameter
-P1="SD|20130327"

# Empty string value
-P1="SD|"

# NULL value
-P1="SD|NULL"

# Business date conversion
-P1="SD|20130327|B"

# Business date with offset of -1 business day
-P1="SD|20130327|B|-1"

# Calendar offset of -1 calendar day
-P1="SD|20130327|O|-1"

# Calendar offset with date format override
-P1="SD|20130327|O|-1|MM-dd-yy"
```

## FAQs

**Q: What happens if I specify both `-ApplName` and `-ApplNumber`?**

A: Both can be specified; `-ApplNumber` takes precedence for database lookups. `-ApplName` is still used for the log file name.

**Q: Can I use a property token for the effective date?**

A: Yes. OpCon resolves property tokens before passing the command line to SMARunDNAJob. For example, `[[$SCHEDULE DATE(YYYY/MM/DD)]]` passes the schedule date in the required format.
