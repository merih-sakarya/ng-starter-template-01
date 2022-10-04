import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AuthenticationService } from '@core/services/authentication.service';
import { LoginRequestModel } from '@shared/models/http/request/auth/login-request.model';

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // prettier-ignore
  loginForm = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null, [Validators.required])
  });

  isLoadingSignIn = false;

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onFormSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginForm = this.loginForm.value;
    this.authService
      .login(new LoginRequestModel(loginForm.email!, loginForm.password!))
      .pipe(untilDestroyed(this))
      .subscribe({
        next: () => {
          this.isLoadingSignIn = false;
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          console.log('Error while logging into the account. Error : ', err);
          this.isLoadingSignIn = false;
        }
      });
  }
}
