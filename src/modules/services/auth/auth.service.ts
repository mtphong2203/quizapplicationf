import { Observable, tap } from "rxjs";
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
    private accessToken!: string;

    constructor(private http: HttpClient) {
        this.accessToken = localStorage.getItem('accessToken') || '';
    }

    public isAuthenticated(): boolean {
        return !!this.accessToken;
    }

    public isManager(): boolean {
        const userInformation = JSON.parse(
            localStorage.getItem('userInformation')?.toString() || ''
        );

        const roles = userInformation.roles;

        if (roles?.includes('Admin') || roles?.includes('Manager')) {
            return true;
        }
        return false;
    }

    public getAccessToken(): string {
        return this.accessToken;
    }

    login(param: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, param).pipe(
            tap((result: any) => {
                const token = result.accessToken;
                if (token) {
                    localStorage.setItem('accessToken', token);
                    const userInformation = JSON.stringify(result.userInformationDTO);
                    localStorage.setItem('userInformation', userInformation);
                }
            })
        );
    }
    register(param: string): Observable<RegisterRequest> {
        return this.http.post<RegisterRequest>(`${this.apiUrl}/register`, param);
    }


}