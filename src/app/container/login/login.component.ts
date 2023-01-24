import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public credentials: any = {};

    public loginError = false;

    constructor(public auth: AuthService) {}

    ngOnInit(): void {
        
    }

    loginUser() {
        if (this.credentials.username && this.credentials.password) {
            this.auth.auth(this.credentials).subscribe(data => {
                if (data === false) {
                    this.loginError = true;
                }
            });
        }
    }
}
