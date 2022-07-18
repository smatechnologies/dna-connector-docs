---
sidebar_label: 'Environment File'
---

# Environment File

Each value should be verified in the environment where DNA jobs are to be executed and modified appropriately. The environment can be displayed opening a command prompt and entering: ```set```

The environment variable "networknodenbr" is optional; it can be either saved in the configuration file or entered on the command line. If it is not specified in one of these three places, a network node number will be retrieved from the database.

## Example Environment File


```
ALLUSERSPROFILE=C:\ProgramData
APPDATA=C:\Users\servacct\AppData\Roaming
BACKUP=C:\BACKUP
BATFILES=C:\BATFILES
CommonProgramFiles=C:\Program Files\Common Files
CommonProgramFiles(x86)=C:\Program Files (x86)\Common Files
CommonProgramW6432=C:\Program Files\Common Files
COMPUTERNAME=DNACREATOR
ComSpec=C:\Windows\system32\cmd.exe
datapump=c:\datapump
DBAUTILS=C:\DBAUTILS
DBNAME=neondna4
DNX_HOME=%USERPROFILE%\.dnx
EXPORTS=C:\EXPORTS
FP_NO_HOST_CHECK=NO
HOMEDRIVE=C:
HOMEPATH=\Users\servacct
IMPORTS=C:\IMPORTS
LOCALAPPDATA=C:\Users\servacct\AppData\Local
LOGONSERVER=\\DNACREATOR
NUMBER_OF_PROCESSORS=4
OPATCH=c:\app\oracle\product\12.1.0.2\db_1\OPatch
ORACLE_BASE=c:\app\oracle
ORACLE_BIN=c:\app\oracle\product\12.1.0.2\db_1\bin
ORACLE_HOME=c:\app\oracle\product\12.1.0.2\db_1
ORACLE_SID=neondna4
OS=Windows_NT
Path=C:\APP\ORACLE\Product\12.1.0.2\db_1\bin;C:\Program Files\Common Files\Microsoft Shared\Microsoft Online Services;C:\Program Files (x86)\Common Files\Microsoft Shared\Microsoft Online Services;C:\ProgramData\Oracle\Java\javapath;g:\osi\bank\dll\bin;g:\osi\bank\dll;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Program Files\Microsoft\Web Platform Installer\;C:\Program Files (x86)\Microsoft ASP.NET\ASP.NET Web Pages\v1.0\;C:\Program Files\Microsoft SQL Server\110\Tools\Binn\;C:\Program Files (x86)\nodejs\;C:\Program Files\nodejs\;c:\app\oracle\product\12.1.0.2\db_1\bin;C:\Program Files\Microsoft SQL Server\130\Tools\Binn\;C:\Program Files\Git\cmd;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Users\servacct\.dnx\bin;C:\Users\servacct\AppData\Roaming\npm
PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC
PROCESSOR_ARCHITECTURE=AMD64
PROCESSOR_IDENTIFIER=Intel64 Family 6 Model 142 Stepping 10, GenuineIntel
PROCESSOR_LEVEL=6
PROCESSOR_REVISION=8e0a
ProgramData=C:\ProgramData
ProgramFiles=C:\Program Files
ProgramFiles(x86)=C:\Program Files (x86)
ProgramW6432=C:\Program Files
PROMPT=$P$G
PSModulePath=C:\Windows\system32\WindowsPowerShell\v1.0\Modules\
PUBLIC=C:\Users\Public
RPTS=C:\RPTS
SESSIONNAME=Console
SystemDrive=C:
SystemRoot=C:\Windows
TEMP=C:\TEMP\1
TMP=C:\TEMP\1
TNS_ADMIN=c:\tns_admin
UATDATA=C:\Windows\SysWOW64\CCM\UATData\D9F8C395-CAB8-491d-B8AC-179A1FE1BE77
USERDOMAIN=DNACREATOR
USERNAME=servacct
USERPROFILE=C:\Users\servacct
VBOX_MSI_INSTALL_PATH=C:\Program Files\Oracle\VirtualBox\
VS110COMNTOOLS=C:\Program Files (x86)\Microsoft Visual Studio 11.0\Common7\Tools\
VS140COMNTOOLS=C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\Tools\
windir=C:\Windows
WIX=C:\Program Files (x86)\WiX Toolset v3.9\
```