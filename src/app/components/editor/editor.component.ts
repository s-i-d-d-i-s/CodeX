import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { CacheService } from 'src/app/services/cache.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  
  terminalText = '';
  runners: {'id':number;'input':string;'expected':string;}[];
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
    var id = this.runners.length+1;
    var ip = 'foo';
    var exp = 'boo';
    this.runners.push({
      'id':id,
      'input':ip,
      'expected':exp
    });
    this.writeTerminal("Added Runner #"+id);
    this.cache.setAutoSavedRunner(this.runners);
  }
  runTests(){
    this.writeTerminal("Running on tests....");
  }
  copyCode(){
    this.writeTerminal("Source Code Copied !");
  }
}
