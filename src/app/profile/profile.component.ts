import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(
    private authService: AuthService
  ){

  }
  user$ = this.authService.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));

  ngOnInit() {
    let token = this.authService.getAccessTokenSilently();
    token.subscribe((d) => {
      console.log(d);
    })
    
    
  }
}
