import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tab=0;
  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
  }
  resetCreds(){
    this.db.resetCredentials();
    location.reload();
  }
}
