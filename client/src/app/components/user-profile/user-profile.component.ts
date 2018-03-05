import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { RoutineService } from '../../services/routine.service';

import { DatabaseRoutine } from '../../models/databaseRoutine';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: string;
  email: string;
  userRoutines: DatabaseRoutine;
  message: string;

  constructor(
    private authenticationService: AuthenticationService,
    private routineService: RoutineService
  ) { }

  ngOnInit() {
    this.authenticationService.getUserProfile().subscribe(data => {
      this.username = data.user.username;
      this.email = data.user.email;
    });
    this.routineService.getAllUserRoutines().subscribe(data => {
      if (!data.hasRoutines) {
        this.message = data.message;
      } else {
        this.userRoutines = data.routines;
      }
    });
  }
}
