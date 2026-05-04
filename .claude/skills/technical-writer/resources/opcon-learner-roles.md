# OpCon Learner Roles

## Overview

DNA Connector documentation serves three primary audiences. Tailor tone, assumed knowledge, and depth based on which role a page targets. Every page's front matter must include a `tags:` entry with the target role.

---

## System Administrator

**Tag**: `System Administrator`

### Profile
- Responsible for installing, configuring, and maintaining OpCon and its connectors
- Has Windows server administration experience
- Understands file system paths, services, and INI-file configuration
- May not have deep OpCon job-scheduling knowledge

### What they need
- Step-by-step installation and configuration procedures
- Exact file paths, executable names, and required parameters
- Troubleshooting guidance when components don't start or connect
- Security considerations (encrypted passwords, permissions)

### Tone guidance
- Direct and procedural
- Lead with the goal; give exact commands and paths
- Call out prerequisites explicitly
- Avoid assumed knowledge of OpCon internals

### Example pages targeting this role
- Installation procedures
- Configuration file reference
- Troubleshooting tips
- Oracle connection setup

---

## OpCon User (Scheduler / Operator)

**Tag**: `OpCon User`

### Profile
- Builds and operates OpCon schedules and jobs day-to-day
- Familiar with OpCon concepts: schedules, jobs, frequencies, properties
- Likely uses Solution Manager (web UI) or Enterprise Manager (desktop UI)
- May not manage the underlying infrastructure

### What they need
- How to define and configure DNA jobs in the OpCon UI
- What parameters mean and how to use them
- How to use the Convert DNA Template program
- Conceptual understanding of how DNA jobs flow through OpCon

### Tone guidance
- Conversational but precise
- Assume knowledge of OpCon job concepts; don't re-explain schedules/jobs
- Provide examples and screenshots where helpful
- Focus on "what to fill in" over "how the system works internally"

### Example pages targeting this role
- Fiserv DNA sub-type overview and field reference
- Convert DNA Template usage
- SMARunDNAJob command-line options

---

## Developer / Integrator

**Tag**: `Developer`

### Profile
- Integrating DNA processing into automated workflows
- Comfortable with command-line interfaces, scripting, and APIs
- May be writing job command lines with parameters, cycle codes, and properties
- Needs precise technical detail: parameter formats, exit codes, date offset syntax

### What they need
- Exact command-line syntax with all available options
- Parameter format specifications (e.g., date formats, pipe separators)
- Error codes and their meanings
- Environment file format

### Tone guidance
- Technical and precise
- Use code blocks liberally for command-line examples
- Reference exact field names and data types
- Skip "why" explanations — assume the developer knows what they want to accomplish

### Example pages targeting this role
- Command-line options reference
- Environment file reference
- SMARunDNAJob configuration settings (parameter details)
- Error words file

---

## All Audiences

**Tag**: `All`

Use this tag only for high-level overview and landing pages that serve every role equally.

### Example pages
- Index / landing page
- Overview / "What is the DNA Connector?"
- Release notes
