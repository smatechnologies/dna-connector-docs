---
sidebar_label: 'SMARunDNAJob Program'
---

# SMARunJob Program

## Overview

The SMARunDNAJob.exe program starts and monitors a job that has been defined as a DNA job (SQT). If the job is initiated and finishes with no exceptions, the program exits with a value of 0. The SMARunDNAJob requires ODAC, Oracle client software and SQRWT. 

## Configure the ODAC

*	ODAC (Oracle Data Access Components)
	- Verify ODAC version matches client version.
	- Set TEMP and TMP environment variables to ```C:\Temp```
	- After ODAC files are downloaded
		- Open command prompt
		- Install by typing ```Install.bat all C:\Oracle myhome true```
*	Oracle client software (administrator) “winx64_12201_client.zip”

## SMARunDNAJob INI

Create new file “SMARunDNAJob.ini” in the folder “C:\ProgramData\OpConxps\DNA\” with the following contents:

```
# ======================================================================
# This file contains the system parameters to drive the 
# SMARunDNAJob application.
# ======================================================================

[General]
DaysOfLogFilesToKeep=
Program2Execute=
SQTArgumentTemplate=
EnvFile=
ErrorWordsFile=

[Oracle Parameters]
OracleFile=

[Event Settings]
PathToMsgInDirectory=
OpConUser=
OpConPassword=
JobStartEvent=$

[Enhanced Monitoring]
LostSessionTimeoutSeconds=
MachineName=
FailInactiveStatus=
AdditionalErrorCheck=
AdditionalErrorCheckArgs=

[SQRT Parameters]
SQTBaseDirectory=
SQTBaseDirectoryAlternate1=
SQTUser=
SQTPassword=
SQTDatabase=n
SQTOptions=
SQTErrorFile=
SQTReportPath=
SQTResponseFilePath=

[Processing Options]
networknodenbr=
ListErrorDetail=
MSQUERRThreshold=
OrganizationNumber=
DefaultParameterDateFormat=

[DriveMappings]
#Drive1=
#Drive1=

[Output File Handling]
OutputReportDirectory=
OpticalReportDirectory=
PartnerReportDirectory=
CopyReportToOptical=
CopyReportToPartner=
CopyReportToOutput=
DistributionTicketDirectory=
DistributionJobScheduleName=
DistributionJobJobName=
DistributionJobFrequency=
```

## SMARunDNAJob Configuration Settings

### General	
* DaysOfLogFilesToKeep
   * This is used for automated log file clean-up. Log files that are older than this number of days will be purged.
* Program2Execute	
    * This is the full path of the SQRT program or the SQRWT program.
* SQTArgumentTemplate
    * This is a template to indicate argument placement for SQRT. The properties (enclosed in double brackets) will be replaced by either the value shown in the configuration file or found on the command line.
* † EnvFile
    * This file contains the environmental settings that should be used to build the desired environment for SQRT. The format should be environment variable=value. See Appendix B for an example Environment file.
    * On a computer that can successfully run DNA job via sqrwt.exe in the command-line, generate the environment.txt file by entering the following into a command prompt: set environment.txt
* † ErrorWordsFile	
    * This is the full path to the file containing the directives that are evaluated against rows in the error table (queapplerror). The error words consist of Regular expressions separated by the vertical pipe. (Note that there must be an ending vertical pipe on each line of error words.) Regardless of the value of MSQUERRThreshold, any matches to an error word will cause the job to be considered failed, UNLESS the row first matches one of the [Ignore Masks]. Example error words file located in Appendix F. Name the file “SMAErrorWordsFile.txt”. The [Ignore Masks] section contains regular expressions that, if matched, causes the row to be discarded immediately. (It is not even included in the row count that is compared to MSQUERRThreshold.)

:::info NOTE
† This configuration file parameter can be overridden from the command line.
:::

### Oracle Parameters
* OracleFile
    * This is the path to the Oracle connection file generated with SMAOracleConnection utility. The file replaces the discontinued Oracle parameters below.

### Event Settings
* PathToMsgInDirectory
    * This is the directory that MSGIN events files should be dropped into. This can be a UNC designation if there is no Microsoft LSAM on the machine this application is installed on. 
* OpConUser
    * This is a valid OpCon/xps user id. This user must have the appropriate permissions to create the desired event.
    
* OpConPassword
    * This is the password to the OpConUser specified above. Optionally, this can be the name of an encrypted password file. See SMACreatePasswordFile.
* JobStartEvent
    * If defined, this event is generated when the job starts. There are defined tokens that will be resolved for the event. These tokens are:
        * [[SCHEDDATE]] 
        * [[SCHEDNAME]]
        * [[JOBNAME]]
        * [[DNAQueueID]]
        * [[DNAEffectiveDate]]

### Enhanced Monitoring	
* † LostSessionTimeoutSeconds
    * This value will be used by the Oracle database monitoring thread. If a status record cannot be found in the v$session table or if no status record indicating an active session can be found in this time limit, the session will be considered lost. 
* † MachineName
    * This is the name that is to be found in the v$session table. If this value is left unset, the environmental value for COMPUTERNAME will be used. The machine name must match entry in the v$session table exactly (TERMINAL field).
* † FailInactiveStatus
    * This is a true or false setting that dictates how to handle a session status of “INACTIVE”. If this flag is set to true, the status record is treated as failed.
