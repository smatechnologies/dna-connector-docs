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

SMARunDNAJob is a command-line program that starts and monitors jobs on the Fiserv DNA platform. When OpCon runs a DNA job, it calls `SMARunDNAJob.exe` with the job's parameters.

SMARunDNAJob does not hand the job to Fiserv DNA and wait for DNA to report back. It creates the queue rows itself and then runs SQRWT to carry the job out, tracking the Oracle session that SQRWT opens. See [How it works](#how-it-works).

Session monitoring always runs. It gives visibility into the job while it runs by tracking the active Oracle session associated with the DNA process.

SMARunDNAJob sets the following exit codes itself:

| Exit code | Meaning |
|---|---|
| `0` | Job completed successfully. |
| `1` | Job failed. Check the log file for details. |
| `5001` | File-load job completed with `TBL` (partial load) status rather than full `LOAD` status. |

These are not the only codes the program can return. When SQRWT runs, SMARunDNAJob adopts
SQRWT's own exit code as its own, and the additional error check program's exit code is
returned the same way. A value of `-532462766` has also been seen. Treat any code other
than `0` and `5001` as a failure, and read the log file to find out what failed.

:::caution

Do not test for `1` as the only failure code in an OpCon job's Failure Criteria. A DNA job
that fails inside SQRWT exits with SQRWT's code, which is not `1`.

:::

## File-load jobs

A file-load job is a special DNA job type that processes a file into the Fiserv DNA system. Use the `-FileLoad` command-line argument to run a job in file-load mode. SMARunDNAJob tracks five counters for the file-load operation — batch count, record count, credits, debits, and file number — and stores each in an OpCon property you specify on the command line.

When the file-load job completes, DNA reports one of two statuses:

- **LOAD** — The file was fully loaded. SMARunDNAJob exits with code `0`.
- **TBL** — The file was partially loaded (table load only). SMARunDNAJob exits with code `5001`.

See [Command-line options](../reference/command-line.md) for the `-FileLoad` and related arguments.

## How it works

SMARunDNAJob requires the following to run DNA jobs:

- ODAC (Oracle Data Access Components)
- Oracle client software
- SQRWT (SQL Report Writer) — the Fiserv DNA program that runs jobs

SMARunDNAJob reads its settings from `SMARunDNAJob.ini` and connects to the Fiserv DNA Oracle database using the Oracle connection file (`SMAOracleConnection.ini`). It then carries out the following steps:

1. Looks up the APPL and builds the job's parameters and cycle codes.
2. Creates the queue rows for the job in the Fiserv DNA database: a `QUEAPPL` row, a `QUE` row with status `RQST`, a `QUEAPPLPARAM` row for each parameter, a `QUEAPPLACCTCYCLE` row for each cycle code, and a `QUEAPPLHIST` row.
3. Writes the SQT response file.
4. Runs the program named by `Program2Execute` (`sqrwt.exe`) as a child process and waits for it to exit, checking the Oracle session every 10 seconds while it runs.
5. Sets `COMPLETEDATETIME` on the `QUE` row and `STOPDATETIME` on the `QUEAPPLHIST` row, then evaluates the error rows in `QUEAPPLERROR`.

:::info Note

SMARunDNAJob never reads the status of the `QUE` row it created. The outcome of the job is
determined by SQRWT's exit code, the Oracle session monitoring, and the error rows in
`QUEAPPLERROR` — not by the queue status in Fiserv DNA.

:::

For full configuration details, see [SMARunDNAJob program configuration](../configuration/sma-run-dna-job-program.md).

## FAQs

**Q: What is enhanced monitoring?**

A: Session monitoring tracks the active Oracle session associated with the running DNA job. SMARunDNAJob queries the Oracle `V$SESSION` or `GV$SESSION` table every 10 seconds while SQRWT runs. If the session cannot be found or is not active for longer than `LostSessionTimeoutSeconds`, SMARunDNAJob reports the job as failed.

Monitoring is not optional and cannot be turned off. `LostSessionTimeoutSeconds` is a required setting: if it is missing or empty, the program reports an error and exits. Setting it to `0` turns off the lost-session failure only — the session is still queried every 10 seconds.

:::caution

Set `LostSessionTimeoutSeconds` to `0` or to `10` or higher. Because the countdown advances
every second but the session is only checked every 10 seconds, a value from `1` to `9`
expires before the first check can clear it, and every job fails with
`ERROR: Session appears to have been lost`.

:::

**Q: When should I use `GV$SESSION` instead of `V$SESSION`?**

A: Use `GV$SESSION` (by setting `Cluster=true` in the configuration) when the Fiserv DNA Oracle environment uses multiple Oracle nodes (RAC). `V$SESSION` covers a single node only. Oracle recommends `GV$SESSION` for multi-node environments.
