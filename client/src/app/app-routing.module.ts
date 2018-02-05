import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticatedGuard } from './guards/authenticated.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';

import { HomeComponent } from './components/home/home.component';
import { AllRoutinesComponent } from './components/all-routines/all-routines.component';
import { EditRoutineComponent } from './components/edit-routine/edit-routine.component';
import { SeeRoutineComponent } from './components/see-routine/see-routine.component';
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
        component: AllRoutinesComponent,
        canActivate: [AuthenticatedGuard]
    },
    {
        path: 'edit-routine/:id',
        component: EditRoutineComponent,
        canActivate: [AuthenticatedGuard]
    },
    {
        path: 'see-routine/:id',
        component: SeeRoutineComponent,
        canActivate: [AuthenticatedGuard]
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        canActivate: [NotAuthenticatedGuard]
    },
    {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [NotAuthenticatedGuard]
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthenticatedGuard]
    },
    {
        path: '**',
        component: HomeComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
