import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthContextUtil } from '@shared/utils/auth-context.util';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  private static _isSecure(url: string) {
    // Check if it's a secure API endpoint.
    // TODO: Create a logic to check secure API endpoint.
    return true;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Tokens should be sent only to secure APIs that are needed!
    if (!AuthInterceptor._isSecure(req.url)) {
      return next.handle(req);
    }

    // Get the auth token from the authentication context.
    const authContext = AuthContextUtil.getAuthContext();
    if (authContext && authContext.accessToken) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${authContext.accessToken}` } });
    }

    return next.handle(req);
  }
}
