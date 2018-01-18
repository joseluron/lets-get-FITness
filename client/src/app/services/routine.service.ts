import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';

import { NewRoutine } from '../models/newRoutine';

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

}
