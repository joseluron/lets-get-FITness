import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private formBuilder: FormBuilder
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
}

  ngOnInit() {
  }

}
