@echo off
powershell $SBE_BOOL = Confirm-SecureBootUEFI;Write-Output "BIOS:=$env:firmware_type`nSecureBoot:=$SBE_BOOL"