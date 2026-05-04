---
title: Introduction
sidebar_label: Introduction
description: "An introduction to the three components of the Fiserv DNA Connector — the Fiserv DNA job sub-type, SMARunDNAJob, and the Convert DNA Template program."
tags:
  - Conceptual
  - All
  - DNA Connector
---

# Introduction

## What is it?

The Fiserv DNA Connector extends OpCon to schedule and automate jobs on the Fiserv DNA core banking platform. It consists of three components, each serving a distinct role in the integration between OpCon and Fiserv DNA.

## Components

### Fiserv DNA job sub-type

The Fiserv DNA job sub-type is a plug-in for Enterprise Manager that adds a dedicated job definition form for DNA jobs. Use it to define and configure DNA jobs directly within OpCon, including APPL name, APPL number, effective date, cycle codes, and parameters. The **Job DNA Query** tab lets you query the Fiserv DNA database in real time to look up APPLs and auto-populate job details.

See [Fiserv DNA job sub-type](./fiserv-dna-subtype.md) for details.

### SMARunDNAJob program

SMARunDNAJob is the command-line program that starts and monitors Fiserv DNA jobs. When OpCon runs a DNA job, it calls `SMARunDNAJob.exe` with the job's parameters. SMARunDNAJob connects to the Fiserv DNA Oracle database, submits the job to the processing queue, and monitors it until completion. An enhanced monitoring option tracks the active Oracle session to detect lost or failed jobs in real time.

See [SMARunDNAJob program](./sma-run-dna-job-program.md) for details.

### Convert DNA Template program

The Convert DNA Template program (`SMAConvertDNATemplate.exe`) imports existing Fiserv DNA templates into OpCon as schedules and jobs. Rather than recreating each APPL manually, the program connects to the Fiserv DNA Oracle database, extracts template data, and generates XML files that OpCon's DDI service imports automatically — including all job dependencies.

See [Convert DNA Template program](./convert-dna-template-program.md) for details.
