import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivate() {
        if (this.authenticationService.userSignedIn()) {
            return true;
        } else {
            this.router.navigate(['/sign-in']);
            return false;
        }
    }
}
