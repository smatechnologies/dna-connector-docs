---
title: Configure the DNA Query Server
sidebar_label: SMA DNA Query Server
description: "How to create and configure SMADNAQueryProcessor.ini to connect the DNA Query Processor to OpCon and the Fiserv DNA Oracle database."
tags:
  - Procedural
  - System Administrator
  - Configuration
---

# Configure the DNA Query Server

## What is it?

The DNA Query Processor (`SMADNAQueryProcessor.exe`) handles communication between OpCon's Request Router and the Fiserv DNA Oracle database. It requires a configuration file, `SMADNAQueryProcessor.ini`, that points it to both the OpCon database connection file and the Oracle connection file you created in the previous steps.

## Prerequisites

- `SMAODBCConfiguration.dat` is in the `C:\ProgramData\OpConxps\DNA\` directory. See [Configure the OpCon database connection](./opcon-database-connection.md).
- `SMAOracleConnection.ini` is in the `C:\ProgramData\OpConxps\DNA\` directory. See [Configure the Oracle connection](./sma-oracle-connection.md).

## Create the DNA Query Processor configuration file

**1.** Go to `C:\ProgramData\OpConxps\DNA\` and create a new file named `SMADNAQueryProcessor.ini`.

**2.** Enter the following content as the starting template:

```
opcondatfile=
oracleconnfile=
```

**3.** Use the table below to fill in each setting, then save the file.

### Settings

| Setting | Required | Description |
|---|---|---|
| `opcondatfile` | Yes | The full path to `SMAODBCConfiguration.dat`. |
| `oracleconnfile` | Yes | The full path to `SMAOracleConnection.ini`. |

:::tip Example

A completed `SMADNAQueryProcessor.ini` file:
```
opcondatfile=C:\ProgramData\opconxps\DNA\SMAODBCConfiguration.dat
oracleconnfile=C:\ProgramData\opconxps\DNA\SMAOracleConnection.ini
```
:::
