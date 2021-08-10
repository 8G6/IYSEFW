
int pipe(char* cmd,char* Path,char* var)
{
    FILE *JSFile;     
    FILE *Terminal;
    char path[PATH_MAX];
    char str[4000];
    int i;
    char path2[PATH_MAX];
    for(i=0;i<4000;i++){str[i]=0;}

    JSFile   = fopen(Path, "a+");
    Terminal = popen(cmd, "r");

    strcat(str,"let ");
    strcat(str,var);
    strcat(str,"=`");

    if (Terminal == NULL){
        printf("Pipeline Error");
    }
    
    while(fgets(path,PATH_MAX,Terminal)!=NULL)
    {
        strcpy(path2,path);
        strcat(str,path);
        printf("%s",path2);
    }
    
    strcat(str,"`;");
    fputs(str,JSFile);
    fclose(JSFile);
    return pclose(Terminal);
}

