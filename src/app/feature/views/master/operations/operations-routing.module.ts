import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceNetworkDashboardComponent } from './service-network-dashboard/service-network-dashboard.component';
import { AddEditServiceNetworkComponent } from './add-edit-service-network/add-edit-service-network.component';

const routes: Routes = [
  {
    path:'service-network-dashboard',
    component:ServiceNetworkDashboardComponent
  },
  {
    path:'service-network/add',
    component:AddEditServiceNetworkComponent
  },
  {
    path:'service-network/:type/:id',
    component:AddEditServiceNetworkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
