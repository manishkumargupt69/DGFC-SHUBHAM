import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { AddEditDriverComponent } from './add-edit-driver/add-edit-driver.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetRoutingModule { }
