import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private db:DatabaseService) { }

  ngOnInit(): void {
  }
  code = '';
  theme = 'vs-dark';
  model: CodeModel = {
    language: 'cpp',
    uri: 'main.json',
    value: this.db.getTemplateCPP(),
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
  }
  resetTemplate(){
    this.db.resetTemplateCPP();
    location.reload();
  }
  setTemplate(){
    this.db.setTemplateCPP(this.code);
    this.model.value = this.db.getTemplateCPP();
    alert('Done!');
    location.reload();  
  }
}
