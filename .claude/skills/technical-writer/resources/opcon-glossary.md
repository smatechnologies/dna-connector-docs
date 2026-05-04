# OpCon Documentation Glossary

## Customer-Facing Terms (Use These)

| Term | Definition | Notes |
|---|---|---|
| Agent | A software component installed on a machine that communicates with OpCon to run jobs | Never use "LSAM" in customer-facing docs |
| APPL | A Fiserv DNA application (job) identifier, consisting of an APPL name and APPL number | DNA-specific term; always use uppercase |
| APPL name | The name of a Fiserv DNA application | Use instead of "application name" when referring to DNA APPLs |
| APPL number | The numeric identifier for a Fiserv DNA application | |
| Connector | A software component that extends OpCon's job types to support third-party systems | e.g., Fiserv DNA Connector |
| Convert DNA Template program | The SMAConvertDNATemplate utility that converts Fiserv DNA templates into OpCon schedules | Use full name or "SMAConvertDNATemplate" |
| Cycle code | A Fiserv DNA processing cycle identifier passed to a DNA job at run time | |
| DDI | Data Definition Interface — the OpCon service that imports XML files as schedules and jobs | Spell out on first use: "Data Definition Interface (DDI)" |
| DNA Connector | The full Fiserv DNA integration package for OpCon, including the sub-type, SMARunDNAJob, and SMAConvertDNATemplate | |
| DNA job | A job in OpCon that uses the Fiserv DNA job sub-type | |
| DNA Query Processor | The SMADNAQueryProcessor component that handles DNA job queries between OpCon and the Fiserv DNA database | |
| DNA template | A Fiserv DNA workflow containing a collection of APPLs (jobs) | |
| Effective date | The date passed to a DNA job for processing, typically in YYYY/MM/DD format | |
| Enterprise Manager | The legacy OpCon desktop client | Abbreviate as "EM" after first use |
| Fiserv DNA | The core banking platform by Fiserv | Always "Fiserv DNA" — not just "DNA" on first use per page |
| Global Property | An OpCon property available across all schedules and jobs | Capitalize both words |
| job | An automated unit of work scheduled and run by OpCon | Lowercase; never use "task" or "process" as synonyms |
| MSGIN | The OpCon message-in directory used for passing events | |
| ODAC | Oracle Data Access Components — required by SMARunDNAJob to connect to Oracle databases | Spell out on first use |
| OpCon | The SMA Technologies workload automation platform | Always capitalize; never "opcon" or "OPCON" |
| Oracle | The Oracle database platform; Fiserv DNA uses Oracle as its back-end database | |
| parameter | A DNA job parameter passed on the command line (P1, P2, etc.) | Lowercase |
| queue ID | The Fiserv DNA processing queue identifier for a running job | |
| Request Router | The OpCon component (SMARequestRouter) that routes job requests to the appropriate handler | |
| schedule | An OpCon container that groups related jobs | Lowercase |
| SMAConvertDNATemplate | The executable name for the Convert DNA Template program | Use monospace: `SMAConvertDNATemplate.exe` |
| SMARunDNAJob | The executable name for the SMARunDNAJob program | Use monospace: `SMARunDNAJob.exe` |
| SMADNAQueryProcessor | The executable name for the DNA Query Processor | Use monospace: `SMADNAQueryProcessor.exe` |
| Solution Manager | The OpCon web interface | Capitalize both words |
| SQRWT | The Fiserv DNA SQL Report Writer — the program that runs DNA jobs | |
| SQT | A Fiserv DNA script or template type used for DNA jobs | |
| sub-type | A job type variant within OpCon's Windows job type that enables Fiserv DNA job definitions | Use "Fiserv DNA job sub-type" or "DNA sub-type"; hyphenate |
| workflow | In OpCon, a schedule with its jobs and dependencies | Lowercase |

---

## Banned Terms

Do not use these terms in customer-facing documentation.

| Banned term | Use instead | Reason |
|---|---|---|
| LSAM | Agent | Internal/legacy term |
| execute / executing / executed | run / running / ran | Jargon |
| task (as job synonym) | job | Ambiguous |
| process (as job synonym) | job | Ambiguous |
| click | select | Not device-neutral |
| right-click | right-select | Not device-neutral |
| navigate to | go to / open | Vague |
| launch | open / start | Informal |
| checkbox | selection | UI-neutral preferred |
| drop-down / dropdown | list | UI-neutral preferred |
| check (a box) | select | Not device-neutral |
| uncheck | clear | Not device-neutral |
| client (as UI synonym) | application / interface | Ambiguous |
| hit (a button) | select | Informal |
| grab | select / retrieve | Informal |
| we / our | (rewrite in second person) | First person not permitted |
| users | you | Second person preferred |
| the user | you | Second person preferred |
| will (for present descriptions) | present tense | Future tense used for descriptions |

---

## DNA-Specific Terminology

| Term | Notes |
|---|---|
| APPL | Always uppercase; stands for "application" in Fiserv DNA context |
| BANKORGYEARMONTHDAY | Fiserv DNA table for business date lookups; use in technical reference only |
| QUEAPPLERROR | Fiserv DNA error table; use in technical reference only |
| NTWKNODE | Fiserv DNA network node table; use in technical reference only |
| SQT | Fiserv DNA script type; use in technical reference and command-line docs |
| SQRWT | Fiserv DNA report writer; spell out on first use: "SQL Report Writer (SQRWT)" |
| v$session / GV$session | Oracle session tables used for enhanced monitoring; use exact case in code blocks |