* AdditionalErrorCheckPath	
    * This is the full path to a post-processing script or application. If the status from executing SQRT is zero (and this is defined), this script or application will be executed. The exit value from this execution will be used as the exit value for SMARunDNAJob.
* AdditionalErrorCheckArgs
    * These are the arguments to pass to the application specified in the AdditionalErrorCheckPath.
* Cluster
    * If marked true, the DNA connector will poll the GV$Session table in Oracle as opposed to V$session. If you provide any value other than true, this will be made false. GV$Session is used by Oracle when there are multiple nodes involved, adding the node to help identify the current location of the process.  Oracle recommends utilizing GV$session when you have multiple nodes, and v$session if you only have one node.
:::info NOTE
† This configuration file parameter can be overridden from the command line.
:::

### SQRT Parameters	
* † SQTBaseDirectory	
    * If this directory is defined, it will be used as the directory to the SQT. (This means that SQTPath should only be the name of the SQT.)
* SQTBaseDirectoryAlternate1...SQTBaseDirectoryAlternate99
    * If the SQT file cannot be found in SQTBaseDirectory, these alternate directories will be searched until the first SQT file that matches the desired name is found.
* † SQTUser
    * This is the Oracle user to use to execute the SQT. It can be the same as the Oracle user.
* † SQTPassword
    * This is the password of the user to use to execute the SQT or the name of an encrypted file containing the password.
* † SQTDatabase
    * Then this is the Service Name for this Oracle database.
* † SQTOverrideDatabase
    * One client ended up requiring a database connection (SQTDatabase) to monitor the process, but the sqrwt.exe command-line would fail with the SQTDatabase value. In response, the SQTOverrideDatabase value can be used to override the SQTDatabase value on the sqrwt.exe command-line.
* † SQTOptions
    * Miscellaneous options that are desired can be specified by this option.
* † SQTErrorFile
    * This is the file to put SQRT error messages in. If this is set to the literal “GENERATE” (without the quote marks), SMARunDNAJob will create a file name based on the OpCon job name.
* † SQTReportPath
    * This is the output directory path that is passed to SQRWT.
* † SQTResponseFilePath
    * This is the output directory to write the temporary response file to.

:::info NOTE
† This configuration file parameter can be overridden from the command line.
:::

### Processing Options	
* † networknodenbr
    * The network node number can be defined in the environment file, or the configuration file (by this setting). This configuration file value would override any value in the environment file. If there is a command line argument, it would override this setting. If the network node value is not defined in any of these places, the most recently created entry that is still active in the NTWKNODE table will be used.
* † ListErrorDetail
    * Any errors logged to the QUEAPPLERROR table will be displayed when this is true. The text of the error message(s) can be suppressed by setting this to false. This might be desired in cases where sensitive data is included in the error message.
* † MSQUERRThreshold
    * Typically, any errors in the error table will set the indicator that the job has failed. Sometimes, there need to be allowances made for messages that are not really errors. If this value is non-zero, the error indicator will only be set if the line count in the error table exceeds MSQUERRThreshold.
* † OrganizationNumber
    * This value is to identify which organization to use for lookups in the BANKORGYEARMONTHDAY table.
* † DefaultParameterDateFormat
    * When doing date offsets, SMARunDNAJob needs to know the format expected by the application for the computed date. This format will be used as the default. The default can be over-ridden when the parameter is specified on the command line. (See “Appendix C – Date Format Specifications”.)

:::info NOTE
† This configuration file parameter can be overridden from the command line.
:::

### DriveMappings	
* Drive1…Drive999
    * This statement consists of four fields (separated by the pipe symbol). This fields are:
        * Local Drive (such as Z:)
        * Share name
        * User name (credentials to use for mapping)
        * User encrypted password

### Output File Handling	
* OutputReportDirectory
    * If CopyReportToOutput is set to true, the output file will be copied to 'OutputReportDirectory\effective date\queue number'.
* † CopyReportToOutput
    * If this is set to true, the output file will be copied to OutputReportDirectory\effective date\queue number. The valid values are true and false.
* OpticalReportDirectory
    * If CopyReportToOptical is set to true, the output file will be copied to OpticalReportDirectory/
* PartnerReportDirectory
    * If CopyReportToPartner is set to true, the output file will be copied to PartnerReportDirectory\effective date\queue number.
    * If there are multiple directory destinations, separate the entries with a semi*colon.
* † CopyReportToOptical
    * If this is set to true, the output file will be copied to OpticalReportDirectory. The valid values are true and false.
* † CopyReportToPartner
    * If this is set to true, the output file will be copied to ParentReportDirectory\effective date\queue number. The valid values are true and false.
* DistributionTicketDirectory
    * If CopyReportToOutput is true and either CopyReportToOptical or CopyReportToPartner is true, then a Distribution Ticket file will be created in this directory for SMADistributeFiles.
* DistributionJobScheduleName
    * If CopyReportToOutput is true and either CopyReportToOptical or CopyReportToPartner is true, then a $JOB:ADD event will be generated for a job with this schedule name.
* DistributionJobJobName
    * If CopyReportToOutput is true and either CopyReportToOptical or CopyReportToPartner is true, then a $JOB:ADD event will be generated for a job with this job name.
* DistributionJobFrequency
    * If CopyReportToOutput is true and either CopyReportToOptical or CopyReportToPartner is true, then a $JOB:ADD event will be generated for a job with this frequency.


:::info NOTE
† This configuration file parameter can be overridden from the command line.
:::
