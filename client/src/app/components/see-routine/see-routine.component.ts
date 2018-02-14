import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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

  routineId: string;
  routine: DatabaseRoutine;
  message: string;
  messageClass: string;
  loadingPage = true;
  likedByUser = false;
  processing = false;
  newCommentForm: FormGroup;

  user: string;

  constructor(
    private routineService: RoutineService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createNewCommentForm();
  }

  createNewCommentForm() {
    this.newCommentForm = this.formBuilder.group({
      comment: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(120),
      ])]
    });
  }

  enableNewCommentForm() {
    this.newCommentForm.get('comment').enable();
  }

  disableNewCommentForm() {
    this.newCommentForm.get('comment').disable();
  }

  likeRoutine() {
    this.processing = true;
    this.routineService.likeRoutine(this.routineId).subscribe(data => {
      this.routineService.getRoutine(this.routineId).subscribe(likedRoutine => {
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

  onCreateComment() {
    this.disableNewCommentForm();
    this.processing = true;
    const newCommentBody = this.newCommentForm.get('comment').value;
    this.routineService.createComment(this.routineId, newCommentBody).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = 'alert alert-success';
        setTimeout(() => {
          this.enableNewCommentForm();
          this.processing = false;
        }, 2000);
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.routineService.getRoutine(this.routineId).subscribe(commentedRoutine => {
            this.routine = commentedRoutine.routine;
          });
          this.message = undefined;
          this.messageClass = undefined;
          this.enableNewCommentForm();
          this.processing = false;
        }, 2000);
      }
    });
  }

  ngOnInit() {
    this.authenticationService.getUserProfile().subscribe(data => {
      this.user = data.user.username;
    });
    this.routineId = this.activatedRoute.snapshot.params.id;
    this.routineService.getRoutine(this.routineId).subscribe(data => {
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
