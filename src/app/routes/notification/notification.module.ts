import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { NotificationComponent } from './notification.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationComponent
  }
];

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    // prettier-ignore
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class NotificationModule {}
