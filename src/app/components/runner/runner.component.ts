import { Component, EventEmitter, Input, OnInit, Output,OnChanges, SimpleChanges } from '@angular/core';
import { Runner } from 'src/app/models/runner.model';
import { CompilerService } from 'src/app/services/compiler.service';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit, OnChanges {
  
  @Input('id')
  id!: number;
  @Input('code')
  code!: string;
  @Input('input')
  input!:string
  @Input('output')
  output!:string  
  @Input('expected')
  expected!:string
  @Input('runIt')
  runIt!:boolean
  
  @Output('delete')
  deleteIt = new EventEmitter<boolean>();

  @Output('update')
  update = new EventEmitter<Runner>();

  verd = 0;

  constructor(private compiler:CompilerService) {
    
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.runIt){
      console.log("Running Runner # " + this.id);
      setTimeout(()=>{        
        this.compiler.compileCode(this.code,this.input).subscribe(
          (response)=>{
            console.log(response);
            this.output = response['output'];          
            this.updateRunner();
          }
        )        
      },2000);
    }else{
      console.log("Not Running Runner # "+this.id);
    }
    this.getDiff();
  }
  deleteRunner(){
    this.deleteIt.emit(true);
  }
  updateRunner(){
    const obj = {
      'id':this.id,
      'input': this.input,
      'output': this.output,
      'expected': this.expected,
      'code':this.code,
      'runIt': this.runIt
    }
    this.update.emit(obj);
  }  

  getDiff(){
    if(this.output.trim()==this.expected.trim()){
      this.verd=1;
    }else{
      this.verd=2;
    }
    if(this.output.length==0){
      this.verd=0;
    }
  }
}
