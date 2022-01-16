import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {}

    canActivate(route: ActivatedRouteSnapshot) {
        const user = this.accountService.logged;
        if (user) {
            // logged in so redirect to dashboard
            return true;
        }

        // not logged
        console.log('Not authorized');
        this.router.navigate(['/login']);
        return false;
    }
}
