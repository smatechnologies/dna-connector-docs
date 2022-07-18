---
sidebar_label: 'SMAErrorWordsFile'
---

# SMAErrorWordsFile

### Example

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
Executing pack_INTPARAMS.func_PMTCHANGECALPERCD - UNPD - PLPC
Attempting to calculate Payment Amount
Attempting to SELECT PmtTypCd
Error - Get Minor account type code for AcctrNbr
Scheduled Payment Will Affect Maturity Payment - Loan
Attempting to process payoff allotment to Acct
Invalid Invoice Amount of 0 or NULL
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