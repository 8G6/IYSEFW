
int pipe(char* cmd,char* Path,char* var)
{
    FILE *JSFile;     
    FILE *Terminal;
    char path[PATH_MAX];
    char str[500];
    int i;
    char copy[PATH_MAX];
    for(i=0;i<500;i++){str[i]=0;}

    JSFile   = fopen(Path, "a+");
    Terminal = popen(cmd, "r");

    fputs("let ",JSFile);
    fputs(var,JSFile);
    fputs("=`",JSFile);

    if (Terminal == NULL){
        printf("Pipeline Error");
    }
    
    while(fgets(path,PATH_MAX,Terminal)!=NULL)
    {
        fputs(path,JSFile);
    }
    
    fputs("`\n\n",JSFile);
    fclose(JSFile);
    return pclose(Terminal);
}

