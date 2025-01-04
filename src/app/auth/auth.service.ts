import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return this.http.post<string>('http://localhost:8080/api/users/login', {
            email: email,
            password: password
        })
    }

    register(email: string, password: string) {
        return this.http.post<string>('http://localhost:8080/api/users/register', {
            email: email,
            password: password
        })
    }
}