import { Observable } from "rxjs";
import { LoginResponse } from "../../../models/auth/login-response.model";
import { RegisterRequest } from "../../../models/auth/register-request.model";

export interface IAuthService {
    login(param: string): Observable<LoginResponse>;

    isAuthenticated(): Observable<boolean>;

    getUserInformation(): Observable<any>;

    isManager(): boolean;

    getAccessToken(): string;

    logout(): void;

    register(param: string): Observable<RegisterRequest>


}