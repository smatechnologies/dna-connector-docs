---
sidebar_label: 'OpCon Configuration Changes'
---

# Overview

OpCon uses a single database to manage all data for the system. You must configure the connector to connect to that database. Then ensure that SMA Request Router knows what the compenent the data is for.

## OpCon Database Connection

The following steps will walk you through copying the SMAODBCConfiguration.dat file into the DNA folder on the OpCon server.

1. Navigate to ```<media>:\ProgramData\OpConxps\SAM\```
2. Locate the ```SMAODBCCOnfiguration.dat``` file.
3. Right-click on the file and choose Copy.
4. Navigate to ```<media>:\ProgramData\OpConxps\DNA\```
5. Paste the file in this directory.

## SMA Request Router Changes

For SMA Request Router to process the DNA requests correctly, it needs a new configuration in the INI for the SMADNAQueryProcessor.exe and the DNAQUERYPROCESSOR records must exist within the REQHANDLER and REQSOURCE tables.

### Update the SMA Request Router INI
1. Open Services on the OpCon server
2. Stop the SMA Service Manager service.
3. Navigate the the ```<media>:\ProgramData\OpConxps\SAM\```
4. Open the SMARequestRouter.ini in a Notepad as an administrator.
5. Add the following at the end of the file supplying the correct value for each parameter:
```
[RequestHandlerNN]
RequestHandler=
RequestExecutable=
RequestExecutionPath=
RequestArguments=
```

| Setting | Dynamic | Description |
| -------------- | --------------- | --------------- |
| RequestHandler | No | The name of the Request Handler. For DNA it will be DNAQUERYPROCESSOR. |
| RequestExecutable | No | The path and name of the SMASchedMan Request Handler executable. For DNA it will be the path to the SMADNAQueryProcessor.exe |
| RequestExecutionPath | No | The working directory for the Request Handler. For DNA it will be the path the installation directory called DNA. |
| RequestArguments | No | Defines the arguments in the Request Handler executable's command line. |

### Update the OpCon Database

1. Launch SQL Server Management Studio. 
2. Log in with a user that has enough priviledges to make modifications to the OpConxps Database.
3. Open a New Query and execute the following statement.
```
use opconxps
DELETE FROM dbo.REQHANDLER WHERE REQHNDLR = 'DNAQUERYPROCESSOR'
INSERT INTO dbo.REQHANDLER (REQHNDLR,RHFC,RHSEQNO,RHVALUE) VALUES ('DNAQUERYPROCESSOR',0,1,'Fiserv DNA Query Processor Request Handler')
INSERT INTO dbo.REQHANDLER (REQHNDLR,RHFC,RHSEQNO,RHVALUE) VALUES ('DNAQUERYPROCESSOR',3,1,'1440')
INSERT INTO dbo.REQHANDLER (REQHNDLR,RHFC,RHSEQNO,RHVALUE) VALUES ('DNAQUERYPROCESSOR',5,1,'LIST')
INSERT INTO dbo.REQHANDLER (REQHNDLR,RHFC,RHSEQNO,RHVALUE) VALUES ('DNAQUERYPROCESSOR',5,2,'APPL')  
DELETE FROM dbo.REQSOURCE WHERE REQSRCDESC = 'DNAQUERYPROCESSOR'
INSERT INTO dbo.REQSOURCE (REQSRCDESC,RSFC,RSSEQNO,RSVALUE) VALUES ('DNAQUERYPROCESSOR',1,1,30)
```
