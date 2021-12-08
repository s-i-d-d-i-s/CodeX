import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/services/cache.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tab=0;
  constructor(private db: DatabaseService,private cache:CacheService) { }

  ngOnInit(): void {
  }
  resetCreds(){
    this.db.resetCredentials();
    location.reload();
  }
  resetAutosave(){
    this.cache.resetAutosavedCode();
    this.cache.resetAutoSavedRunner();
    location.reload();
  }
}
