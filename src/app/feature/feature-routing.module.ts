import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../core/guards/logged-in-guard';
import { AuthGuard } from '../core/guards/auth-guard';
import { AppComponent } from '../app.component';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./views/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    // canActivate: [AuthGuard],
    component: ApplicationComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'master/admin',
        loadChildren: () => import('./views/master/admin/admin.module').then((m) => m.AdminModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
