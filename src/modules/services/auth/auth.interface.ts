import { Observable } from "rxjs";
import { LoginResponse } from "../../../models/auth/login-response.model";
import { RegisterRequest } from "../../../models/auth/register-request.model";

export interface IAuthService {
    login(param: string): Observable<LoginResponse>;

    register(param: string): Observable<RegisterRequest>
}