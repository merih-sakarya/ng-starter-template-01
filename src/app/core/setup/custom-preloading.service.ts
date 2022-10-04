import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { delay, switchMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // With this setting, Lazy load modules start loading after a 4 second delay.
    // This delay has been set in order to avoid a network delay in loading the assets needed when the page is loaded for the first time.
    return of(true).pipe(
      delay(4000),
      switchMap(() => load())
    );
  }
}
