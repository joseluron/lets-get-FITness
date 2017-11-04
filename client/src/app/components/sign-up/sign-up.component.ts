import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

import { NewUser } from '../../models/newUser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  message: string;
  messageClass: string;
  processing = false;
  usernameAvailable: boolean;
  usernameMessage: string;
  emailAvailable: boolean;
  emailMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.createSignUpForm();
  }

  createSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(18),
        this.validateUsername
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validateEmail
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ])],
      equivalentPassword: ['', Validators.compose([
        Validators.required
      ])]
    }, { validator: this.comparePasswords('password', 'equivalentPassword') });
  }

  disableSignUpForm() {
    this.signUpForm.controls['username'].disable();
    this.signUpForm.controls['email'].disable();
    this.signUpForm.controls['password'].disable();
    this.signUpForm.controls['equivalentPassword'].disable();
  }

  enableSignUpForm() {
    this.signUpForm.controls['username'].enable();
    this.signUpForm.controls['email'].enable();
    this.signUpForm.controls['password'].enable();
    this.signUpForm.controls['equivalentPassword'].enable();
  }

  validateUsername(controls: FormControl) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'notValidUsername': true };
    }
  }

  validateEmail(controls: FormControl) {
    // tslint:disable-next-line:max-line-length
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'notValidEmail': true };
    }
  }

  comparePasswords(password: string, equivalentPassword: string) {
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[equivalentPassword].value) {
        return null;
      } else {
        return { 'notEquivalentPasswords': true };
      }
    };
  }

  onSignUp() {
    this.processing = true;
    this.disableSignUpForm();

    const newUser: NewUser = {
      username: this.signUpForm.get('username').value,
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('password').value,
    };

    this.userService.createUser(newUser).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
        this.enableSignUpForm();
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/sign-in']);
        }, 2000);
      }
    });
  }

  checkUsernameAvailability() {
    const username = this.signUpForm.get('username').value;

    if (username) {
      this.userService.checkUsernameAvailability(username).subscribe(data => {
        if (!data.success) {
          this.usernameAvailable = false;
          this.usernameMessage = data.message;
        } else {
          this.usernameAvailable = true;
          this.usernameMessage = data.message;
        }
      });
    }
  }

  checkEmailAvailability() {
    const email = this.signUpForm.get('email').value;

    if (email) {
      this.userService.checkEmailAvailability(email).subscribe(data => {
        if (!data.success) {
          this.emailAvailable = false;
          this.emailMessage = data.message;
        } else {
          this.emailAvailable = true;
          this.emailMessage = data.message;
        }
      });
    }
  }

  onUsernameChange() {
    this.usernameMessage = '';
  }

  onEmailChange() {
    this.emailMessage = '';
  }

  ngOnInit() {
  }

}
