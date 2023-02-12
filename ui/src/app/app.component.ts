import { Component, OnInit } from '@angular/core';
import { AuthService } from './core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'My Business Ledger';
  public isAuthenticated: any;

  constructor(public authService: AuthService) {
    // this.authService.$authenticationState.subscribe(
    //   (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    // );
  }

  async ngOnInit() {
    this.isAuthenticated = await this.authService.getAuthToken();
  }

  async login() {
    //await this.authService.signInWithRedirect();
  }

  async logout() {
   // await this.oktaAuth.signOut();
  }
}
