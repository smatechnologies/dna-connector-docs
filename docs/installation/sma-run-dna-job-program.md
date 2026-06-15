---
title: Install SMARunDNAJob
sidebar_label: SMARunDNAJob program
description: "How to install the SMARunDNAJob program on the machine that runs Fiserv DNA jobs."
tags:
  - Procedural
  - System Administrator
  - Installation
---

# Install SMARunDNAJob

## What is it?

SMARunDNAJob is the program that starts and monitors Fiserv DNA jobs. Install it on any machine where DNA jobs will run. The machine must have access to SQRWT (the Fiserv DNA SQL Report Writer).

## Prerequisites

- SQRWT (`sqrwt.exe`) is installed and accessible on the target machine.
- ODAC (Oracle Data Access Components) is installed on the target machine.
- Oracle client software (administrator edition) is installed on the target machine.
- .NET 5.0 runtime (Windows x64) is installed on the target machine.

## Install SMARunDNAJob

To install SMARunDNAJob, complete the following steps:

1. Copy the `SMARunDNAJob.exe` file and its supporting files to the directory where SQRWT is accessible. For example: `C:\SMADNA`.

After installation, configure ODAC and then create the `SMARunDNAJob.ini` configuration file. See [SMARunDNAJob program configuration](../configuration/sma-run-dna-job-program.md).

## Configure ODAC

To configure ODAC for use with SMARunDNAJob, complete the following steps:

1. Verify that the ODAC version matches the Oracle client version installed on the machine.
2. Set the `TEMP` and `TMP` environment variables to `C:\Temp`.
3. After downloading the ODAC files, open a command prompt.
4. Run the following command to install ODAC:
   ```
   Install.bat all C:\Oracle myhome true
   ```
