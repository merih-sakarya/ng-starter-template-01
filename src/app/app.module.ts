import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { httpInterceptorProviders } from '@core/interceptors';

/**
 * Ng-Zorro Internationalization
 * See also {@link https://ng.ant.design/docs/i18n/en}
 * **/
import { en_US } from 'ng-zorro-antd/i18n';
import { NZ_I18N } from 'ng-zorro-antd/i18n';

/**
 * Angular Internationalization
 * See also {@link https://angular.io/guide/i18n-overview}
 * **/
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    LayoutModule
  ],
  providers: [
    // The default language of ng-zorro-antd is Chinese as of yet.
    { provide: NZ_I18N, useValue: en_US },
    ...httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
