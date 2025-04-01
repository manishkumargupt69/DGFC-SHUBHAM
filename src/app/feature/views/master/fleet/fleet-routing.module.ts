import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { AddEditDriverComponent } from './add-edit-driver/add-edit-driver.component';
import { FleetTraficDashboardComponent } from './fleet-trafic-dashboard/fleet-trafic-dashboard.component';
import { AddEditFleetTrafficComponent } from './add-edit-fleet-traffic/add-edit-fleet-traffic.component';
import { DailyFuelRateDashboardComponent } from './daily-fuel-rate-dashboard/daily-fuel-rate-dashboard.component';
import { RouteMasterDashboardComponent } from './route-master-dashboard/route-master-dashboard.component';
import { AddEditRouteMasterComponent } from './add-edit-route-master/add-edit-route-master.component';

const routes: Routes = [
  {
    path:'driver-dashboard',
    component:DriverDashboardComponent
  },
  {
    path:'driver/add',
    component:AddEditDriverComponent
  },
  {
    path:'driver/:type/:id',
    component:AddEditDriverComponent
  },
  {
    path:'fleet-traffic-dashboard',
    component:FleetTraficDashboardComponent
  },
  {
    path:'daily-fuel-rate-dashboard',
    component:DailyFuelRateDashboardComponent
  },
  {
    path:'route-master-dashboard',
    component:RouteMasterDashboardComponent
  },
  {
    path:'route-master/add',
    component:AddEditRouteMasterComponent
  },
  {
    path:'route-master/:edit/:id',
    component:AddEditRouteMasterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetRoutingModule { }
