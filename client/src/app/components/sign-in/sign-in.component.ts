import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

import { SignInUser } from '../../models/signInUser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  message: string;
  messageClass: string;
  processing = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.createSignInForm();
  }

  createSignInForm() {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
      ])],
      password: ['', Validators.compose([
        Validators.required,
      ])]
    });
  }

  disableSignInForm() {
    this.signInForm.controls['username'].disable();
    this.signInForm.controls['password'].disable();
  }

  enableSignInForm() {
    this.signInForm.controls['username'].enable();
    this.signInForm.controls['password'].enable();
  }

onSignIn() {
  this.processing = true;
  this.disableSignInForm();

  const signInUser: SignInUser = {
    username: this.signInForm.get('username').value,
    password: this.signInForm.get('password').value
  };

  this.authenticationService.signIn(signInUser).subscribe( data => {
    if (!data.success) {
      this.messageClass = 'alert alert-danger';
      this.message = data.message;
      this.processing = false;
      this.enableSignInForm();
    } else {
      this.messageClass = 'alert alert-success';
      this.message = data.message;
      this.authenticationService.storeUserData(data.token, data.user);
      setTimeout(() => {
        this.router.navigate(['/all-routines']);
      }, 2000);
    }
  });
}

  ngOnInit() {
  }

}
