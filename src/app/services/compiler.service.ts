import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompilerOutput } from '../models/compileroutput.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  constructor(private http: HttpClient, private db: DatabaseService) {

  }

  compileCode(code: string, input: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    const proxy = "https://cors-anywhere.herokuapp.com/";

    return this.http.post<CompilerOutput>(proxy+'https://api.jdoodle.com/v1/execute', {
      'clientId': this.db.getCredentials()[0],
      'clientSecret': this.db.getCredentials()[1],
      'script': code,
      'stdin': input,
      'language': 'cpp14',
      'versionIndex': 3,
    },httpOptions);
  }
  getCredits(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
    const proxy = "https://cors-anywhere.herokuapp.com/";
    return this.http.post<{used:number}>(proxy+'https://api.jdoodle.com/v1/credit-spent',{
      'clientId': this.db.getCredentials()[0],
      'clientSecret': this.db.getCredentials()[1]
    });
  }
}
