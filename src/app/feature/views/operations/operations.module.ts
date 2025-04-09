import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { BookingRequestDashboardComponent } from './booking-request-dashboard/booking-request-dashboard.component';
import { AddEditBookingRequestComponent } from './add-edit-booking-request/add-edit-booking-request.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TripsDashboardComponent } from './trips-dashboard/trips-dashboard.component';
import { AddEditTripComponent } from './add-edit-trip/add-edit-trip.component';


@NgModule({
  declarations: [
    BookingRequestDashboardComponent,
    AddEditBookingRequestComponent,
    TripsDashboardComponent,
    AddEditTripComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    NgxDatatableModule,
    SharedModule,
    FormsModule
  ]
})
export class OperationsModule { }
