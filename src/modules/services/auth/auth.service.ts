import { Observable } from "rxjs";
import { IAuthService } from "./auth.interface";
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from "../../../models/auth/login-response.model";
import { RegisterRequest } from "../../../models/auth/register-request.model";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class AuthService implements IAuthService {

    public apiUrl: string = 'http://localhost:8080/api/manager/auth';
    constructor(private http: HttpClient) { }
    login(param: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, param);
    }
    register(param: string): Observable<RegisterRequest> {
        return this.http.post<RegisterRequest>(`${this.apiUrl}/register`, param);
    }


}