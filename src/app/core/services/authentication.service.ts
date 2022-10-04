import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { environment } from '@env/environment';

import { UserContextUtil } from '@shared/utils/user-context.util';
import { AuthContextUtil } from '@shared/utils/auth-context.util';

import { UserService } from './user.service';
import { StorageService } from './local-storage.service';

import { AuthContextModel } from '@shared/models/security/auth-context.model';
import { UserResponseModel } from '@shared/models/http/response/user/user-response.model';
import { LoginRequestModel } from '@shared/models/http/request/auth/login-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = `${environment.apiUrl}/${environment.apiVersion}`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private storageService: StorageService
  ) {}

  login(loginRequestModel: LoginRequestModel) {
    return this.http.post<AuthContextModel>(`${this.apiUrl}/token`, loginRequestModel).pipe(
      tap((authContext: AuthContextModel) => {
        // Set AuthContext.
        AuthContextUtil.setAuthContext(authContext);
      }),
      switchMap(() =>
        this.userService.getUser().pipe(
          tap((userContext: UserResponseModel) => {
            // Set UserContext.
            UserContextUtil.setUserContext(userContext);
          })
        )
      )
    );
  }

  logout() {
    this.storageService.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // TODO: In this section, checks such as whether there is a token
    // and whether the token is still valid should be made.
    if (AuthContextUtil.getAuthContext()) {
      return true;
    }
    return false;
  }
}
