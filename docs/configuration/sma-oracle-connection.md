---
sidebar_label: 'SMA Oracle Connection'
---

# Overview

This section will walk you through creating and updating the 

## SMA Oracle Connection

Create new file “SMAOracleConnection.ini” in the folder “C:\ProgramData\OpConxps\DNA\” with the following contents:

```
[General]
UserName=
Password=

[Oracle Connection]
HostName=
Port=
ServiceName=
```

You will need to update each setting with the appropriate values.

### General Settings

| Setting | Required | Description |
| -------------- | --------------- | --------------- |
| UserName | Yes | The name of the user that will connect to the Oracle database. This value needs to be encrypted using the Password Encryption Tool in Enterprise Manager.|
| Password | Yes | The password of that user. This value needs to be encrypted using the Password Encryption Tool in Enterprise Manager.|

### Oracle Connection Settings

| Setting | Required | Description |
| -------------- | --------------- | --------------- |
| HostName | Yes | The name of the server that hosts the Oracel databse. |
| Port | Yes | The port used to connect to the Oracle database. |
| ServiceName | Yes | The is the name of the service that the Oracle database runs on. |


:::info NOTE
If servicename is difficult to detect, run the following statement to determine the servicename:

```select * from v$parameter where name like '%service_name%'```
:::

:::tip Example

SMAOracleConnection.ini contents:
```
[General]
UserName=5cc26c261b056b30513f2a2a8bd9322eee9d98c80be73810ee9d98c80be73810
Password=5cc26c261b056b30513f2a2a8bd9322eee9d98c80be73810ee9d98c80be73810

[Oracle Connection]
HostName=dnacreator
Port=1521
ServiceName=neondna4
```
:::