---
title: Convert DNA Template
sidebar_label: Convert DNA Template
description: "How to configure and use the SMAConvertDNATemplate program to import Fiserv DNA templates into OpCon as schedules and jobs."
tags:
  - Procedural
  - OpCon User
  - DNA Connector
---

# Convert DNA Template

## What is it?

The Convert DNA Template program (`SMAConvertDNATemplate.exe`) connects to the Fiserv DNA Oracle database, extracts DNA template information, and generates XML files that OpCon's DDI (Data Definition Interface) service imports as OpCon schedules and jobs. Use this program to migrate existing Fiserv DNA templates into OpCon rather than creating each job manually.

## Configure the program

To open the configuration screen, select **Edit Configuration**. The configuration screen has five tabs.

### General tab

| Field | Description |
|---|---|
| **XML Files Path** | The directory where SMAConvertDNATemplate writes the XML output files. |
| **Include All Parameters on Command Line** | When selected, all parameters are included in the OpCon job command line. When cleared, only required parameters are included. |

### Oracle Connection tab

| Field | Description |
|---|---|
| **Username** | The Oracle user name for connecting to the Fiserv DNA database. |
| **Password** | The Oracle user password. |
| **Use DSN** | Select to use a DSN for the connection instead of direct connection details. |
| **Hostname** | The host name of the Fiserv DNA Oracle database server. |
| **Port** | The port for the Oracle database connection. |
| **Database** | The Oracle service name or database name. |

:::info NOTE
Set the password in `SMAConvertDNATemplate.ini`. Remove the password from the file as soon as the conversion is complete.
:::

### Schedule Defaults tab

Use the **Schedule Defaults** tab to specify default values for OpCon schedules created during the conversion. For example, adding a `DNA_` prefix helps visually distinguish converted DNA schedules in the OpCon interface.

| Field | Description |
|---|---|
| **Prefix** | A prefix added to each converted schedule name. |
| **Start Time** | The time of day the schedule is released, in `hh:mm` format. |
| **Use Master Holiday Calendar** | When selected, the Master Holiday Calendar is used for the schedule. |
| **Workdays** | Specifies whether the schedule uses a 5-day or 7-day work week. |
| **Subschedule Flag** | Marks the schedule as a subschedule. |
| **Autobuild (Days in Advance)** | Number of days in advance to start building the schedule. |
| **Autobuild (Days)** | Number of days to build forward from the start date. |
| **Schedule Level Frequency** | Frequency applied at the schedule level. |
| **Frequency** | Default frequency for jobs in the schedule. |
| **Frequency Group** | Default frequency group. |
| **Frequency DOW** | Day-of-week setting for the frequency. |
| **Day Type** | Working day type. |
| **AOBN** | After-or-before-next-day setting. |

### Job Defaults tab

| Field | Description |
|---|---|
| **Prefix** | A prefix added to each converted job name. By default, the APPL name and APPL number are used as the OpCon job name. If multiple instances of the same APPL name and number exist in the same schedule, a unique identifier is appended. |
| **Machine Name** | The name of the OpCon machine (Agent) on which `SMARunDNAJob.exe` runs. |
| **Machine Group** | Machine group for job assignment. |
| **Machine Group (Each)** | Assigns the job to each machine in the group. |
| **Frequency** | Frequency applied to each converted job. |
| **Start Offset** | Time-of-day offset for starting the job. |
| **Absolute/Relative** | Specifies whether the start offset is absolute or relative. |
| **Build Status** | Default status for the job when added to a schedule. |
| **User ID** | The OpCon user identity under which `SMARunDNAJob.exe` runs. |
| **Priority** | Job priority. |
| **Command** | Command-line template for the DNA job. Recommended setting: `"[[PathSMADNA]]\SMARunDNAJob.exe" -ConfigFile=[[PathSMADNA]]\SMARunDNAJob.ini` |
| **Working Directory** | Working directory for the job. Using a Global Property is recommended. |
| **Fail Condition** | Condition used to evaluate job failure. |
| **Fail Value** | Value for the fail condition. |

### Parameter Substitutions tab

Use the **Parameter Substitutions** tab to define text replacements applied to parameter values during conversion.

| Field | Description |
|---|---|
| **Mask** | The text pattern to search for in parameter values. |
| **Desired String** | The replacement text. |

## Convert APPLs to OpCon jobs

After configuring SMAConvertDNATemplate, connect to the Fiserv DNA database and generate the XML for DDI import.

To convert APPLs to OpCon jobs, complete the following steps:

1. Select **Connect to Database**. A list of DNA templates loads into the list.
2. Select a template to display the APPLs (jobs) associated with it.
3. When the template is ready for export, select **Create DDI File**. You are prompted to confirm:
   - **OpCon Schedule Name** — The schedule name to use in OpCon. Cannot include special characters.
   - **Frequency** — The frequency to assign to the schedule and its jobs.
   - **Default command line** — The command-line template used to build each unique job command line per APPL.
4. Confirm the prompts. A second confirmation indicates the XML file was created and provides the file location.
5. Place the XML file in the SMA DDI service hot folder. The DDI service picks up the file and imports the schedules and jobs into the OpCon database.

After import, the schedule structure, job definitions, and workflow dependencies are visible in OpCon and ready to run.

## FAQs

**Q: What happens if the APPL name and number already exist as an OpCon job?**

A: The DDI service creates a new job record. Review existing OpCon schedules before importing to avoid duplicate job definitions.

**Q: Why is my schedule name rejected when I create the DDI file?**

A: OpCon schedule names cannot include special characters. Remove any special characters from the schedule name in the confirmation dialog.

**Q: Where is the DDI hot folder?**

A: The DDI hot folder path is configured in the OpCon server's DDI settings. Contact your OpCon administrator for the path.
