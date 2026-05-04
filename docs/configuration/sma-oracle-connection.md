---
title: Configure the Oracle connection
sidebar_label: SMA Oracle connection
description: "How to create and configure SMAOracleConnection.ini so that SMARunDNAJob can connect to the Fiserv DNA Oracle database."
tags:
  - Procedural
  - System Administrator
  - Configuration
---

# Configure the Oracle connection

## What is it?

SMARunDNAJob connects to the Fiserv DNA Oracle database using a dedicated connection file, `SMAOracleConnection.ini`. This file holds the Oracle server details and encrypted credentials.

## Prerequisites

- The Fiserv DNA Connector files are installed in `C:\ProgramData\OpConxps\DNA\`.
- You have the Oracle database host name, port, and service name from your Fiserv DNA administrator.
- You have the Oracle user name and password that SMARunDNAJob will use. Encrypt both values using the **Password Encryption Tool** in Enterprise Manager before entering them.

## Create the Oracle connection file

**1.** Go to `C:\ProgramData\OpConxps\DNA\` and create a new file named `SMAOracleConnection.ini`.

**2.** Enter the following content as the starting template:

```
[General]
UserName=
Password=

[Oracle Connection]
HostName=
Port=
ServiceName=
```

**3.** Use the tables below to fill in each setting, then save the file.

### General settings

| Setting | Required | Description |
|---|---|---|
| `UserName` | Yes | The Oracle user name for connecting to the Fiserv DNA database. Must be encrypted using the Password Encryption Tool in Enterprise Manager. |
| `Password` | Yes | The password for the Oracle user. Must be encrypted using the Password Encryption Tool in Enterprise Manager. |

### Oracle Connection settings

| Setting | Required | Description |
|---|---|---|
| `HostName` | Yes | The host name of the server running the Fiserv DNA Oracle database. |
| `Port` | Yes | The port used to connect to the Oracle database. |
| `ServiceName` | Yes | The Oracle service name for the Fiserv DNA database. |

:::info NOTE
If the Oracle service name is not known, run the following SQL query against the Fiserv DNA Oracle database to find it:

```sql
SELECT * FROM v$parameter WHERE name LIKE '%service_name%';
```
:::

:::tip Example

A completed `SMAOracleConnection.ini` file:
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

## FAQs

**Q: Where do I find the Password Encryption Tool?**

A: The Password Encryption Tool is available in Enterprise Manager under the **Tools** menu.

**Q: What happens if I enter a plain-text password instead of an encrypted one?**

A: SMARunDNAJob will fail to connect. All passwords in the `SMAOracleConnection.ini` file must be encrypted using the Password Encryption Tool.
