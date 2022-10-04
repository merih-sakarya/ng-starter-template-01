import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { HeaderComponent } from './layout-default/header/header.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { LayoutPassportComponent } from './layout-passport/layout-passport.component';

@NgModule({
  declarations: [
    LayoutDefaultComponent,
    LayoutPassportComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule {}
