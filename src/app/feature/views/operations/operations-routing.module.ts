import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingRequestDashboardComponent } from './booking-request-dashboard/booking-request-dashboard.component';
import { AddEditBookingRequestComponent } from './add-edit-booking-request/add-edit-booking-request.component';
import { TripsDashboardComponent } from './trips-dashboard/trips-dashboard.component';
import { AddEditTripComponent } from './add-edit-trip/add-edit-trip.component';

const routes: Routes = [
  {
    path: 'booking-request-dashboard',
    component:BookingRequestDashboardComponent
  },
  {
    path:'booking-request/add',
    component:AddEditBookingRequestComponent
  },
  {
    path:'booking-request/edit/:id',
    component:AddEditBookingRequestComponent
  },
  {
    path: 'trip-dashboard',
    component:TripsDashboardComponent
  },
  {
    path:':trip-type/add',
    component:AddEditTripComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
