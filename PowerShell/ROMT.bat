@echo off
powershell "$s=Get-PhysicalDisk;foreach ($i in $s){write-host `n'MediaType':=$($i.MediaType)`n'FriendlyName':=$($i.FriendlyName)`n'SerialNumber':=$($i.SerialNumber)`n}"