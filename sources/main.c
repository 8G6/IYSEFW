#include "head.c"

int main()
{ 
    clear(path);
    int a = pipe(tpm_cmd,path,tpm_name);
    int b = pipe(cpu_cmd,path,cpu_name);
    int c = pipe(rom_cmd,path,rom_name);
    int d = pipe(ram_cmd,path,ram_name);
    int e = pipe(bios_cmd,path,bios_name);
    int f = pipe(dx_cmd,path,dx_name);
    int arr[] = {a,b,c,d,e,f};
    for(i=0;i<6;i++){
    check(arr[i],string[i]);
    }
    show();
}



