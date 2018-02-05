import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { RoutineService } from './services/routine.service';

import { AuthenticatedGuard } from './guards/authenticated.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AllRoutinesComponent } from './components/all-routines/all-routines.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditRoutineComponent } from './components/edit-routine/edit-routine.component';
import { SeeRoutineComponent } from './components/see-routine/see-routine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllRoutinesComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    EditRoutineComponent,
    SeeRoutineComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [
    UserService,
    AuthenticationService,
    RoutineService,
    AuthenticatedGuard,
    NotAuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
