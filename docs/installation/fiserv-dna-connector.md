---
title: Install the Fiserv DNA Connector
sidebar_label: Fiserv DNA Connector
description: "How to install the Fiserv DNA Connector files on the OpCon server."
tags:
  - Procedural
  - System Administrator
  - Installation
---

# Install the Fiserv DNA Connector

## What is it?

The Fiserv DNA Connector files provide the core components required for OpCon to process DNA jobs. Install these files on the OpCon server before configuring any other DNA Connector components.

## Prerequisites

- The `SMAConnector.zip` file is available on the OpCon server.
- You have write access to the OpCon installation directory (`C:\ProgramData\OpConxps\` or the equivalent path on your server).

## Install the connector files

To install the Fiserv DNA Connector files, complete the following steps:

1. Extract the files from `SMAConnector.zip`.
2. Place the extracted folder and its contents in the `OpConxps` directory on the OpCon server:
   - If OpCon is installed on the C drive, place the files in `C:\ProgramData\OpConxps\`. This creates a new `DNA` subdirectory.
   - If OpCon is installed on a different drive, place the files in the `OpConxps` directory that contains the `SAM\Log` folder.

After the files are in place, proceed to [Configure the OpCon database connection](../configuration/opcon-database-connection.md).
