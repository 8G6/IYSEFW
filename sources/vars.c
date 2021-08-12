#define S 6
#define L 40

char string[S][L] ={   
                    "\nTrusted Platform Module ",
                    "\nCentral Pocessing Unit Specs ",
                    "\nRead Only Memory Specs ",
                    "\nBIOS Specs ",
                    "\nDirectX Specs "
                   };

char* path = "C:\\Program Files\\IYSEFW\\HTML5\\js\\info.js";

char* tpm_cmd   = "wmic /namespace:\\\\root\\CIMV2\\Security\\MicrosoftTpm path Win32_Tpm get /value";
char* cpu_cmd   = "wmic cpu list full";
char* rom_cmd   = "powershell \"Get-PhysicalDisk | Select FriendlyName, MediaType , Size ,HealthStatus\" && wmic logicaldisk get freespace,caption";
char* ram_cmd   = "wmic MEMORYCHIP list full";
char* bios_cmd  = "powershell $SBE_BOOL = Confirm-SecureBootUEFI ;Write-Output \"BIOS=$env:firmware_type`nSecure_Boot_Enabled=$SBE_BOOL";
char* dx_cmd    = "Reg Query HKLM\\Software\\Microsoft\\DirectX | findstr  FeatureLevel";

char* tpm_name  = "TPM";
char* cpu_name  = "CPU";
char* rom_name  = "ROM";
char* ram_name  = "RAM";
char* bios_name = "BIOS";
char* dx_name   = "DirectX";

int i;
int len;
char str[50];
char temp[50];


