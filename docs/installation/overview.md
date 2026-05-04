---
title: Installation overview
sidebar_label: Installation overview
description: "An overview of what to install for the Fiserv DNA Connector and the order in which to install each component."
tags:
  - Conceptual
  - System Administrator
  - Installation
---

# Installation overview

## What is it?

The Fiserv DNA Connector consists of four components, each with its own installation procedure. Install all four components to enable full DNA job automation through OpCon.

## Components to install

| Component | Description |
|---|---|
| DNA Connector files | Core connector files placed on the OpCon server. Required for all DNA job processing. |
| Fiserv DNA job sub-type | Enterprise Manager plug-in that enables the DNA job definition form. Install on each machine running Enterprise Manager. |
| SMARunDNAJob program | Command-line program that starts and monitors DNA jobs. Place on any machine that runs DNA jobs. |
| Convert DNA Template program | Utility for importing existing Fiserv DNA templates into OpCon. Required for the initial migration only. |

## Prerequisites

Before installing the DNA Connector, verify the following:

- The OpCon server is installed and running.
- You have the `SMAConnector.zip` file containing the OpCon components.
- Enterprise Manager is installed on any machine where you need the DNA job sub-type.
- ODAC (Oracle Data Access Components) and Oracle client software are installed on any machine that runs SMARunDNAJob.

## Installation order

Install the components in the following order:

1. [Fiserv DNA Connector files](./fiserv-dna-connector.md)
2. [Fiserv DNA job sub-type](./fiserv-dna-subtype.md)
3. [SMARunDNAJob program](./sma-run-dna-job-program.md)
4. [Convert DNA Template program](./convert-dna-template-program.md) *(optional — required for template migration only)*

After installing all components, proceed to [Configuration](../configuration/overview.md).
