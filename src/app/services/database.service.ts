import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getCredentials(){
    var Client_ID = localStorage.getItem('ClientID')==null?'NULL':localStorage.getItem('ClientID');
    var Client_Secret = localStorage.getItem('ClientSecret')==null?'NULL':localStorage.getItem('ClientSecret');
    return [Client_ID,Client_Secret];
  }
  hasCredentials(){
    var creds = this.getCredentials();
    if(creds[0]=='NULL' || creds[1]=='NULL')return false;
    return true;
  }
  setCredentials(clientID:string,clientSecret:string){
    localStorage.setItem('ClientID',clientID);
    localStorage.setItem('ClientSecret',clientSecret);
  }
  setTemplateCPP(template:string){
    localStorage.setItem('template_cpp',template);
  }
  resetTemplateCPP(){
    localStorage.setItem('template_cpp','#include<bits/stdc++.h>\nusing namespace std;\n\n\nint main(){\n\n\n\treturn 0;\n}');
  }
  getTemplateCPP():string{
    var template_cpp = localStorage.getItem('template_cpp')==null?'NULL':localStorage.getItem('template_cpp');
    if(template_cpp=='NULL'){
      return '#include<bits/stdc++.h>\nusing namespace std;\n\n\nint main(){\n\n\n\treturn 0;\n}';
    }
    return template_cpp!;
  }
  resetCredentials(){
    localStorage.removeItem('ClientID');
    localStorage.removeItem('ClientSecret');
  }
}
