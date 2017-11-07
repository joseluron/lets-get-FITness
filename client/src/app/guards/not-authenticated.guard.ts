import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class NotAuthenticatedGuard implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivate() {
        if (this.authenticationService.userSignedIn()) {
            this.router.navigate(['/home']);
            return false;
        } else {
            return true;
        }
    }
}
