#include "headers/head.c"

int main()
{ 
    clear(Path);
    pipe(tpm_cmd,  "TPM",     "\nTrusted Platform Module ");
    pipe(cpu_cmd,  "CPU",     "\nCPU ");
    pipe(rom_cmd,  "ROM",     "\nMain ROM ");
    pipe(romt_cmd, "ROMT",     "\nAdiitional ROM ");
    pipe(ram_cmd,  "RAM",     "\nRAM ");
    pipe(bios_cmd, "BIOS",    "\nBIOS ");
    pipe(gpu_cmd,  "GPU",     "\nGPU ");
    pipe(dx_cmd  , "DirectX", "\nDirectX ");
    show();
}



