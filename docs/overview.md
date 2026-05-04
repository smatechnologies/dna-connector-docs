---
title: Fiserv DNA Connector overview
sidebar_label: Overview
description: "An overview of the Fiserv DNA Connector for OpCon — what it is, how its components work together, and when to use each one."
tags:
  - Conceptual
  - All
  - DNA Connector
---

# Fiserv DNA Connector overview

## What is it?

The Fiserv DNA Connector extends OpCon to schedule and automate jobs on the Fiserv DNA core banking platform. Financial institutions use Fiserv DNA for core processing — attracting and retaining accountholders, reducing expenses, and improving return on investment. The connector bridges OpCon's scheduling engine with DNA's job processing capabilities.

The connector consists of three components:

- **Fiserv DNA job sub-type** — A job type in OpCon that allows you to define and configure DNA jobs within the OpCon interface.
- **SMARunDNAJob program** — A command-line program that starts and monitors a DNA job on the Fiserv DNA platform.
- **Convert DNA Template program** — A utility that imports existing Fiserv DNA templates (workflows) into OpCon as schedules and jobs.

## How it works

When OpCon runs a DNA job, it calls `SMARunDNAJob.exe` with the job's parameters. SMARunDNAJob connects to the Oracle database backing Fiserv DNA, submits the job to the DNA processing queue, and monitors its status until completion. If the job completes without errors, SMARunDNAJob exits with code `0` and OpCon marks the job finished.

The DNA Query Processor (`SMADNAQueryProcessor.exe`) handles the communication layer between OpCon's Request Router and the Fiserv DNA Oracle database, allowing the OpCon interface to query DNA job definitions in real time.

## Components

### Fiserv DNA job sub-type

Embedded within OpCon's Enterprise Manager interface, the Fiserv DNA job sub-type allows you to view, add, and edit DNA job details. The **Job Details** tab provides fields for the APPL name, APPL number, effective date, and other DNA-specific parameters. The **Job DNA Query** tab lets you query the DNA database for a specific job or an entire list of jobs, and auto-populate job details directly into the OpCon job definition.

### SMARunDNAJob program

The SMARunDNAJob program has a command-line interface that starts and monitors DNA jobs. An enhanced monitoring option provides visibility into the job's status as it runs, using Oracle session tables to track the active DNA process.

### Convert DNA Template program

A Fiserv DNA implementation generally includes existing templates (workflows) containing APPLs (jobs). Rather than manually creating DNA templates in OpCon, the Convert DNA Template program quickly loads hundreds of DNA jobs into OpCon and automatically creates required dependencies between each APPL.

## FAQs

**Q: Do I need to install all three components?**

A: Yes. All three components are required for full functionality. The job sub-type handles job definition in the OpCon interface; SMARunDNAJob handles job execution on the DNA platform; and SMAConvertDNATemplate is required if you want to import existing DNA templates rather than creating jobs manually.

**Q: What database does the DNA Connector require?**

A: The connector requires access to the Fiserv DNA Oracle database. SMARunDNAJob uses ODAC (Oracle Data Access Components) and Oracle client software to connect. See [Configure the Oracle connection](./configuration/sma-oracle-connection.md) for setup details.

**Q: Where is the connector installed?**

A: The connector files are installed on the OpCon server, typically at `C:\ProgramData\OpConxps\DNA\`. The Fiserv DNA job sub-type plug-in is installed separately on each machine running Enterprise Manager. See [Installation](./installation/overview.md) for full details.

## Glossary

| Term | Definition |
|---|---|
| APPL | A Fiserv DNA application (job), identified by an APPL name and APPL number. |
| Cycle code | A Fiserv DNA processing cycle identifier passed to a job at run time (for example, `EOM` for end-of-month processing). |
| DDI | Data Definition Interface — the OpCon service that imports XML schedule definitions created by SMAConvertDNATemplate. |
| DNA Connector | The full Fiserv DNA integration package for OpCon, including the sub-type, SMARunDNAJob, and SMAConvertDNATemplate. |
| DNA Query Processor | The `SMADNAQueryProcessor.exe` component that handles queries between OpCon and the Fiserv DNA Oracle database. |
| Effective date | The processing date passed to a DNA job, in `YYYY/MM/DD` format. |
| SQRWT | SQL Report Writer — the Fiserv DNA program that runs DNA jobs. |
| SQT | A Fiserv DNA script or template type that defines how a DNA job runs. |
