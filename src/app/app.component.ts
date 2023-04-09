import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myauth';
  isAuthenticated$ = this.auth.isAuthenticated$
  constructor(
    public auth: AuthService
  ){

  }

  Login(){
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      }
    });
  }
  handleLogout(): void {
    this.auth.logout({
      // logoutParams: {
      //   returnTo: '/',
      // },
    });
  }
}
