---
sidebar_label: 'Convert DNA Template Program'
---

# Convert DNA Template Program

A Fiserv DNA implementation generally comes with existing templates (workflows) containing APPLs (jobs). Instead of manually creating DNA templates (or workflows) in OpCon, the “Convert DNA Template” program quickly loads hundreds of DNA jobs into OpCon and will auto-create required dependencies between each APPL (job).

![img alt](/img/convert-dna-template-program-1.png)

The Convert DNA Template interface connects to the Fiserv DNA database and extracts DNA template information that contains DNA jobs. The information is extracted and transformed into an XML format that is readable by OpCon’s DDI service. OpCon’s DDI service has a hot folder that consumes the XML and converts the records into OpCon workflows containing OpCon DNA jobs.
