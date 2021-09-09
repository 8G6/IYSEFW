let min={
        "RAM"  : RAM.Capacity.GB  >=4,
        "CPU"  : [
                 CPU.AddressWidth==64,
                 CPU.CurrentClockSpeed>=1000,
                 CPU.NumberOfCores>=2
                ],
        "BIOS" : [
                 BIOS.SecureBoot,  
                 BIOS.BIOS=="UEFI"
                 ],
        "TPM"  : [

                 ]
}
