void show()
{
    printf("\n\nOpening Results\n");
    system("\"C:\\Program Files\\IYSEFW\\HTML5\\index.html\"");
    printf("\n");
}

int pipe(char* cmd,char* Path,char* var)
{
    FILE *JSFile;     
    FILE *Terminal;
    char path[PATH_MAX];
    char str[4000];
    int i;
    for(i=0;i<strlen(str);i++){str[i]=0;}

    JSFile   = fopen(Path, "w");
    Terminal = popen(cmd, "r");

    strcat(str,var);
    strcat(str,"=`");

    if (Terminal == NULL){
        printf("Pipeline Error");
    }

    while (fgets(path, PATH_MAX, Terminal) != NULL)
        strcat(str,path);
        
    strcat(str,"`");
    fputs(str,JSFile);
    fclose(JSFile);
    printf("%s",str);
    pclose(Terminal);
    show();
}


