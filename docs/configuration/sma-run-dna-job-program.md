---
title: SMARunDNAJob configuration settings
sidebar_label: SMARunDNAJob program
description: "Complete reference for all settings in the SMARunDNAJob.ini configuration file, organized by section."
tags:
  - Reference
  - System Administrator
  - Configuration
---

# SMARunDNAJob configuration settings

## What is it?

`SMARunDNAJob.ini` is the primary configuration file for the SMARunDNAJob program. It controls how SMARunDNAJob connects to Oracle, monitors jobs, handles output files, and logs activity. Create this file in `C:\ProgramData\OpConxps\DNA\` before running DNA jobs.

Settings marked with **†** can be overridden by a matching command-line argument. See [Command-line options](../reference/command-line.md).

## Create the configuration file

To create the SMARunDNAJob configuration file, complete the following steps:

1. Go to `C:\ProgramData\OpConxps\DNA\` (or the directory where `SMARunDNAJob.exe` is installed).
2. Create a new file named `SMARunDNAJob.ini`.
3. Enter the following template and populate the values for your environment:

```ini
# ======================================================================
# SMARunDNAJob configuration file
# ======================================================================

[General]
DaysOfLogFilesToKeep=
Program2Execute=
SQTArgumentTemplate=
EnvFile=
ErrorWordsFile=

[Oracle Parameters]
OracleFile=

[Event Settings]
PathToMsgInDirectory=
OpConUser=
OpConPassword=
JobStartEvent=$

[Enhanced Monitoring]
LostSessionTimeoutSeconds=
MachineName=
FailInactiveStatus=
AdditionalErrorCheck=
AdditionalErrorCheckArgs=

[SQRT Parameters]
SQTBaseDirectory=
SQTBaseDirectoryAlternate1=
SQTUser=
SQTPassword=
SQTDatabase=n
SQTOptions=
SQTErrorFile=
SQTReportPath=
SQTResponseFilePath=

[Processing Options]
networknodenbr=
ListErrorDetail=
MSQUERRThreshold=
OrganizationNumber=
DefaultParameterDateFormat=

[DriveMappings]
#Drive1=

