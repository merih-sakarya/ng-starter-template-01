import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import { AuthenticationService } from '@core/services/authentication.service';

/**
 * The default HTTP interceptor
 */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private router: Router, private injector: Injector, private authenticationService: AuthenticationService) {}

  private goTo(url: string) {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  private handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    switch (event.status) {
      case 200:
      case 201:
      case 202:
      case 203:
      case 204:
        break;
      case 401: // Unauthorized request
        this.authenticationService.logout();
        if (this.router.url && this.router.url.split('?')[0] === '/auth/login') {
          return throwError(() => event);
        }
        this.goTo('/auth/login');
        break;
      default:
        return throwError(() => event);
    }
    return of(event);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      mergeMap((event: any) => {
        // TODO: Handle HTTP Success

        return of(event);
      }),
      catchError((err: HttpErrorResponse) => {
        // TODO: Handle HTTP Error

        return this.handleData(err);
      })
    );
  }
}
