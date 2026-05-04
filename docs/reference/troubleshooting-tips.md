---
title: Troubleshooting tips
sidebar_label: Troubleshooting tips
description: "Troubleshooting guidance for common Fiserv DNA Connector issues, including the DNA sub-type not appearing and connection configuration errors."
tags:
  - Reference
  - System Administrator
  - Reference
---

# Troubleshooting tips

## What is it?

This page provides solutions to common issues encountered when installing, configuring, or running the Fiserv DNA Connector.

## Connector files

**Issue: After extracting the connector files, the application does not run or returns a security error.**

Run the following check after extraction: right-select each file, select **Properties**, and verify the file is not blocked by Windows. If a file is blocked, select **Unblock** in the **Properties** dialog, then select **OK**.

## Fiserv DNA sub-type

**Issue: The Fiserv DNA sub-type does not appear in the job sub-type list in Enterprise Manager.**

Contact SMA Support and request that they run the following SQL script against the OpCon database to add the Fiserv DNA sub-type record:

```sql
DECLARE @exists INT;
SELECT @exists = COUNT(*) FROM LSAMTYPES_AUX WHERE LAVALUE = 'Fiserv DNA' AND LAFC = 116;
-- If subtype already exists, no change.
IF (@exists = 0)
BEGIN
    DECLARE @lsamtypeid INT;
    DECLARE @newlaseqno INT;
    -- Increment highest seq number for unique seq number.
    SELECT @newlaseqno = MAX(lta.LASEQNO)+1, @lsamtypeid = lt.LSAMTYPEID
    FROM LSAMTYPES lt
    INNER JOIN LSAMTYPES_AUX lta on lt.LSAMTYPEID = lta.LSAMTYPEID
    WHERE lt.LSAMTYPDESC = 'Windows' AND lta.LAFC = 116
    GROUP BY lt.LSAMTYPEID
    -- Create new Fiserv DNA record.
    INSERT INTO LSAMTYPES_AUX (LSAMTYPEID,LAFC,LASEQNO,LAVALUE)
    VALUES (@lsamtypeid,116,@newlaseqno,'Fiserv DNA');
END
```

:::info NOTE
You may also need to open Enterprise Manager as an administrator the first time after installing the sub-type plug-in for it to appear in the list.
:::

## DNA Query Processor

**Issue: The DNA Query Processor cannot connect to OpCon or Oracle.**

Verify that `SMADNAQueryProcessor.ini` has the correct paths for both `opcondatfile` and `oracleconnfile`. The paths must be absolute and the files must exist at those locations.

Example of a correct configuration:
```
opcondatfile=C:\ProgramData\opconxps\DNA\SMAODBCConfiguration.dat
oracleconnfile=C:\ProgramData\opconxps\DNA\SMAOracleConnection.ini
```

If a new Oracle connection file is needed, create `SMAOracleConnection.ini` with the following contents:
```
[General]
UserName=<encrypted username>
Password=<encrypted password>
[Oracle Connection]
HostName=dnacreator
Port=1521
ServiceName=neondna4
```

## FAQs

**Q: Where are the SMARunDNAJob log files located?**

A: Log files are written to the directory where `SMARunDNAJob.exe` is installed, using the APPL name as the base file name. The `DaysOfLogFilesToKeep` setting in `SMARunDNAJob.ini` controls how long log files are retained.

**Q: How do I determine what caused a DNA job to fail?**

A: Check the SMARunDNAJob log file for the job. If `ListErrorDetail=true` is set in the configuration, the log includes error messages from the `QUEAPPLERROR` table. Also review the SQRWT error file if `SQTErrorFile` is configured.
