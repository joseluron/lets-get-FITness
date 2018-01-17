import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';

import { NewRoutine } from '../../models/newRoutine';

@Component({
  selector: 'app-all-routines',
  templateUrl: './all-routines.component.html',
  styleUrls: ['./all-routines.component.css']
})
export class AllRoutinesComponent implements OnInit {

  routineForm: FormGroup;
  message: string;
  messageClass: string;
  inRoutineForm = false;
  reloadingRoutines = false;
  processing = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createRoutineForm();
  }

  createRoutineForm() {
    this.routineForm = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        this.validateTitle
      ])],
      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(120)
      ])],
      body: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(1000)
      ])]
    });
  }

  disableRoutineForm() {
    this.routineForm.controls['title'].disable();
    this.routineForm.controls['description'].disable();
    this.routineForm.controls['body'].disable();
  }

  enableRoutineForm() {
    this.routineForm.controls['title'].enable();
    this.routineForm.controls['description'].enable();
    this.routineForm.controls['body'].enable();
  }

  validateTitle(controls: FormControl) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'notValidTitle': true };
    }
  }

  openRoutineForm() {
    this.inRoutineForm = true;
  }

  reloadAllRoutines() {
    this.reloadingRoutines = true;
    // Get all routines
    setTimeout(() => {
      this.reloadingRoutines = false;
    }, 4000);
  }

  onCreateRoutine() {
    this.processing = true;
    this.disableRoutineForm();

    const newRoutine: NewRoutine = {
      title: this.routineForm.get('title').value,
      description: this.routineForm.get('description').value,
      body: this.routineForm.get('body').value,
      createdBy: this.authenticationService.authenticatedUser.username
    };
  }

  goBack() {
    window.location.reload();
  }

  draftComment() {

  }

  ngOnInit() {
  }

}
