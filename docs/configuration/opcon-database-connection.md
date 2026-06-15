---
title: Configure the OpCon database connection
sidebar_label: OpCon database connection
description: "How to configure the OpCon database connection for the Fiserv DNA Connector by copying the SMAODBCConfiguration.dat file and updating the SMA Request Router."
tags:
  - Procedural
  - System Administrator
  - Configuration
---

# Configure the OpCon database connection

## What is it?

OpCon uses a single database to manage all scheduling data. The Fiserv DNA Connector must connect to that same database. This page covers three tasks:

1. Copy the OpCon database connection file into the DNA folder.
2. Add a DNA Query Processor entry to the SMA Request Router INI file.
3. Insert the required database records for the DNA Query Processor.

Complete all three tasks before moving to the next configuration step.

## Copy the OpCon database connection file

To copy the OpCon database connection file to the DNA folder, complete the following steps:

1. Go to `<media>:\ProgramData\OpConxps\SAM\`.
2. Locate `SMAODBCConfiguration.dat`.
3. Copy the file.
4. Go to `<media>:\ProgramData\OpConxps\DNA\`.
5. Paste the file in this directory.

## Update the SMA Request Router INI

The SMA Request Router needs a new entry so it knows how to route DNA job requests to the DNA Query Processor (`SMADNAQueryProcessor.exe`).

To update the SMA Request Router INI file, complete the following steps:

1. Open **Services** on the OpCon server.
2. Stop the **SMA Service Manager** service.

   :::info NOTE
   Stopping the service is required before editing the INI file to prevent the Request Router from reading a partially updated configuration.
   :::

3. Go to `<media>:\ProgramData\OpConxps\SAM\`.
4. Open `SMARequestRouter.ini` in a text editor as an administrator.
5. Add the following section at the end of the file:
   ```
   [RequestHandlerNN]
   RequestHandler=
   RequestExecutable=
   RequestExecutionPath=
   RequestArguments=
   ```
6. Replace each blank value using the descriptions below, then save the file.

| Setting | Description |
|---|---|
| `RequestHandler` | The name of the request handler. Enter `DNAQUERYPROCESSOR`. |
| `RequestExecutable` | The full path to `SMADNAQueryProcessor.exe`. |
| `RequestExecutionPath` | The DNA installation directory (the working directory for the request handler). |
| `RequestArguments` | Arguments for the request handler executable's command line. |

7. Return to **Services** and start the **SMA Service Manager** service.

## Update the OpCon database

This step inserts the records that tell OpCon's database about the DNA Query Processor. The script removes any existing records first to avoid duplicates, then inserts fresh ones.

To add the required records, complete the following steps:

1. Open SQL Server Management Studio.
2. Sign in with a user account that has permission to modify the OpConxps database.
3. Open a new query window and run the following statement:

   ```sql
   use opconxps
   DELETE FROM dbo.REQHANDLER WHERE REQHNDLR = 'DNAQUERYPROCESSOR'
   INSERT INTO dbo.REQHANDLER (REQHNDLR,RHFC,RHSEQNO,RHVALUE) VALUES ('DNAQUERYPROCESSOR',0,1,'Fiserv DNA Query Processor Request Handler')
   INSERT INTO dbo.REQHANDLER (REQHNDLR,RHFC,RHSEQNO,RHVALUE) VALUES ('DNAQUERYPROCESSOR',3,1,'1440')
   INSERT INTO dbo.REQHANDLER (REQHNDLR,RHFC,RHSEQNO,RHVALUE) VALUES ('DNAQUERYPROCESSOR',5,1,'LIST')
   INSERT INTO dbo.REQHANDLER (REQHNDLR,RHFC,RHSEQNO,RHVALUE) VALUES ('DNAQUERYPROCESSOR',5,2,'APPL')
   DELETE FROM dbo.REQSOURCE WHERE REQSRCDESC = 'DNAQUERYPROCESSOR'
   INSERT INTO dbo.REQSOURCE (REQSRCDESC,RSFC,RSSEQNO,RSVALUE) VALUES ('DNAQUERYPROCESSOR',1,1,30)
   ```

When all three steps are complete, proceed to [Configure the Oracle connection](./sma-oracle-connection.md).
