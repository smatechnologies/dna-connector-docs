---
sidebar_label: 'SMA DNA Query Server'
---

# Overview

This section will walk you through creating and updating the 

## SMA Oracle Connection

Create new file “SMADNAQueryProcessor.ini” in the folder “C:\ProgramData\OpConxps\DNA\” with the following contents:

```
opcondatfile=
oracleconnfile=
```

You will need to update each setting with the appropriate values.

### Settings

| Setting | Required | Description |
| -------------- | --------------- | --------------- |
| opcondatafile | Yes | The full path to the SMAODBCConfiguration.dat file. |
| oracleconnfile | Yes | The full that to the SMAOracleConnection.ini file. |


:::tip Example

SMADNAQueryProcessor.ini contents:
```
opcondatfile=C:\Programdata\opconxps\DNA\SMAODBCConfiguration.dat
oracleconnfile= C:\Programdata\opconxps\DNA\SMAOracleConnection.ini
```
:::
