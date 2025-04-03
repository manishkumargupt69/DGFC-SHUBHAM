import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { ServiceNetworkDashboardComponent } from './service-network-dashboard/service-network-dashboard.component';
import { AddEditServiceNetworkComponent } from './add-edit-service-network/add-edit-service-network.component';
import { SharedModule } from 'src/app/feature/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { MaterialMasterDashboardComponent } from './material-master-dashboard/material-master-dashboard.component';
import { AddEditMaterialMasterComponent } from './add-edit-material-master/add-edit-material-master.component';
import { ConsigneeManagementDashboardComponent } from './consignee-management-dashboard/consignee-management-dashboard.component';
import { AddEditConsigneeManagementComponent } from './add-edit-consignee-management/add-edit-consignee-management.component';


@NgModule({
  declarations: [
    ServiceNetworkDashboardComponent,
    AddEditServiceNetworkComponent,
    MaterialMasterDashboardComponent,
    AddEditMaterialMasterComponent,
    ConsigneeManagementDashboardComponent,
    AddEditConsigneeManagementComponent
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
