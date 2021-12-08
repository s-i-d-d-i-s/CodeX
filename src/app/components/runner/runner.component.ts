import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {
  
  @Input('id')
  id!: number;
  @Input('code')
  code!: string;
  @Input('input')
  input!:string
  @Input('expected')
  expected!:string
  
  verd = 0;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
