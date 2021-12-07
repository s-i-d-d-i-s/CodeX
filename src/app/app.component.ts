import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeX';
  hasCred=false;
  _clientID = '';
  _clientSecret = '';
  constructor(private database:DatabaseService){
    this.hasCred = database.hasCredentials();
  }
  setCred(){
    this.database.setCredentials(this._clientID,this._clientSecret);
    alert("Done !");
    this.hasCred = this.database.hasCredentials();
  }
  resetCred(){
    this.database.resetCredentials();
    this.hasCred = this.database.hasCredentials();
  }
}
