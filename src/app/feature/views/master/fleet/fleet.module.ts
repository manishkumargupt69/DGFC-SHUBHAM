import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetRoutingModule } from './fleet-routing.module';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/feature/shared/shared.module';
import { AddEditDriverComponent } from './add-edit-driver/add-edit-driver.component';


@NgModule({
  declarations: [
    DriverDashboardComponent,
    AddEditDriverComponent,
  ],
  imports: [
    CommonModule,
    FleetRoutingModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class FleetModule { }
