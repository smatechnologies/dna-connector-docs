---
title: Install the Convert DNA Template program
sidebar_label: Convert DNA Template program
description: "How to install the SMAConvertDNATemplate program used to import Fiserv DNA templates into OpCon."
tags:
  - Procedural
  - System Administrator
  - Installation
---

# Install the Convert DNA Template program

## What is it?

The Convert DNA Template program (`SMAConvertDNATemplate.exe`) imports existing Fiserv DNA templates into OpCon as schedules and jobs. Install it on any machine that can connect to the Fiserv DNA Oracle database to generate the XML files for DDI processing.

## Prerequisites

- The machine has network access to the Fiserv DNA Oracle database.
- .NET Framework 4.7 is installed on the machine.
- The DDI (Data Definition Interface) service is running on the OpCon server and its hot folder path is known.

## Install the Convert DNA Template program

To install the Convert DNA Template program, complete the following steps:

1. Copy `SMAConvertDNATemplate.exe` and its supporting files to the directory where the program will run and connect to the Fiserv DNA Oracle database. For example: `C:\SMADNA`.

After installation, proceed to [Convert DNA Template usage](../convert-dna-template.md) to configure and run the program.
