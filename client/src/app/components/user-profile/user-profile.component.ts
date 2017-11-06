import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: string;
  email: string;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.getUserProfile().subscribe(data => {
      this.username = data.user.username;
      this.email = data.user.email;
    });
  }

}
