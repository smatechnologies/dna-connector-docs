---
sidebar_label: 'Troubleshooting Tips'
---

# Troubleshooting Tips

* After extracting the files, verify the files are “unblocked” (right-click file, select properties).

* Sub-type: If the “Fiserv DNA” sub-type is not visible, contact SMA Support and request the following:

```
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

* EM plug-in: Update SMADNAQueryProcessor.ini with location of SMAODBCConfiguration.dat and oracleconnfile.
    * opcondatfile=C:\DNA_Connector_21_2_0\SMARunDNAJob\SMAODBCConfiguration.dat
    * *oracleconnfile=C:\DNA_Connector_21_2_0\SMARunDNAJob\SMAOracleConnection.ini
        * If new oracle connection file needs to be created, it looks like this:
```
[General]
UserName=5cc26c261b056b30513f2a2a8bd9322eee9d98c80be73810ee9d98c80be73810
Password=5cc26c261b056b30513f2a2a8bd9322eee9d98c80be73810ee9d98c80be73810
[Oracle Connection]
HostName=dnacreator
Port=1521
ServiceName=neondna4
```
