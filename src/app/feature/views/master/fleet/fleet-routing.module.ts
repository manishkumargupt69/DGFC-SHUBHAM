import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { AddEditDriverComponent } from './add-edit-driver/add-edit-driver.component';
import { FleetTraficDashboardComponent } from './fleet-trafic-dashboard/fleet-trafic-dashboard.component';
import { AddEditFleetTrafficComponent } from './add-edit-fleet-traffic/add-edit-fleet-traffic.component';
import { DailyFuelRateDashboardComponent } from './daily-fuel-rate-dashboard/daily-fuel-rate-dashboard.component';
import { RouteMasterDashboardComponent } from './route-master-dashboard/route-master-dashboard.component';
import { AddEditRouteMasterComponent } from './add-edit-route-master/add-edit-route-master.component';
import { TripAdvanceBudgetMatrixComponent } from './trip-advance-budget-matrix/trip-advance-budget-matrix.component';
import { AddEditTripAdvanceBudgetMatrixComponent } from './add-edit-trip-advance-budget-matrix/add-edit-trip-advance-budget-matrix.component';
import { VechileMasterDashboardComponent } from './vechile-master-dashboard/vechile-master-dashboard.component';
import { AddEditVechileMasterComponent } from './add-edit-vechile-master/add-edit-vechile-master.component';
import { VechileModelDashboardComponent } from './vechile-model-dashboard/vechile-model-dashboard.component';
import { AddEditVechileModelComponent } from './add-edit-vechile-model/add-edit-vechile-model.component';
import { VechileTypeMasterDashboardComponent } from './vechile-type-master-dashboard/vechile-type-master-dashboard.component';

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
  {
    path:'trip-advance-budget-matrix-dashboard',
    component:TripAdvanceBudgetMatrixComponent
  },
  {
    path:'trip-advance-budget-matrix/add',
    component:AddEditTripAdvanceBudgetMatrixComponent
  },
  {
    path:'trip-advance-budget-matrix/:type/:id',
    component:AddEditTripAdvanceBudgetMatrixComponent
  },
  {
    path:'vechile-master-dashboard',
    component:VechileMasterDashboardComponent
  },
  {
    path:'vechile-master/add',
    component:AddEditVechileMasterComponent
  },
  {
    path:'vechile-master/:type/:id',
    component:AddEditVechileMasterComponent
  },
  {
    path:'vechile-model-dashboard',
    component:VechileModelDashboardComponent
  },
  {
    path:'vechile-type-dashboard',
    component:VechileTypeMasterDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetRoutingModule { }
