import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { ServiceNetworkDashboardComponent } from './service-network-dashboard/service-network-dashboard.component';
import { AddEditServiceNetworkComponent } from './add-edit-service-network/add-edit-service-network.component';
import { SharedModule } from 'src/app/feature/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServiceNetworkDashboardComponent,
    AddEditServiceNetworkComponent
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
