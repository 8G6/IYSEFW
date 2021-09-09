@echo off
powershell $SBE_BOOL = Confirm-SecureBootUEFI;Write-Output "BIOS:=$env:firmware_type`nSecure_Boot_Enabled:=$SBE_BOOL"