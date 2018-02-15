import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';

import { NewRoutine } from '../models/newRoutine';
import { ToEditRoutine } from '../models/toEditRoutine';

@Injectable()
export class RoutineService {

  uri = this.authenticationService.uri;

  requestOptions: RequestOptions;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  createAuthenticationHeaders() {
    this.authenticationService.loadToken();
    this.requestOptions = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'token': this.authenticationService.authenticatedToken
      })
    });
  }

  createRoutine(newRoutine: NewRoutine) {
    this.createAuthenticationHeaders();
    return this.http.post(this.uri + '/routines/createRoutine', newRoutine, this.requestOptions).map(res => res.json());
  }

  getAllRoutines() {
    this.createAuthenticationHeaders();
    return this.http.get(this.uri + '/routines/getAllRoutines', this.requestOptions).map(res => res.json());
  }

  getRoutine(id: string) {
    this.createAuthenticationHeaders();
    return this.http.get(this.uri + '/routines/getRoutine/' + id, this.requestOptions).map(res => res.json());
  }

  getRoutineToEdit(id: string) {
    this.createAuthenticationHeaders();
    return this.http.get(this.uri + '/routines/getRoutineToEdit/' + id, this.requestOptions).map(res => res.json());
  }

  editRoutine(routine: ToEditRoutine) {
    this.createAuthenticationHeaders();
    return this.http.put(this.uri + '/routines/editRoutine', routine, this.requestOptions).map(res => res.json());
  }

  deleteRoutine(id: string) {
    this.createAuthenticationHeaders();
    return this.http.delete(this.uri + '/routines/deleteRoutine/' + id, this.requestOptions).map(res => res.json());
  }

  likeRoutine(id: string) {
    this.createAuthenticationHeaders();
    const routineId = { _id: id };
    return this.http.put(this.uri + '/routines/likeRoutine', routineId, this.requestOptions).map(res => res.json());
  }

  createComment( _id: string, comment: string) {
    this.createAuthenticationHeaders();
    const newComment = {
      _id: _id,
      comment: comment
    };
    return this.http.post(this.uri + '/routines/createComment', newComment, this.requestOptions).map(res => res.json());
  }

}
