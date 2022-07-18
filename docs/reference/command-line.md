---
sidebar_label: 'Command Line Options'
---


# Command Line Options
Options that are solely in the command line. If a command line option can also be found in the configuration file, see the documentation on the configuration file (“Appendix A – SMARunDNAJob Configuration Settings”) for definition.

*  ConfigFile
    *  Path and name of the configuration file to use. If no configuration file is specified, SMARunDNAJob.ini (in the same directory as SMARunDNAJob.exe) is assumed. If the configuration file is specified, precede it with .\ to indicate the current directory or the appropriate path to the directory.
*  ApplName
    *  This is the application name for the SQT. This name will be used for the log file. If no ApplName option is specified, the log file will be named “SMARunDNAJob hhmmss.log”. Either the ApplName or the ApplNumber must be specified.
* ApplNumber
    *  A look-up will be done for the Application Number (from the SQT specified). If it is found in the database, that number will be used. However, some applications have multiple ApplNumber. If the ApplNumber is specified on the command line, the specified number will be used. Either the ApplName or the ApplNumber must be specified. 
* CreateFolderWithEDandQN
    * The specified path will have the effective date and queue number appended to it. SMARunDNAJob will create the directory structure. (The specified root directory must already exist.) 
* CycleCodeNotRequired
    * If no cycle codes are supplied on the command line, a job that has defined cycle codes in the database will fail. The exception is REG-E. By specifying this command line option, the user is permitting a job to run that has no specified cycle codes on the command line but has defined cycle codes in the database. No value is required, just specify this option on the command line like: ```-CycleCodeNotRequired```
    * This option has no effect if the job does not have cycle codes associated with it.
* EffectiveDate
    * This will be used for the DNA effective date. __It must be in the format YYYY/MM/DD.__ It is very simple to set up OpCon to format $SCHEDULE DATE in this format to pass to the application. See Chapter 5 of “OpConxps Concepts and Utilities.pdf” for more information. If this parameter is not specified on the command line, it will be pulled from the BANKOPTION table. 
* EffectiveDateOffset
    * This is a small positive or negative integer that will be added to the Effective Date (regardless of where the Effective Date comes from).
* FileLoad
    * This specification indicates that this is a FileLoad job. There is special processing performed for fileload jobs. The format of the argument is: ```-FileLoad=”filename”```
    * It is imperative to specify the correct filename as this is used to look up the results of the file load to get the values associated with it (batch count, record count, credits, debits, and file number).
    * __If this is a fileload job, there are other command line arguments that MUST be specified.__ They are:
        * FLBatchCount
        * FLRecordCount
        * FLCredits
        * FLDebits
        * FLFileNum
    * Each one of these arguments requires the name of a property to contain the value that corresponds to the name. For example, ```-FLBatchCount=”ACHABatchCount”```
    * This would result in the batch count from the file being stored in an OpCon property called ACHBatchCount.
* MaxSecondsToExecute
    * This is the maximum number of seconds to allow the SQRT to run. If the SQRT has not finished by this time, the application will print an error message and exit. If this argument is not specified, there is no maximum run time.
* C1…-C99
    * These parameters are to allow users to specify cycle codes that are needed by this DNA job. The specification should look like: ```-C1=”EOM”```
    * There can be multiple cycle codes for a job.
* P1...-P99
    * The format is “parameter code|value”. A vertical pipe is used to separate the parameter code from its value. For example, if we wanted to specify Starting Date, we would specify: ```-P1=”SD|20130327”```
    * If an empty string (“”) is desired, simply leave no space between the vertical pipe and the closing quote as in: ```-P2=”TD|”```
    * If a NULL is to be entered into the database for this parameter, use the special word NULL. For example: ```-P2=”TD|NULL”```
    * There are optional fields as well. The first optional field is an Action specification. Currently, the only supported values are “B” and “O”. The “B” specification indicates that the value supplied is a date that should be replaced with the Business date that corresponds. So, an example of getting a Business date conversion would look like: ```-P1=”SD|20130327|B”```
    * The second optional field is a date offset. This must be an integer in the range of -365 to 365. If the previous field was “B”, the date will be converted to a Business date and the offset will be in Business days. If the previous field is “O”, the offset will be computed in calendar days. For example: ```-P1=”SD|20130327|B|-1”```
    * This specification will cause the following action: The date will be used to find the Business day equivalency and then one Business day will be subtracted. ```-P1=”SD|20130327|O|-1”```
    * This specification will cause the following action: One calendar day will be subtracted.
    * The date will be calculated and formatted according to the DefaultParameterDateFormat string. If an offset operation is to be performed, the DefaultParameterDateFormat can be over-ridden by supplying the desired format. For example, ```-P1=”SD|20130327|O|-1|MM-dd-yy”```
    * _See “Appendix C – Date Format Specifications”._
* Property4EffectiveDate
    * This parameter instructs SMARunDNAJob to save the effective date for this job in the Property table under the specified name for later reference.
* Property4QueueID
    * This parameter instructs SMARunDNAJob to save the Queue ID for this job in the Property table under the specified name for later reference.
* PVSeparator
    * This character should be used as the separator character on command line specifications of parameters (instead of the vertical pipe symbol).
* UseBusinessDate
    * This indicates that the effective date should be used to find the business date in the BANKORGYEARMONTHDAY table. This means that the –EffectiveDate argument MUST be supplied on the command line. 

:::info NOTE

 If –EffectiveDateOffset is also specified, the offset will be applied to the derived business day and will be calculated in business days, not calendar days.
:::