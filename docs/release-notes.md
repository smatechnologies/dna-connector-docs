---
sidebar_label: 'Release notes'
title: DNA Connector release notes
description: "Version history and change details for the Fiserv DNA Connector, including new features, improvements, and bug fixes."
tags:
  - Reference
  - All
  - DNA Connector
---

# DNA Connector release notes

## 26

### 26.0.0

2026 March

### What's new

:eight_spoked_asterisk: Added ACS integration support via a new environment variable that provides a file path for submitting status requests when the connector communicates with ACS.

### Why this matters

ACS integration support allows the DNA Connector to submit status requests through ACS, enabling environments where the connector communicates with ACS rather than directly with OpCon.

### Bug fixes

:white_check_mark: Fixed response file name collision in concurrent DNA jobs where two jobs running simultaneously on different machines could generate identical temporary response file names when sharing the same OS process ID.
