import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  onSignOut() {
    this.authenticationService.signOut();
    this.flashMessagesService.show('Ha cerrado su sesión', { cssClass: 'alert-info' });
  }

  ngOnInit() {
  }

}
