import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { CacheService } from 'src/app/services/cache.service';
import { CompilerService } from 'src/app/services/compiler.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tab = 0;
  creditsUsed = 0;
  sub: Subscription;
  constructor(private db: DatabaseService, private cache: CacheService, private comp: CompilerService) {
    this.comp.getCredits().subscribe(
      (response)=>{
        this.creditsUsed = response['used'];
      }
    )
    this.sub = interval(15000).subscribe((val) => {
      this.comp.getCredits().subscribe(
        (response) => {
          this.creditsUsed = response['used'];
        }
      )
    });
  }

  ngOnInit(): void {
  }
  resetCreds() {
    this.db.resetCredentials();
    location.reload();
  }
  resetAutosave() {
    this.cache.resetAutosavedCode();
    this.cache.resetAutoSavedRunner();
    location.reload();
  }
  redirectToGithub() {
    window.open('https://www.github.com/s-i-d-d-i-s', '_blank');
  }
}
