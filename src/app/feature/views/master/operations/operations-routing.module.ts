import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceNetworkDashboardComponent } from './service-network-dashboard/service-network-dashboard.component';
import { AddEditServiceNetworkComponent } from './add-edit-service-network/add-edit-service-network.component';
import { MaterialMasterDashboardComponent } from './material-master-dashboard/material-master-dashboard.component';
import { ConsigneeManagementDashboardComponent } from './consignee-management-dashboard/consignee-management-dashboard.component';
import { AddEditConsigneeManagementComponent } from './add-edit-consignee-management/add-edit-consignee-management.component';

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
  },
  {
    path:'material-master-dashboard',
    component:MaterialMasterDashboardComponent
  },
  {
    path:'consignee-management-dashboard',
    component:ConsigneeManagementDashboardComponent
  },
  {
    path:'consignee-management/add',
    component:AddEditConsigneeManagementComponent
  },
  {
    path:'consignee-management/:type/:id',
    component:AddEditConsigneeManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
