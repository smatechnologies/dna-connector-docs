---
sidebar_label: 'Convert DNA Template'
---

# Convert DNA Template

The Convert DNA Template interface connects to the Fiserv DNA database and extracts DNA template information that contains DNA jobs. The information is extracted and transformed into an XML format that is readable by OpCon’s DDI service. OpCon’s DDI service has a hot folder that consumes the XML and converts the records into OpCon workflows containing OpCon DNA jobs.

## Operation

Launch the Convert DNA Template program by double-clicking the SMAConvertDNATemplate.exe. If launching for the first time, you will need to configure the program. 

### SMA Convert DNA Template Configuration

To enter the configuration screen select the "Edit Configuration" button. Below is infomration on each option in the individual tabs in the configuration screen.

#### General

* XML Files Path
    * Enter the path where the XML output data will be generated.
* Include All Parameters on Command Line
    * If checked, the conversion will include the parameters in the OpCon job.
    * If unchecked, the conversion will only include requred prarmetes in the OpCon job.

#### Oracle Connection

* Username
* Password
* Use DSN
* Hostname
* Port
* Database

:::info Note

The password must be set in the SMAConvertDNATemplate.ini file and it is recommended it is removed as soon as the conversion process is complete 

:::


#### Schedule Defaults

On th Schedule Defaults tab, you may specify default values that will show up in the Schedule Master when the Fiserv template is successfully converted into an OpCon schedule. For example, adding a “DNA_” as a prefix can be used as a visual cue within the OpCon user interface to distinguish between DNA schedules that were converted and imported.

* Prefix
* Start Time
    * Time of day the schedule will be released (format hh:mm)
* Use Master Holiday Calendar
    * If check, the Master Holiday Calendar will be used.
* Workdays
    * Determine if schedule has 5-day work week compared to 7-day work week
* Subscheudle Flag
* Autobuild (Days in Advance)
    * To specify how many days in advance to start the build
* Autobuilg (Days)
    * To specify the number of days to build from that point forward.
* Schedule Level Frequency
* Frequency
* Frequency Group
* Frequency DOW
* Day Type
* AOBN

#### Job Defaults

* Prefix
    * Optional
    * By default, extraction and conversion process will use APPL_NAME and APPL_Number as the OpCon job name. If there are multiple instances of APPL_NAME and APPL_Number within the same schedule, a unique identifier will be appended to the job name.
* Machine Name
    * The name of the machine the SMARunDNAJob.exe will run on.
* Machine Group
* Machine Group (Each)
* Frequency
    * When creating the new OpCon job, the job will be created with the frequency specified.
* Start Offset
    * Time of day to start the OpCon job.
* Absolute/Relative
* Build Status
    * Default status the job will be in when it is added to a schedule.
* User ID
    * User the SMARunDNAJob.exe will run as.
* Priority
* Command
    * The command-line option is the template that will begin the creation of the full command-line to call the DNA job with the job’s parameters.
    * Recommended setting (use global properties): ```"[[PathSMADNA]]\SMARunDNAJob.exe" -ConfigFile=[[PathSMADNA]]\SMARunDNAJob.ini```
* Working Directory
    * The working directory for the job. Recommendation: global property.
* Fail Condition
* Fail Value

#### Parameter Substitutions

* Mask
* Desired String

### SMA Convert DNA Template Usage

After SMAConvertDNATemplate is configured, you can now connect to the DNA datebase and create OpCon jobs based off the APPLs using DDI.

#### Conver APPLs to OpCon Jobs

* Click “Connect to Database”
    * A list of DNA templates is loaded into a list box. 
    * Clicking a template will show jobs (APPLs) related to the template.
    * When a template is ready for export, the “Create DDI File” button will prompt to confirm:
        * OpCon Schedule Name: cannot include special characters
        * Frequency
        * Default co mmand-line: Used to build each unique command-line per job (Appl)
    * A second prompt confirms XML file is created and provides file location.
    * XML is converted into OpCon schedules and jobs when the XML file is dropped into the SMA DDI hot folder. SMA DDI service picks up the XML file and adds the schedules and jobs into the OpCon database.
    * Once imported, the schedule detail, job detail and workflow detail is visible in Enterprise Manager and ready to run.
