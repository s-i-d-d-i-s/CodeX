import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private db:DatabaseService) { }

  ngOnInit(): void {
  }
  code = this.db.getTemplateCPP();
  theme = 'vs-dark';
  model: CodeModel = {
    language: 'cpp',
    uri: 'main.json',
    value: this.db.getTemplateCPP()
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
}
