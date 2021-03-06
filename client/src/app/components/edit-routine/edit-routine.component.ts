import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RoutineService } from '../../services/routine.service';

import { ToEditRoutine } from '../../models/toEditRoutine';

@Component({
  selector: 'app-edit-routine',
  templateUrl: './edit-routine.component.html',
  styleUrls: ['./edit-routine.component.css']
})
export class EditRoutineComponent implements OnInit {

  message: string;
  messageClass: string;
  editRoutineForm: FormGroup;
  routine: ToEditRoutine;
  routineId: string;
  loadingPage = true;
  processing = false;

  constructor(
    private routineService: RoutineService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.createEditRoutineForm();
  }

  createEditRoutineForm() {
    this.editRoutineForm = this.formBuilder.group({
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

  disableEditRoutineForm() {
    this.editRoutineForm.controls['title'].disable();
    this.editRoutineForm.controls['description'].disable();
    this.editRoutineForm.controls['body'].disable();
  }

  enableEditRoutineForm() {
    this.editRoutineForm.controls['title'].enable();
    this.editRoutineForm.controls['description'].enable();
    this.editRoutineForm.controls['body'].enable();
  }

  validateTitle(controls: FormControl) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'notValidTitle': true };
    }
  }

  onUpdateRoutine() {
    this.processing = true;

    const toEditRoutine: ToEditRoutine = {
      _id: this.routineId,
      title: this.editRoutineForm.get('title').value,
      description: this.editRoutineForm.get('description').value,
      body: this.editRoutineForm.get('body').value
    };

    this.routineService.editRoutine(toEditRoutine).subscribe(data => {
      if (!data.success) {
        this.processing = false;
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/see-routine', this.routineId]);
        }, 2000);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.routineId = this.activatedRoute.snapshot.params.id;
    this.routineService.getRoutineToEdit(this.routineId).subscribe( data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.loadingPage = false;
        this.editRoutineForm.controls['title'].setValue(data.routine.title);
        this.editRoutineForm.controls['description'].setValue(data.routine.description);
        this.editRoutineForm.controls['body'].setValue(data.routine.body);
      }
    });
  }

}
