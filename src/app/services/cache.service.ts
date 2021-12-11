import { Injectable } from '@angular/core';
import { Runner } from '../models/runner.model';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() {

  }
  hasAutoSave():boolean{
    var result = localStorage.getItem('hasAutosave');
    if(result==null){
      return false;
    }
    return true;
  }

  hasAutoSaveRunner():boolean{
    var result = localStorage.getItem('hasAutoSaveRunner');
    if(result==null){
      return false;
    }
    return true;
  }

  getAutoSavedRunner():Runner[]{
    return JSON.parse(localStorage.getItem('autoSaveRunner')!);
  }

  getAutosavedCode():string{
    return localStorage.getItem('autoSaveCode')!;
  }

  setAutosavedCode(code:string){
    localStorage.setItem('autoSaveCode',code);
    localStorage.setItem('hasAutosave','true');
  }

  setAutoSavedRunner(runners:Runner[]){
     localStorage.setItem('autoSaveRunner',JSON.stringify(runners));
     localStorage.setItem('hasAutoSaveRunner','true');
  }

  resetAutoSavedRunner(){
    localStorage.removeItem('hasAutoSaveRunner');
  }

  resetAutosavedCode(){
    localStorage.removeItem('hasAutosave');
  }
}
