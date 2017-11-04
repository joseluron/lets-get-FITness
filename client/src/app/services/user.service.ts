import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { NewUser } from '../models/newUser';

@Injectable()
export class UserService {

  uri = 'http://localhost:8080';

  constructor(
    private http: Http
  ) { }

  createUser(user: NewUser) {
    return this.http.post(this.uri + '/users/createUser', user).map(res => res.json());
  }

  checkUsernameAvailability(username: string) {
    return this.http.get(this.uri + '/users/checkUsernameAvailability/' + username).map(res => res.json());
  }

  checkEmailAvailability(email: string) {
    return this.http.get(this.uri + '/users/checkEmailAvailability/' + email).map(res => res.json());
  }

}
