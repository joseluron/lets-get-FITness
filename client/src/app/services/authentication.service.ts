import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import { SignInUser } from '../models/signInUser';
import { LocalStorageUser } from '../models/localStorageUser';

@Injectable()
export class AuthenticationService {

  // uri = 'http://localhost:8080/';
  uri = '';

  authenticatedToken: string;
  authenticatedUser: LocalStorageUser;
  requestOptions: RequestOptions;

  constructor(
    private http: Http
  ) { }

  createAuthenticationHeaders() {
    this.loadToken();
    this.requestOptions = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'token': this.authenticatedToken
      })
    });
  }

  loadToken() {
    this.authenticatedToken = localStorage.getItem('token');
  }

  signOut() {
    this.authenticatedToken = null;
    this.authenticatedUser = null;
    localStorage.clear();
  }

  signIn(user: SignInUser) {
    return this.http.post(this.uri + '/authentication/sign-in', user).map(res => res.json());
  }

  storeUserData(token: string, user: LocalStorageUser) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authenticatedToken = token;
    this.authenticatedUser = user;
  }

  getUserProfile() {
    this.createAuthenticationHeaders();
    return this.http.get(this.uri + '/authentication/getUserProfile', this.requestOptions).map(res => res.json());
  }

  userSignedIn() {
    return tokenNotExpired();
  }

}