[Output File Handling]
OutputReportDirectory=
OpticalReportDirectory=
PartnerReportDirectory=
CopyReportToOptical=
CopyReportToPartner=
CopyReportToOutput=
DistributionTicketDirectory=
DistributionJobScheduleName=
DistributionJobJobName=
DistributionJobFrequency=
```

## General

The General settings control core program behavior — log retention, the SQRWT executable path, and references to supporting files.

| Setting | Required | Description |
|---|---|---|
| `DaysOfLogFilesToKeep` | No | Number of days to retain log files. Log files older than this value are purged automatically. |
| `Program2Execute` | Yes | Full path to the SQRWT program (`sqrwt.exe` or `sqrt.exe`). |
| `SQTArgumentTemplate` | No | Template for building the SQRWT command-line argument string. Supported tokens are replaced at run time: `[[SQTPath]]`, `[[SQTUser]]`, `[[SQTPassword]]`, `[[SQTDatabase]]`, `[[SQTOptions]]`, `[[SQTErrorFile]]`, `[[SQTResponseFile]]`. |
| `EnvFile` **†** | No | Full path to the environment file that sets up the execution environment for SQRWT. See [Environment file](../reference/environment-file.md). |
| `ErrorWordsFile` **†** | No | Full path to `SMAErrorWordsFile.txt`. Rows in the DNA error table matching these expressions cause the job to fail. See [SMAErrorWordsFile](../reference/sma-error-words-file.md). |

## Oracle Parameters

The Oracle Parameters section points SMARunDNAJob to the Oracle connection file configured in the previous step.

| Setting | Required | Description |
|---|---|---|
| `OracleFile` | Yes | Full path to `SMAOracleConnection.ini`. This file replaces the legacy inline Oracle connection parameters. |

## Event Settings

The Event Settings control OpCon events that SMARunDNAJob can fire when a job starts.

| Setting | Required | Description |
|---|---|---|
| `PathToMsgInDirectory` | No | Directory where OpCon MSGIN event files are placed. Use a UNC path if there is no Windows Agent installed on the machine running SMARunDNAJob. |
| `OpConUser` | No | A valid OpCon user ID with permissions to create events. Required if `JobStartEvent` is set. |
| `OpConPassword` | No | Password for the `OpConUser`. Can be the name of an encrypted password file created with SMACreatePasswordFile. |
| `JobStartEvent` | No | An OpCon event generated when the job starts. Supported tokens: `[[SCHEDDATE]]`, `[[SCHEDNAME]]`, `[[JOBNAME]]`, `[[DNAQueueID]]`, `[[DNAEffectiveDate]]`. |

## Enhanced Monitoring

The Enhanced Monitoring settings control how SMARunDNAJob tracks the Oracle session for a running job and determines whether the job has stalled or failed.

| Setting | Required | Description |
|---|---|---|
| `LostSessionTimeoutSeconds` **†** | No | Timeout (in seconds) for the Oracle session monitoring thread. If no active session is found within this time, the session is considered lost and the job fails. |
| `MachineName` **†** | No | The machine name to match in the Oracle `V$SESSION` table (`TERMINAL` field). If not set, SMARunDNAJob uses the `COMPUTERNAME` environment variable. |
| `FailInactiveStatus` **†** | No | Set to `true` to treat an Oracle session status of `INACTIVE` as a failure. Set to `false` to allow inactive status. |
| `AdditionalErrorCheck` | No | Full path to a post-processing script or application. If SQRWT exits with code `0`, SMARunDNAJob runs this script and uses its exit code as the final exit code. |
| `AdditionalErrorCheckArgs` | No | Arguments to pass to the application specified in `AdditionalErrorCheck`. |
| `Cluster` | No | Set to `true` to poll `GV$SESSION` instead of `V$SESSION`. Use this setting when the Fiserv DNA Oracle environment uses multiple nodes (RAC). Any value other than `true` is treated as `false`. |

## SQRT Parameters

The SQRT Parameters settings control how SMARunDNAJob invokes the SQRWT program and where it looks for SQT files.

| Setting | Required | Description |
|---|---|---|
| `SQTBaseDirectory` **†** | No | Base directory for SQT files. When set, the SQT path on the command line is treated as a file name only. |
| `SQTBaseDirectoryAlternate1`…`SQTBaseDirectoryAlternate99` | No | Alternate directories searched if the SQT file is not found in `SQTBaseDirectory`. Directories are searched in order until a match is found. |
| `SQTUser` **†** | No | Oracle user for running the SQT. |
| `SQTPassword` **†** | No | Password for `SQTUser`, or the name of an encrypted password file. |
| `SQTDatabase` **†** | No | Oracle service name for the database connection used to run the SQT. |
| `SQTOverrideDatabase` **†** | No | Overrides `SQTDatabase` on the SQRWT command line only. Use when the database value required for monitoring differs from the value required for the SQRWT command line. |
| `SQTOptions` **†** | No | Miscellaneous options to pass to SQRWT. |
| `SQTErrorFile` **†** | No | File path for SQRWT error messages. Set to `GENERATE` (without quotes) to have SMARunDNAJob create a file name based on the OpCon job name. |
| `SQTReportPath` **†** | No | Output directory path passed to SQRWT. |
| `SQTResponseFilePath` **†** | No | Directory for the temporary response file written during job processing. |

## Processing Options

The Processing Options settings control job-level behavior including error reporting thresholds and date formatting.

| Setting | Required | Description |
|---|---|---|
| `networknodenbr` **†** | No | Network node number. Can also be set in the environment file or on the command line. If not set in any location, the most recently created active entry in the `NTWKNODE` table is used. |
| `ListErrorDetail` **†** | No | Set to `true` to display error messages from the `QUEAPPLERROR` table. Set to `false` to suppress error text (useful when error messages contain sensitive data). |
| `MSQUERRThreshold` **†** | No | If set to a non-zero value, the job is marked failed only when the error row count in `QUEAPPLERROR` exceeds this threshold. |
| `OrganizationNumber` **†** | No | Organization number used for lookups in the `BANKORGYEARMONTHDAY` table. |
| `DefaultParameterDateFormat` **†** | No | Default date format used when computing date offsets for parameter values. Can be overridden per parameter on the command line. |

## DriveMappings

Use DriveMappings when SMARunDNAJob needs to connect to network shares as mapped drives. Define one mapping per numbered setting (Drive1, Drive2, and so on).

| Setting | Required | Description |
|---|---|---|
| `Drive1`…`Drive99` | No | Drive mapping definition. Each value contains four fields separated by a pipe (`\|`): local drive letter, share name, user name, encrypted user password. For example: `Z:\|\\server\share\|domain\user\|encryptedpassword`. |

## Output File Handling

The Output File Handling settings control whether and where SMARunDNAJob copies the output file after a job completes. Enable each copy target individually (`CopyReportToOutput`, `CopyReportToOptical`, `CopyReportToPartner`), then set the corresponding destination path.

| Setting | Required | Description |
|---|---|---|
| `OutputReportDirectory` | No | If `CopyReportToOutput` is `true`, the output file is copied to `OutputReportDirectory\<effective date>\<queue number>`. |
| `CopyReportToOutput` **†** | No | Set to `true` to copy the output file to `OutputReportDirectory`. |
| `OpticalReportDirectory` | No | If `CopyReportToOptical` is `true`, the output file is copied to this directory. |
| `PartnerReportDirectory` | No | If `CopyReportToPartner` is `true`, the output file is copied to `PartnerReportDirectory\<effective date>\<queue number>`. Separate multiple destinations with a semicolon. |
| `CopyReportToOptical` **†** | No | Set to `true` to copy the output file to `OpticalReportDirectory`. |
| `CopyReportToPartner` **†** | No | Set to `true` to copy the output file to `PartnerReportDirectory\<effective date>\<queue number>`. |
| `DistributionTicketDirectory` | No | Directory for Distribution Ticket files created when `CopyReportToOutput` is `true` and either `CopyReportToOptical` or `CopyReportToPartner` is also `true`. |
| `DistributionJobScheduleName` | No | Schedule name for the `$JOB:ADD` event generated when distribution copying is active. |
| `DistributionJobJobName` | No | Job name for the `$JOB:ADD` event generated when distribution copying is active. |
| `DistributionJobFrequency` | No | Frequency for the `$JOB:ADD` event generated when distribution copying is active. |
