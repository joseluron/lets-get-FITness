import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AllRoutinesComponent } from './components/all-routines/all-routines.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'all-routines',
        component: AllRoutinesComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'user-profile',
        component: UserProfileComponent
    },
    {
        path: '**',
        component: HomeComponent
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
