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
      },
      {
        path: 'master/fleet',
        loadChildren: () => import('./views/master/fleet/fleet.module').then((m) => m.FleetModule)
      },
      {
        path: 'master/operations',
        loadChildren: () => import('./views/master/operations/operations.module').then((m) => m.OperationsModule)
      },
      {
        path: 'master/credit-control',
        loadChildren: () => import('./views/master/credit-control/credit-control.module').then((m) => m.CreditControlModule)
      },
      {
        path: 'master/accounts',
        loadChildren: () => import('./views/master/accounts/accounts.module').then((m) => m.AccountsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
