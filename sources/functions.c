void show()
{
    printf("\n\nOpening Results\n");
    system("\"C:\\Program Files\\IYSEFW\\HTML5\\index.html\"");
    printf("\n");
}

void timestamp(){
    
    SYSTEMTIME t;
    GetLocalTime(&t);

    int arr[]={t.wDay,t.wMonth,t.wYear,t.wHour,t.wMinute,t.wSecond,t.wMilliseconds};

    for(i=0;i<50;i++){str[i]=0;}
    
    for(i=0;i<7;i++){
      sprintf(temp, "%d", arr[i]);
      len=strlen(temp); 
      len==1      && strcat(str,"0");
      strcat(str,temp);
      i==2        && strcat(str," ");
      i<2         && strcat(str,"/");
      i>2 && i<6  && strcat(str,":");
    }
}

void clear(char* Path){
    FILE *JS;
    JS = fopen("C:\\Program Files\\IYSEFW\\HTML5\\js\\info.js", "w");
    fputs("//  Created By C Source File in ",JS);
    timestamp();
    fputs(str,JS);
    fputs("\n",JS);
    fclose(JS);
}