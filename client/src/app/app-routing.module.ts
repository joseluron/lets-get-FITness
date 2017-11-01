import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AllRoutinesComponent } from './components/all-routines/all-routines.component';

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
        path: '**',
        component: HomeComponent
    },
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(appRoutes) ],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
})

export class AppRoutingModule { }
