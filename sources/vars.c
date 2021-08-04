
#include <string.h>

char* path  = "C:\\Program Files\\IYSEFW\\HTML5\\js\\info.js";
char* name  = "SYS_INFO";
char*  cmd  = "echo  ~\
               && wmic /namespace:\\\\root\\CIMV2\\Security\\MicrosoftTpm path Win32_Tpm get /value \
               && echo ~ \
               && wmic cpu list full\
               && echo  ~ \
               && powershell \"Get-PhysicalDisk | Select FriendlyName, MediaType , Size ,HealthStatus\" && wmic logicaldisk get freespace,caption \
               && echo ~ \
               && wmic MEMORYCHIP list full\
               && echo  ~ \
               && powershell $SBE_BOOL = Confirm-SecureBootUEFI ;Write-Output \"BIOS=$env:firmware_type`nSecure_Boot_Enabled=$SBE_BOOL\" \
               && echo  ~ \
               && Reg Query \"HKLM\\Software\\Microsoft\\DirectX\" | findstr \"12 Ver\"";






