---
title: SMARunDNAJob program
sidebar_label: SMARunDNAJob program
description: "An overview of the SMARunDNAJob program — what it is, how it starts and monitors Fiserv DNA jobs, and when to use it."
tags:
  - Conceptual
  - OpCon User
  - DNA Connector
---

# SMARunDNAJob program

## What is it?

SMARunDNAJob is a command-line program that starts and monitors jobs on the Fiserv DNA platform. When OpCon runs a DNA job, it calls `SMARunDNAJob.exe` with the job's parameters. SMARunDNAJob submits the job to the Fiserv DNA processing queue and monitors its status until completion.

An enhanced monitoring option provides visibility into the job's status as it runs by tracking the active Oracle session associated with the DNA process.

If the job completes without errors, SMARunDNAJob exits with code `0` and OpCon marks the job finished. If the job encounters errors, SMARunDNAJob exits with a non-zero code and OpCon marks the job failed.

## How it works

SMARunDNAJob requires the following to run DNA jobs:

- ODAC (Oracle Data Access Components)
- Oracle client software
- SQRWT (SQL Report Writer) — the Fiserv DNA program that runs jobs

SMARunDNAJob reads its settings from `SMARunDNAJob.ini` and connects to the Fiserv DNA Oracle database using the Oracle connection file (`SMAOracleConnection.ini`). It then passes the job parameters to SQRWT and monitors the Oracle session until the job completes or times out.

For full configuration details, see [SMARunDNAJob program configuration](../configuration/sma-run-dna-job-program.md).

## FAQs

**Q: What is enhanced monitoring?**

A: Enhanced monitoring tracks the active Oracle session associated with the running DNA job. SMARunDNAJob polls the Oracle `V$SESSION` or `GV$SESSION` table at regular intervals. If the session disappears before the job completes, SMARunDNAJob reports the job as failed. Enable enhanced monitoring by setting the `LostSessionTimeoutSeconds` and `MachineName` parameters in `SMARunDNAJob.ini`.

**Q: When should I use `GV$SESSION` instead of `V$SESSION`?**

A: Use `GV$SESSION` (by setting `Cluster=true` in the configuration) when the Fiserv DNA Oracle environment uses multiple Oracle nodes (RAC). `V$SESSION` covers a single node only. Oracle recommends `GV$SESSION` for multi-node environments.
