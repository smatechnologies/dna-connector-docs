# OpCon Golden Examples

Reference these examples when writing, reviewing, or editing documentation pages. Each example shows the correct pattern for its page type.

---

## Conceptual Page — Gold Standard

```markdown
---
title: Fiserv DNA Connector
description: "An overview of the Fiserv DNA Connector for OpCon, explaining its components and how they work together to automate DNA job processing."
tags:
  - Conceptual
  - All
  - DNA Connector
---

# Fiserv DNA Connector

## What is it?

The Fiserv DNA Connector extends OpCon to schedule and automate jobs on the Fiserv DNA core banking platform. Financial institutions use Fiserv DNA for core processing — attracting and retaining accountholders, reducing expenses, and boosting ROI. The connector bridges OpCon's scheduling engine with DNA's job processing capabilities.

The connector consists of three components:

- **Fiserv DNA job sub-type** — a job type in OpCon that allows you to define and configure DNA jobs within the OpCon interface.
- **SMARunDNAJob program** — a command-line program that starts and monitors a DNA job on the Fiserv DNA platform.
- **Convert DNA Template program** — a utility that imports existing Fiserv DNA templates (workflows) into OpCon as schedules and jobs.

## How it works

When OpCon runs a DNA job, it calls `SMARunDNAJob.exe` with the job's parameters. SMARunDNAJob connects to the Oracle database backing Fiserv DNA, submits the job to the DNA processing queue, and monitors its status until completion. If the job completes without errors, SMARunDNAJob exits with code 0 and OpCon marks the job finished.

The DNA Query Processor (`SMADNAQueryProcessor.exe`) handles the communication layer between OpCon's Request Router and the Fiserv DNA Oracle database, allowing the OpCon interface to query DNA job definitions in real time.

## Key concepts

- **APPL**: A Fiserv DNA application (job). Each APPL has an APPL name and APPL number.
- **Cycle code**: A processing cycle identifier passed to a DNA job at run time (for example, `EOM` for end-of-month processing).
- **Effective date**: The date passed to a DNA job for processing, in `YYYY/MM/DD` format.
- **SQT**: A Fiserv DNA script or template type that defines how a DNA job runs.

## FAQs

**Q: Do I need to install all three components?**

A: Yes. All three components are required for full functionality. The job sub-type handles job definition in the OpCon interface; SMARunDNAJob handles job execution; and SMAConvertDNATemplate is required if you want to import existing DNA templates rather than creating jobs manually.

## Glossary

| Term | Definition |
|---|---|
| APPL | A Fiserv DNA application (job), identified by an APPL name and APPL number. |
| Cycle code | A Fiserv DNA processing cycle identifier passed to a job at run time. |
| DDI | Data Definition Interface — the OpCon service that imports XML schedule definitions. |
| Effective date | The processing date for a DNA job, in YYYY/MM/DD format. |
| SQRWT | SQL Report Writer — the Fiserv DNA program that runs DNA jobs. |
```

---

## Procedural Page — Gold Standard

```markdown
---
title: Configure the Oracle connection
description: "How to create and configure the SMAOracleConnection.ini file so that SMARunDNAJob can connect to the Fiserv DNA Oracle database."
tags:
  - Procedural
  - System Administrator
  - Configuration
---

# Configure the Oracle connection

## What is it?

SMARunDNAJob connects to the Fiserv DNA Oracle database using a dedicated connection file (`SMAOracleConnection.ini`). This procedure walks you through creating and populating that file with the correct connection details.

## Prerequisites

- The Fiserv DNA Connector files are installed in `C:\ProgramData\OpConxps\DNA\`.
- You have the Oracle database host name, port, and service name from your Fiserv DNA administrator.
- You have the Oracle user name and password that SMARunDNAJob will use. Encrypt these values using the **Password Encryption Tool** in Enterprise Manager before entering them.

## Configure the Oracle connection

To configure the Oracle connection for SMARunDNAJob, complete the following steps:

1. Open `C:\ProgramData\OpConxps\DNA\`.
2. Create a new file named `SMAOracleConnection.ini`.
3. Enter the following content in the file:
   ```
   [General]
   UserName=
   Password=

   [Oracle Connection]
   HostName=
   Port=
   ServiceName=
   ```
4. In the **General** section, enter the encrypted Oracle user name and password.
5. In the **Oracle Connection** section, enter the host name, port, and service name for the Fiserv DNA Oracle database.
6. Save the file.

:::tip Example

A completed `SMAOracleConnection.ini` file:
```
[General]
UserName=5cc26c261b056b30513f2a2a8bd9322eee9d98c80be73810
Password=5cc26c261b056b30513f2a2a8bd9322eee9d98c80be73810

[Oracle Connection]
HostName=dnacreator
Port=1521
ServiceName=neondna4
```
:::

## FAQs

**Q: How do I find the service name for my Oracle database?**

A: Run the following SQL query against the Fiserv DNA Oracle database:
```sql
SELECT * FROM v$parameter WHERE name LIKE '%service_name%';
```
The result shows the service name configured for the Oracle instance.
```

---

## Reference Page — Gold Standard

```markdown
---
title: SMARunDNAJob configuration settings
description: "Complete reference for all settings in the SMARunDNAJob.ini configuration file, organized by section."
tags:
  - Reference
  - System Administrator
  - Configuration
---

# SMARunDNAJob configuration settings

## What is it?

`SMARunDNAJob.ini` is the primary configuration file for the SMARunDNAJob program. It controls how SMARunDNAJob connects to Oracle, monitors jobs, handles output files, and logs activity. Create this file in `C:\ProgramData\OpConxps\DNA\` before running DNA jobs.

Settings marked with **†** can be overridden by a matching command-line argument.

## General

| Setting | Required | Description |
|---|---|---|
| `DaysOfLogFilesToKeep` | No | Number of days to retain log files. Log files older than this value are purged automatically. |
| `Program2Execute` | Yes | Full path to the `sqrwt.exe` or `sqrt.exe` program. |
| `SQTArgumentTemplate` | No | Template for building the SQRWT argument string. Use property tokens (for example, `[[SCHEDDATE]]`) for dynamic values. |
| `EnvFile` **†** | No | Full path to the environment file that sets up the execution environment for SQRWT. |
| `ErrorWordsFile` **†** | No | Full path to the error words file (`SMAErrorWordsFile.txt`). See [SMAErrorWordsFile](./sma-error-words-file.md). |
```

---

## Anti-patterns to Avoid

### Click language
```
❌ Click the "Edit Configuration" button.
✅ Select **Edit Configuration**.
```

### First person
```
❌ We recommend encrypting the password.
✅ Encrypt the password before entering it in the configuration file.
```

### Future tense for descriptions
```
❌ The connector will connect to the Oracle database.
✅ The connector connects to the Oracle database.
```

### Missing lead-in sentence for procedures
```
❌ 1. Open Services on the OpCon server.
   2. Stop SMA Service Manager.

✅ To stop the SMA Service Manager, complete the following steps:
   1. Open Services on the OpCon server.
   2. Stop **SMA Service Manager**.
```

### Multiple actions in one step
```
❌ 3. Open the SMARequestRouter.ini file in Notepad as an administrator and add the following section at the end.

✅ 3. Open `SMARequestRouter.ini` in a text editor as an administrator.
   4. Add the following section at the end of the file:
```
