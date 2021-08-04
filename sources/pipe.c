void show()
{
    printf("\n\nOpening Results\n");
    system("\"C:\\Program Files\\IYSEFW\\HTML5\\index.html\"");
    printf("\n");
}

int pipe(char* cmd,char* Path,char* var)
{
    FILE *FP;
    FILE *fp;
    char path[PATH_MAX];
    char str[4000];
    int i;
    for(i=0;i<strlen(str);i++){str[i]=0;}

    FP = fopen(Path, "w");
    fp = popen(cmd, "r");

    strcat(str,var);
    strcat(str,"=`");

    if (fp == NULL){
        printf("Pipeline Error");
    }

    while (fgets(path, PATH_MAX, fp) != NULL)
        strcat(str,path);
        
    strcat(str,"`");
    fputs(str,FP);
    fclose(FP);
    printf("%s",str);
    pclose(fp);
    show();
}


//IYSEFW IS YOUR SYSTEM ENOUGH FOR Windows 11
