import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetRoutingModule } from './fleet-routing.module';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/feature/shared/shared.module';
import { AddEditDriverComponent } from './add-edit-driver/add-edit-driver.component';
import { FleetTraficDashboardComponent } from './fleet-trafic-dashboard/fleet-trafic-dashboard.component';
import { AddEditFleetTrafficComponent } from './add-edit-fleet-traffic/add-edit-fleet-traffic.component';
import { DailyFuelRateDashboardComponent } from './daily-fuel-rate-dashboard/daily-fuel-rate-dashboard.component';
import { AddEditDailyFuelRateComponent } from './add-edit-daily-fuel-rate/add-edit-daily-fuel-rate.component';
import { RouteMasterDashboardComponent } from './route-master-dashboard/route-master-dashboard.component';
import { AddEditRouteMasterComponent } from './add-edit-route-master/add-edit-route-master.component';
import { TripAdvanceBudgetMatrixComponent } from './trip-advance-budget-matrix/trip-advance-budget-matrix.component';
import { AddEditTripAdvanceBudgetMatrixComponent } from './add-edit-trip-advance-budget-matrix/add-edit-trip-advance-budget-matrix.component';
import { VechileMasterDashboardComponent } from './vechile-master-dashboard/vechile-master-dashboard.component';
import { AddEditVechileMasterComponent } from './add-edit-vechile-master/add-edit-vechile-master.component';
import { VechileModelDashboardComponent } from './vechile-model-dashboard/vechile-model-dashboard.component';
import { AddEditVechileModelComponent } from './add-edit-vechile-model/add-edit-vechile-model.component';
import { VechileTypeMasterDashboardComponent } from './vechile-type-master-dashboard/vechile-type-master-dashboard.component';
import { AddEditVechileTypeComponent } from './add-edit-vechile-type/add-edit-vechile-type.component';


@NgModule({
  declarations: [
    DriverDashboardComponent,
    AddEditDriverComponent,
    FleetTraficDashboardComponent,
    AddEditFleetTrafficComponent,
    DailyFuelRateDashboardComponent,
    AddEditDailyFuelRateComponent,
    RouteMasterDashboardComponent,
    AddEditRouteMasterComponent,
    TripAdvanceBudgetMatrixComponent,
    AddEditTripAdvanceBudgetMatrixComponent,
    VechileMasterDashboardComponent,
    AddEditVechileMasterComponent,
    VechileModelDashboardComponent,
    AddEditVechileModelComponent,
    VechileTypeMasterDashboardComponent,
    AddEditVechileTypeComponent,
  ],
  imports: [
    CommonModule,
    FleetRoutingModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class FleetModule { }
