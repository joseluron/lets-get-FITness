import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

    redirectUri: string;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivate(
        activatedRouteSnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot
    ) {
        if (this.authenticationService.userSignedIn()) {
            return true;
        } else {
            this.redirectUri = routerStateSnapshot.url;
            this.router.navigate(['/sign-in']);
            return false;
        }
    }
}
