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
  likedByUser = false;
  processing = false;

  user: string;

  constructor(
    private routineService: RoutineService,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute
  ) { }

  likeRoutine() {
    this.processing = true;
    this.routineService.likeRoutine(this.activatedRoute.snapshot.params.id).subscribe( data => {
      this.routineService.getRoutine(this.activatedRoute.snapshot.params.id).subscribe(likedRoutine => {
        this.routine = likedRoutine.routine;
        if (this.routine.likedBy.includes(this.user)) {
          this.likedByUser = true;
        } else {
          this.likedByUser = false;
        }
      });
      this.messageClass = 'alert alert-success';
      this.message = data.message;
      setTimeout(() => {
        this.message = undefined;
        this.messageClass = undefined;
        this.processing = false;
      }, 1000);
    });
  }

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
        if (this.routine.likedBy.includes(this.user)) {
          this.likedByUser = true;
        }
      }
    });
  }

}
