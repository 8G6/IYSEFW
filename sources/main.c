#include "head.c"

int main()
{ 
    clear(path);
    pipe(tpm_cmd,path,tpm_name);
    pipe(cpu_cmd,path,cpu_name);
    pipe(rom_cmd,path,rom_name);
    pipe(ram_cmd,path,ram_name);
    pipe(bios_cmd,path,bios_name);
    pipe(dx_cmd,path,dx_name);
    show();
}



