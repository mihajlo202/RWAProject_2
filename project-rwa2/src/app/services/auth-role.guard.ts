import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { LoggedUser } from "../models/LoggedUser";
import { AppState } from "../store";
import { selectLoggedUser } from "../store/auth/auth.selectors";

@Injectable({ providedIn: 'root' })
export class AuthRoleGuard implements CanActivate {
    loggedUser: LoggedUser;
    constructor(private store: Store<AppState>,
        private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        this.store.select(selectLoggedUser).subscribe((val)=> {
            this.loggedUser = val;
        })
        if(this.loggedUser && this.loggedUser.role === route.data.role)
            return true;
        this.router.navigate(['./main']);
        return false;
    }
}