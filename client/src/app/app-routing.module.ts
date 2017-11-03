import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AllRoutinesComponent } from './components/all-routines/all-routines.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

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
        path: '**',
        component: HomeComponent
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
