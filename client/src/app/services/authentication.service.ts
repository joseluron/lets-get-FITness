import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { SignInUser } from '../models/signInUser';
import { LocalStorageUser } from '../models/localStorageUser';

@Injectable()
export class AuthenticationService {

  uri = 'http://localhost:8080';

  authenticatedToken: string;
  authenticatedUser: LocalStorageUser;

  constructor(
    private http: Http
  ) { }

  signIn(user: SignInUser) {
    return this.http.post(this.uri + '/authentication/sign-in', user).map(res => res.json());
  }

  storeUserData(token: string, user: LocalStorageUser) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authenticatedToken = token;
    this.authenticatedUser = user;
  }

}
