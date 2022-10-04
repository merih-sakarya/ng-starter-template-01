import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/security/auth.guard';

import { LayoutDefaultComponent } from '@layout/layout-default/layout-default.component';
import { LayoutPassportComponent } from '@layout/layout-passport/layout-passport.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./routes/notification/notification.module').then(m => m.NotificationModule)
      }
    ]
  },

  {
    path: '',
    component: LayoutPassportComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./routes/passport/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./routes/passport/register/register.module').then(m => m.RegisterModule)
      }
    ]
  },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
