import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private baseUrl = environment.apiUrl;
    
    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return this.http.post<string>(this.baseUrl + '/api/users/login', {
            email: email,
            password: password
        })
    }

    register(email: string, password: string) {
        return this.http.post<string>(this.baseUrl + '/api/users/register', {
            email: email,
            password: password
        })
    }
}