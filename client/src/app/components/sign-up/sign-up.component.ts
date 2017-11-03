import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
    console.log(this.signUpForm);
  }

  ngOnInit() {
  }

}
