import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { Runner } from 'src/app/models/runner.model';
import { CacheService } from 'src/app/services/cache.service';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  
  terminalText = '';
  runners: Runner[];
  constructor(private db:DatabaseService,private cache:CacheService) {
    this.writeTerminal('IDE Loaded!')
    this.runners = [];
    this.code = this.db.getTemplateCPP();
    if(this.cache.hasAutoSave()){
      this.code = this.cache.getAutosavedCode();
    }
    if(this.cache.hasAutoSaveRunner()){
      this.runners = this.cache.getAutoSavedRunner();
    }
  }

  ngOnInit(): void {
  }
  code:string;
  theme = 'vs-dark';
  model: CodeModel = {
    language: 'cpp',
    uri: 'main.json',
    value: (this.cache.hasAutoSave()?this.cache.getAutosavedCode():this.db.getTemplateCPP()),
  };
  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    },
    autoClosingBrackets: true,
    fontSize: 16,
    padding: {
      top: 10,
      bottom: 10
    },
    smoothScrolling: true,
    automaticLayout: true,
    dimension: {
      height: window.innerHeight-100,
    }
  };  
  onCodeChanged(value:string) {
    this.code=value;
    this.cache.setAutosavedCode(this.code);
  }


  writeTerminal(terminalTextPassed:string){    
    this.terminalText += "~ % "+terminalTextPassed+'\n';
  }
  addRunner(){
    var id = this.runners.length>0?this.runners[this.runners.length-1]['id']+1:1;
    this.runners.push({
      'id':id,
      'input':'',
      'output':'',
      'expected':'',
      'runIt':false,
    });
    this.writeTerminal("Added Runner #"+id);
    this.cache.setAutoSavedRunner(this.runners);
  }
  runTests(){
    this.writeTerminal("Running on tests....");   
    for(let i=0;i<this.runners.length;i++){
      this.runners[i]['runIt']=true;
    }
  }
  copyCode(){
    this.writeTerminal("Source Code Copied !");
  }

  removeIt(ele:{'id':number;'input':string;'expected':string;}){
    this.runners = this.runners.filter(obj => obj != ele);
    this.writeTerminal("Removed Runner #"+ele['id']);
    this.cache.setAutoSavedRunner(this.runners);    
  }

  finishedRunning(event:Runner,id:number){
    for(let i=0;i<this.runners.length;i++){
      if(this.runners[i]['id']==id){
        this.runners[i]=event;
        this.runners[i]['runIt']=false;
        
      }
    }
    console.log("Stopping Runnner #"+id+", Event: "+event);
    this.cache.setAutoSavedRunner(this.runners);
  }
}
