---
title: Configuration overview
sidebar_label: Configuration overview
description: "An overview of the configuration files required for the Fiserv DNA Connector and the order in which to create them."
tags:
  - Conceptual
  - System Administrator
  - Configuration
---

# Configuration overview

## What is it?

After installing the Fiserv DNA Connector, you must create and configure several INI files that allow the connector components to communicate with OpCon and the Fiserv DNA Oracle database. Each file serves a specific purpose — together they form a chain: OpCon talks to the DNA Query Processor, which talks to Oracle, which runs the jobs.

:::info NOTE
Sample INI files are available in the `DNA/docs/INI_Samples` directory. Use them as a starting point for each configuration file.
:::

## Configuration files to create

| File | Where it lives | Purpose |
|---|---|---|
| `SMAODBCConfiguration.dat` | Copied from OpCon SAM folder into `DNA\` | Provides the OpCon database connection string to the DNA Connector. |
| `SMARequestRouter.ini` | Updated on the OpCon server | Registers the DNA Query Processor with OpCon's Request Router so OpCon knows how to route DNA job requests. |
| `SMAOracleConnection.ini` | Created in `DNA\` | Provides the Fiserv DNA Oracle database host, port, service name, and encrypted credentials. |
| `SMADNAQueryProcessor.ini` | Created in `DNA\` | Points the DNA Query Processor to both the OpCon connection file and the Oracle connection file. |
| `SMARunDNAJob.ini` | Created where `SMARunDNAJob.exe` is installed | Controls all aspects of DNA job execution — Oracle connection, job monitoring, output handling, and logging. |

## Configuration steps

Complete the steps in order. Each page links to the next.

1. [Configure the OpCon database connection](./opcon-database-connection.md)
2. [Configure the SMA Oracle connection](./sma-oracle-connection.md)
3. [Configure the DNA Query Server](./sma-dna-query-server.md)
4. [Configure SMARunDNAJob](./sma-run-dna-job-program.md)
