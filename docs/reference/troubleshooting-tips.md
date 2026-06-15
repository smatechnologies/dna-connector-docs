---
title: Troubleshooting tips
sidebar_label: Troubleshooting tips
description: "Troubleshooting guidance for common Fiserv DNA Connector issues, including the DNA sub-type not appearing and connection configuration errors."
tags:
  - Reference
  - System Administrator
  - DNA Connector
---

# Troubleshooting tips

## What is it?

This page provides solutions to common issues encountered when installing, configuring, or running the Fiserv DNA Connector.

## Connector files

**Issue: After extracting the connector files, the application does not run or returns a security error.**

To unblock the connector files, complete the following steps:

1. Right-select the file and select **Properties**.
2. In the **Properties** dialog, verify whether the file is blocked by Windows.
3. If the file is blocked, select **Unblock**, then select **OK**.
4. Repeat for each file in the extracted connector package.

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

## SMARunDNAJob

**Issue: A DNA job exits with code 5001.**

Exit code 5001 indicates a file-load job completed with `TBL` (partial load) status rather than full `LOAD` status. This is not a connector error — it means the DNA job ran but the file was not fully loaded into the DNA system. Review the DNA job output and SQRWT error file to determine whether the partial load is acceptable for your workflow. If `LOAD` status is required, investigate the source file or DNA processing configuration.

**Issue: SMARunDNAJob exits with code 1 immediately after starting.**

Verify the following:

1. Confirm `Program2Execute` in `SMARunDNAJob.ini` points to the correct path for `sqrwt.exe` or `sqrt.exe`.
2. Confirm the APPL name or APPL number specified on the command line exists in the Fiserv DNA database.
3. Check the SMARunDNAJob log file (in the same directory as `SMARunDNAJob.exe`, named after the APPL) for the specific error message.
4. Confirm ODAC is installed and the ODAC version matches the Oracle client version on the machine.

**Issue: Oracle session monitoring reports the job as lost before the job finishes.**

If SMARunDNAJob fails jobs that are still running in DNA, the `LostSessionTimeoutSeconds` value may be too short, or the `MachineName` setting may not match the `TERMINAL` field in the Oracle `V$SESSION` table.

To diagnose:

1. Check the `MachineName` setting in `SMARunDNAJob.ini`. If not set, SMARunDNAJob uses the `COMPUTERNAME` environment variable. Confirm this value matches the `TERMINAL` column in `V$SESSION` for your Oracle environment.
2. Increase `LostSessionTimeoutSeconds` to allow more time before declaring a session lost.
3. If the Oracle environment uses multiple nodes (RAC), set `Cluster=true` so SMARunDNAJob queries `GV$SESSION` instead of `V$SESSION`.

## FAQs

**Q: Where are the SMARunDNAJob log files located?**

A: Log files are written to the directory where `SMARunDNAJob.exe` is installed, using the APPL name as the base file name. The `DaysOfLogFilesToKeep` setting in `SMARunDNAJob.ini` controls how long log files are retained.

**Q: How do I determine what caused a DNA job to fail?**

A: Check the SMARunDNAJob log file for the job. If `ListErrorDetail=true` is set in the configuration, the log includes error messages from the `QUEAPPLERROR` table. Also review the SQRWT error file if `SQTErrorFile` is configured.
