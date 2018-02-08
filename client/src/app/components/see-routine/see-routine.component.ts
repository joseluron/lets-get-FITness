import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RoutineService } from '../../services/routine.service';
import { AuthenticationService } from '../../services/authentication.service';

import { DatabaseRoutine } from '../../models/databaseRoutine';

@Component({
  selector: 'app-see-routine',
  templateUrl: './see-routine.component.html',
  styleUrls: ['./see-routine.component.css']
})
export class SeeRoutineComponent implements OnInit {

  routine: DatabaseRoutine;
  message: string;
  messageClass: string;
  loadingPage = true;

  user: string;

  constructor(
    private routineService: RoutineService,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authenticationService.getUserProfile().subscribe(data => {
      this.user = data.user.username;
    });
    this.routineService.getRoutine(this.activatedRoute.snapshot.params.id).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.loadingPage = false;
        this.routine = data.routine;
      }
    });
  }

}
