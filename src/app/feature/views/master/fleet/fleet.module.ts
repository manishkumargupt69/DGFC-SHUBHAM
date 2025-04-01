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
  ],
  imports: [
    CommonModule,
    FleetRoutingModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class FleetModule { }
