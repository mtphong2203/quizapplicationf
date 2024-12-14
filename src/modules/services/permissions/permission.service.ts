import { Inject, Injectable } from "@angular/core";
import { IPermissionService } from "./permission.interface";
import { AUTH_SERVICE } from "../../../constants/injection.constant";
import { IAuthService } from "../auth/auth.interface";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PermissionService implements IPermissionService {

    constructor(@Inject(AUTH_SERVICE) private authService: IAuthService, private router: Router) { }

    isUnauthenticated(): boolean {
        this.authService.isAuthenticated().subscribe((res) => {
            if (res) {
                return false;
            }
            return true;
        });
        return true;
    }

    canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            if (this.authService.isManager()) {
                return true;
            } else {
                this.router.navigate(['/error/403']);
                return false;
            }
        }
        this.router.navigate(['/auth/login']);
        return false;
    }

}