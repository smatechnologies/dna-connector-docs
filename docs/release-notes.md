---
sidebar_label: 'Release Notes'
---

# Release Notes

## Version 26.0.0 New Features

### 2026 March

:eight_spoked_asterisk: Added ACS integration support via a new environment variable that provides a file path for submitting status requests when the connector communicates with ACS.

## Version 26.0.0 Fixes

### 2026 March

:white_check_mark: Fixed response file name collision in concurrent DNA jobs where two jobs running simultaneously on different machines could generate identical temp response file names when sharing the same OS process ID.
