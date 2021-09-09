//Created By C Source File in 09/09/2021 11:21:03:916
let TPM=`
TpmPresent=True
TpmReady=True
TpmEnabled=True
TpmActivated=True
TpmOwned=True
RestartPending=False
ManufacturerId=1095582720
ManufacturerIdTxt=AMDManufacturerVersion=3.42.0.5ManufacturerVersionFull20=3.42.0.5ManagedAuthLevel=Full
OwnerAuth=fmebBeLLHQfgxqnUPN+qwFXJgSw=OwnerClearDisabled=False
AutoProvisioning=Enabled
LockedOut=False
LockoutHealTime=10 minutes
LockoutCount=0
LockoutMax=31
`
let CPU=`
AddressWidth=64
Architecture=9
Availability=3
Caption=AMD64 Family 23 Model 96 Stepping 1
CpuStatus=1
CreationClassName=Win32_Processor
CurrentClockSpeed=3000
CurrentVoltage=12
DataWidth=64
Description=AMD64 Family 23 Model 96 Stepping 1
DeviceID=CPU0
ExtClock=100
Family=107
L2CacheSize=3072
Level=23
LoadPercentage=5
Manufacturer=AuthenticAMD
MaxClockSpeed=3000
Name=AMD Ryzen 5 4600H with Radeon Graphics         
PowerManagementSupported=False
ProcessorId=178BFBFF00860F01
ProcessorType=3
Revision=24577
Role=CPU
SocketDesignation=FP6
Status=OK
StatusInfo=3
Stepping=1
SystemCreationClassName=Win32_ComputerSystem
SystemName=LAPTOP-I7KE6GNQ
UpgradeMethod=6
Version=Model 0, Stepping 1
`
let ROM=`
Access=0
Compressed=False
Description=Local Fixed Disk
DriveType=3
FileSystem=NTFS
FreeSpace=91794591744
MaximumComponentLength=255
MediaType=12
Name=C:
Size=255207665664
SupportsDiskQuotas=True
SupportsFileBasedCompression=True
VolumeName=Windows
VolumeSerialNumber=82E27C2E



Access=0
Compressed=False
Description=Local Fixed Disk
DriveType=3
FileSystem=NTFS
FreeSpace=287472578560
MaximumComponentLength=255
MediaType=12
Name=D:
Size=1000203087872
SupportsDiskQuotas=True
SupportsFileBasedCompression=True
VolumeName=DATA
VolumeSerialNumber=E4C406F6


`
let ROMT=`
MediaType=HDD
FriendlyName=WDC WD10SPSX-60A6WT0
SerialNumber=WD-WX51E49C2065


MediaType=SSD
FriendlyName=SAMSUNG MZVLB256HBHQ-000H1
SerialNumber=0025_3885_01B8_E3C5.

`
let RAM=`
BankLabel=P0 CHANNEL A
Capacity=8589934592
DataWidth=64
Description=Physical Memory
DeviceLocator=Bottom - Slot 1 (left)
FormFactor=12
InterleaveDataDepth=0
InterleavePosition=0
Manufacturer=Samsung
MemoryType=0
Name=Physical Memory
PartNumber=M471A1K43DB1-CWE    
PositionInRow=1
SerialNumber=385827EB
Speed=3200
Tag=Physical Memory 0
TotalWidth=64
TypeDetail=16512
`
let BIOS=`BIOS=UEFI
Secure_Boot_Enabled=True
`
let GPU=`AdapterCompatibility =Advanced Micro Devices, Inc.
AdapterDACType=Internal DAC(400MHz)
AdapterRAM=536870912
Availability=3
Caption=AMD Radeon(TM) Graphics
ConfigManagerErrorCode=0
ConfigManagerUserConfig=False
CreationClassName=Win32_VideoController
Description=AMD Radeon(TM) Graphics
DeviceID=VideoController1
DriverDate=04/23/2021 05:30:00
DriverVersion=27.20.15002.11002
InfFilename=oem72.inf
InfSection=ati2mtag_Renoir
Monochrome=False
Name=AMD Radeon(TM) Graphics
Status=OK
SystemCreationClassName=Win32_ComputerSystem
SystemName=LAPTOP-I7KE6GNQ
VideoArchitecture=5
VideoMemoryType=2
VideoProcessor=AMD Radeon Graphics Processor (0x1636)


AdapterCompatibility =NVIDIA
AdapterDACType=Integrated RAMDAC
AdapterRAM=4293918720
Availability=8
Caption=NVIDIA GeForce GTX 1650
ConfigManagerErrorCode=0
ConfigManagerUserConfig=False
CreationClassName=Win32_VideoController
Description=NVIDIA GeForce GTX 1650
DeviceID=VideoController2
DriverDate=06/09/2021 05:30:00
DriverVersion=27.21.14.6280
InfFilename=oem100.inf
InfSection=Section066
Monochrome=False
Name=NVIDIA GeForce GTX 1650
Status=OK
SystemCreationClassName=Win32_ComputerSystem
SystemName=LAPTOP-I7KE6GNQ
VideoArchitecture=5
VideoMemoryType=2
VideoProcessor=GeForce GTX 1650


`
let DirectX=`    MinFeatureLevel    REG_DWORD    0xc100
    MaxFeatureLevel    REG_DWORD    0xc100
    D3D12MinFeatureLevel    REG_DWORD    0xc100
    D3D12MaxFeatureLevel    REG_DWORD    0xc100
`
