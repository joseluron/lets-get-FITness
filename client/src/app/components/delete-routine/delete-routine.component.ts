import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RoutineService } from '../../services/routine.service';

import { DatabaseRoutine } from '../../models/databaseRoutine';

@Component({
  selector: 'app-delete-routine',
  templateUrl: './delete-routine.component.html',
  styleUrls: ['./delete-routine.component.css']
})
export class DeleteRoutineComponent implements OnInit {

  message: string;
  messageClass: string;
  foundRoutine = false;
  processing = false;
  routine: DatabaseRoutine;
  routineId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private routineService: RoutineService,
    private location: Location
  ) { }

  goBack() {
    this.location.back();
  }

  onDeleteRoutine() {
    this.processing = true;
    this.routineService.deleteRoutine(this.routineId).subscribe(data => {
      if (!data.success) {
        this.processing = false;
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/all-routines']);
        }, 2000);
      }
    });
  }

  ngOnInit() {
    this.routineId = this.activatedRoute.snapshot.params.id;
    this.routineService.getRoutineToEdit(this.routineId).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.routine = data.routine;
        this.foundRoutine = true;
      }
    });
  }

}
