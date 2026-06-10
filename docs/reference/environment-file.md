---
title: Environment file
sidebar_label: Environment file
description: "Reference for the SMARunDNAJob environment file format, including an example and guidance on the networknodenbr variable."
tags:
  - Reference
  - Developer
  - DNA Connector
---

# Environment file

## What is it?

The environment file specifies the environment variables that SMARunDNAJob sets up before running SQRWT. This allows you to ensure the correct Oracle paths, database names, and other environment variables are present when DNA jobs run, regardless of the machine's default environment.

Set the `EnvFile` parameter in `SMARunDNAJob.ini` (or pass `-EnvFile` on the command line) to point to this file.

## Format

Each line in the environment file has the format:

```
VARIABLE_NAME=value
```

To generate the environment from a machine that can successfully run DNA jobs via `sqrwt.exe`, open a command prompt on that machine and run:

```
set > environment.txt
```

Review the output and remove any variables that should not be set globally, then use the resulting file as your environment file.

## The networknodenbr variable

The `networknodenbr` variable identifies the network node for DNA database lookups. You can set it in one of three places (in order of precedence, highest first):

1. Command line (`-networknodenbr`)
2. `SMARunDNAJob.ini` (`networknodenbr=` in `[Processing Options]`)
3. The environment file (`networknodenbr=`)

If `networknodenbr` is not set in any location, SMARunDNAJob uses the most recently created active entry in the `NTWKNODE` table.

## Example environment file

```
ALLUSERSPROFILE=C:\ProgramData
APPDATA=C:\Users\servacct\AppData\Roaming
BACKUP=C:\BACKUP
BATFILES=C:\BATFILES
CommonProgramFiles=C:\Program Files\Common Files
CommonProgramFiles(x86)=C:\Program Files (x86)\Common Files
CommonProgramW6432=C:\Program Files\Common Files
COMPUTERNAME=DNACREATOR
ComSpec=C:\Windows\system32\cmd.exe
datapump=c:\datapump
DBAUTILS=C:\DBAUTILS
DBNAME=neondna4
EXPORTS=C:\EXPORTS
HOMEDRIVE=C:
HOMEPATH=\Users\servacct
LOCALAPPDATA=C:\Users\servacct\AppData\Local
NUMBER_OF_PROCESSORS=4
OPATCH=c:\app\oracle\product\12.1.0.2\db_1\OPatch
ORACLE_BASE=c:\app\oracle
ORACLE_BIN=c:\app\oracle\product\12.1.0.2\db_1\bin
ORACLE_HOME=c:\app\oracle\product\12.1.0.2\db_1
ORACLE_SID=neondna4
OS=Windows_NT
Path=C:\APP\ORACLE\Product\12.1.0.2\db_1\bin;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem
PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC
PROCESSOR_ARCHITECTURE=AMD64
ProgramData=C:\ProgramData
ProgramFiles=C:\Program Files
RPTS=C:\RPTS
SystemDrive=C:
SystemRoot=C:\Windows
TEMP=C:\TEMP\1
TMP=C:\TEMP\1
TNS_ADMIN=c:\tns_admin
USERNAME=servacct
USERPROFILE=C:\Users\servacct
windir=C:\Windows
```

:::info NOTE
Verify each value in the environment where DNA jobs run and modify as needed. The example above shows typical values for a Fiserv DNA environment; your paths and settings will differ.
:::
