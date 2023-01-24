import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://localhost:8080/api/auth';

    public userLoggedIn = false;

    constructor(private http: HttpClient) {}

    auth(credentials: any): Observable<any> {
        return this.http.post(this.baseUrl, credentials).pipe(map(data => {
            if (data) {
                this.userLoggedIn = true;
            } else {
                return false;
            }
        }));
    }

}

