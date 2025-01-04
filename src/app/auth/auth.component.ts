import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from "./auth.service";
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    imports: [FormsModule, NgIf]
})
export class AuthComponent {
    isLoginMode = true;
    error: string = '';

    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        if (this.isLoginMode) {
            this.authService.login(email, password).subscribe(resData => {
                console.log(resData);
            }, errorRes => {
                console.log(errorRes);
                this.error = errorRes.error;
            });
        } else {
            this.authService.register(email, password).subscribe(resData => {
                console.log(resData);
            }, errorRes => {
                console.log(errorRes);
                this.error = errorRes.error;
            });
        }
        form.reset();
    }
}