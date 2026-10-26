---
title: SMARunDNAJob command-line options
sidebar_label: Command-line options
description: "Complete reference for all command-line arguments accepted by SMARunDNAJob.exe, including parameter formats and date offset syntax."
tags:
  - Reference
  - Developer
  - DNA Connector
---

# SMARunDNAJob command-line options

## What is it?

SMARunDNAJob accepts command-line arguments that override or supplement the settings in `SMARunDNAJob.ini`. Arguments that duplicate settings available in the configuration file are noted in the [SMARunDNAJob configuration settings](../configuration/sma-run-dna-job-program.md) reference. This page documents arguments that are available only on the command line.

## Options

| Option | Required | Description |
|---|---|---|
| `-ConfigFile` | No | Path and name of the configuration file to use. If not specified, SMARunDNAJob uses `SMARunDNAJob.ini` in the same directory as `SMARunDNAJob.exe`. Prefix the path with `.\` to indicate the current directory. |
| `-ApplName` | Yes | APPL name for the SQT. Used as the base name for the log file. Always required, even when `-ApplNumber` is given: without it SMARunDNAJob exits with `ERROR: The SQT file to execute was not specfied.` The Fiserv DNA job sub-type always writes this argument, so only hand-written command lines are affected. |
| `-ApplNumber` | No | APPL number. SMARunDNAJob looks the APPL up by this number in the `APPL` table and the job fails if no row is found. The SQT file name comes from the `APPLNAME` of that row, replacing the value of `-ApplName`; the log file is still named after `-ApplName`. Some APPLs have multiple APPL numbers; specifying the number ensures the correct one is used. |
| `-CreateFolderWithEDandQN` | No | Path to which the effective date and queue number are appended. SMARunDNAJob creates the resulting directory structure. The root directory must already exist. |
| `-CycleCodeNotRequired` | No | Allows a job with defined cycle codes in the database to run without any cycle codes specified on the command line. No value is required — specify `-CycleCodeNotRequired` alone. Has no effect if the job has no cycle codes. |
| `-EffectiveDate` | No | Effective date for the DNA job. Specify it in `YYYY/MM/DD` format. If not specified, SMARunDNAJob retrieves the effective date from the `PDAT` field in the `BANKOPTION` table. See the note below on how the value is validated. |
| `-EffectiveDateOffset` | No | A positive or negative integer added to the effective date. |
| `-FileLoad` | No | Indicates a FileLoad job. Format: `-FileLoad="filename"`. When specified, you must also supply the FileLoad arguments listed below. |
| `-FLBatchCount` | Required with `-FileLoad` | Name of the OpCon property to store the batch count from the file load. |
| `-FLRecordCount` | Required with `-FileLoad` | Name of the OpCon property to store the record count. |
| `-FLCredits` | Required with `-FileLoad` | Name of the OpCon property to store the credits. |
| `-FLDebits` | Required with `-FileLoad` | Name of the OpCon property to store the debits. |
| `-FLFileNum` | Required with `-FileLoad` | Name of the OpCon property to store the file number. |
| `-MaxSecondsToExecute` | No | Maximum seconds to allow SQRWT to run. If SQRWT has not finished within this time, SMARunDNAJob stops SQRWT and ends the job with `ERROR: Exceeded maximum run time.` The program does not shut down cleanly in this case (CON-2502), so treat the log file as the record of what happened and confirm in Fiserv DNA whether the job left work behind. If not specified, there is no maximum. |
| `-C1`…`-C99` | No | Cycle codes for the DNA job. Format: `-C1="EOM"`. Multiple cycle codes can be specified. |
| `-P1`…`-P99` | No | Parameter values for the DNA job. See [Parameter format](#parameter-format) below. |
| `-Property4EffectiveDate` | No | Name of the OpCon property in which to save the effective date for later reference. |
| `-Property4QueueID` | No | Name of the OpCon property in which to save the queue ID for later reference. |
| `-PVSeparator` | No | Alternate separator character to use in parameter specifications instead of the vertical pipe (`\|`). |
| `-UseBusinessDate` | No | Instructs SMARunDNAJob to look up the business date in the `BANKORGYEARMONTHDAY` table using the effective date. Requires `-EffectiveDate`. If `-EffectiveDateOffset` is also set, the offset is applied in business days. |

:::info Note

SMARunDNAJob checks only that `-EffectiveDate` is exactly 10 characters long. It does not
check that the value is a date or that it uses a particular layout, so a wrong but
10-character value is accepted here and fails later, in Fiserv DNA or in SQRWT. The error
text for a value of the wrong length names a different layout than this page
(`ERROR: Invalid EffectiveDate, expecting yyyy-MM-dd`); that inconsistency is CON-2509.

:::

## Exit codes

SMARunDNAJob sets the following exit codes itself:

| Code | Meaning |
|---|---|
| `0` | Job completed successfully. |
| `1` | Job failed. Check the SMARunDNAJob log file for details. |
| `5001` | File-load job completed with `TBL` (partial load) status. The file was processed but did not reach full `LOAD` status. Review the DNA job output to determine whether the partial load is acceptable. |

These are not the only codes SMARunDNAJob can return. When SQRWT runs, its exit code
becomes SMARunDNAJob's exit code, and the exit code of the program named by
`AdditionalErrorCheckPath` is returned the same way. A value of `-532462766` has also been
seen (CON-2513).

:::caution

Treat any code other than `0` and `5001` as a failure rather than testing for `1`. A DNA
job that fails inside SQRWT exits with SQRWT's code, not with `1`.

:::

## Test and debug options

These options are intended for testing and troubleshooting only. Do not use them in production job definitions.

| Option | Required | Description |
|---|---|---|
| `-TestMode` | No | Skips running SQRWT, and nothing else. SMARunDNAJob still creates the queue rows in the Fiserv DNA database, updates the `QUE` and `QUEAPPLHIST` rows, and sends MSGIN events and OpCon properties. This is not a dry run: do not use it against a production Fiserv DNA database expecting no changes. |
| `-TestApplNumber` | No | Generates a synthetic APPL number from the current timestamp instead of performing a database lookup. |
| `-TestQueueNumber` | No | Generates a synthetic queue number from the current timestamp instead of retrieving one from the DNA database. |
| `-TestSimulateOracleMonitor` | No | Instructs the Oracle session monitor to always report the job as running. Useful for testing monitoring logic without an active Oracle session. |
| `-Debug` | No | Enables verbose debug output. |

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

# Business date with offset of -1 business day
-P1="SD|20130327|B|-1"

# Calendar offset of -1 calendar day
-P1="SD|20130327|O|-1"

# Calendar offset with date format override
-P1="SD|20130327|O|-1|MM-dd-yy"
```

:::caution

Always supply the offset in field 4 when field 3 is `B` or `O`. An action with no offset,
such as `-P1="SD|20130327|B"`, ends the program rather than being treated as an offset of
zero (CON-2508).

:::

## FAQs

**Q: What happens if I specify both `-ApplName` and `-ApplNumber`?**

A: `-ApplName` is required either way. When `-ApplNumber` is also given, the APPL is looked up by number and the SQT file name comes from that row, replacing the `-ApplName` value. The log file is still named after `-ApplName`.

**Q: Can I use a property token for the effective date?**

A: Yes. OpCon resolves property tokens before passing the command line to SMARunDNAJob. For example, `[[$SCHEDULE DATE(YYYY/MM/DD)]]` passes the schedule date in the required format.
