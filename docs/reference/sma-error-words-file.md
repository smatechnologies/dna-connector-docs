---
title: SMAErrorWordsFile
sidebar_label: SMAErrorWordsFile
description: "Reference for the SMAErrorWordsFile.txt format used by SMARunDNAJob to evaluate DNA job error tables and determine job failure."
tags:
  - Reference
  - Developer
  - Reference
---

# SMAErrorWordsFile

## What is it?

The `SMAErrorWordsFile.txt` file contains regular expressions that SMARunDNAJob evaluates against rows in the Fiserv DNA error table (`QUEAPPLERROR`). Any row matching an expression in the `[Error Masks]` section causes the job to be marked as failed, unless the row first matches an expression in the `[Ignore Masks]` section.

Configure the path to this file using the `ErrorWordsFile` setting in `SMARunDNAJob.ini` or the `-ErrorWordsFile` command-line argument.

## File format

The file has two sections:

| Section | Purpose |
|---|---|
| `[Error Masks]` | Regular expressions. A row in `QUEAPPLERROR` matching any of these expressions causes the job to fail, regardless of the `MSQUERRThreshold` setting. |
| `[Ignore Masks]` | Regular expressions. A row matching any of these expressions is discarded immediately and does not count toward the error threshold or trigger error mask evaluation. |

Each line in a section is a separate regular expression. Separate multiple expressions on the same line with a vertical pipe (`|`). Each line must end with a vertical pipe.

## Example file

```
#----------------------------------------------------------------------
#
#            This file contains the common error masks.
#
#----------------------------------------------------------------------
[Error Masks]
^ERROR |^ERROR:|
^error |^error:|

[Ignore Masks]
Statement Account Number is Null
Account status invalid for change
Unable to Match Stmt Cycle Code
Unable to Match Cycle Code
Account cycle on primary account does not exist on the secondary account product
Bank Check Not Processed - Validation Error
Receivable not created pending maturity
Invalid Invoice Amount of 0 or NULL
Attempting to select MAX DueDate from AcctRcvb
Attempting to select PmtAmt, PmtCalPeriodCd from AcctPmtHist, AcctPmtSubAcctHist
Payment Schedule does not have payment amount
Insufficient Funds - Checking
Loan is Non-Performing
Investor Loan Payment to Multiple Due Dates
Insufficient Available Funds to meet sweep threshold
Attempting to calculate Payment Amount
Attempting to SELECT PmtTypCd
Error - Get Minor account type code for AcctrNbr
Scheduled Payment Will Affect Maturity Payment - Loan
Attempting to process payoff allotment to Acct
Attempting to process payment allotment
Stmt Not Printed - Closed and Account was never Active
Generated Rtxn: IW, not supported. - ICP
Error - Get Minor account type code for
Stmt Not Printed - Closed and Last Stmt Already Generated
Rtxn Exception raised: 130
Rtxn Exception raised: 112
Rtxn Exception raised: 120
Rtxn Exception raised: 14
Rtxn Exception raised:
Closed with Balances Remaining
Sweep Rtxn (SWPD) Not Allowed for this Account
Cannot backdate thru prior int posting for NOTE - ICP
Selecting active interest rate from AcctRateHist
Funds Cannot Be Accepted -- No Transaction Posted
Error executing procedure: PACK_PRICPACK.proc_PricingMain
PROC_PRICCOLUMN UPDATE CYCLE DATE VALUES
Staging error in Chunk
Select NET of Int related Rtxns from Rtxn - COLI - SYAI
Attempting to calculate remaining term
Payment More Than Loan Balance
No Recipient available for notice printing due to bankruptcy
Attempting to find the Pmt Nbr - CPNB - IPMT - BRCV - NRCV
Projection date is in the past
- NUCF - DDRR
Unable to calc due date after
Checking if RTXN E/D of

#----------------------------------------------------------------------
#
#            End of file
#
#----------------------------------------------------------------------
```

## FAQs

**Q: What is the difference between Error Masks and Ignore Masks?**

A: Error Masks identify rows that should cause a job failure. Ignore Masks identify rows that should be excluded from evaluation entirely — they are not counted toward the `MSQUERRThreshold` and do not trigger error mask matching. Ignore Masks take precedence: if a row matches both an Ignore Mask and an Error Mask, the row is ignored.

**Q: How do I allow some errors without failing the job?**

A: Use the `MSQUERRThreshold` setting in `SMARunDNAJob.ini`. When set to a non-zero value, the job fails only if the number of unignored error rows exceeds the threshold. Any row matching an Error Mask still causes an immediate failure regardless of the threshold.

## Glossary

| Term | Definition |
|---|---|
| Error Mask | A regular expression in `[Error Masks]` that, when matched against a row in `QUEAPPLERROR`, causes SMARunDNAJob to mark the job as failed. |
| Ignore Mask | A regular expression in `[Ignore Masks]` that, when matched against a row in `QUEAPPLERROR`, causes that row to be discarded before any further evaluation. |
| `QUEAPPLERROR` | The Fiserv DNA database table that stores error messages generated during DNA job processing. |
| `MSQUERRThreshold` | A configuration setting that defines the maximum number of non-ignored error rows before a job is marked failed. |
