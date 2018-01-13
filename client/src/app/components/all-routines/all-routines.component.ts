import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-routines',
  templateUrl: './all-routines.component.html',
  styleUrls: ['./all-routines.component.css']
})
export class AllRoutinesComponent implements OnInit {

  message: string;
  messageClass: string;
  newRoutine = false;
  reloadingRoutines = false;

  constructor() { }

  newRoutineForm() {
    this.newRoutine = true;
  }

  reloadAllRoutines() {
    this.reloadingRoutines = true;
    // Get all routines
    setTimeout(() => {
      this.reloadingRoutines = false;
    }, 4000);
  }

  draftComment() {

  }

  ngOnInit() {
  }

}
