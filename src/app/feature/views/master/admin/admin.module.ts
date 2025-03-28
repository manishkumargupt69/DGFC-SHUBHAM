import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEditBranchComponent } from './add-edit-branch/add-edit-branch.component';
import { BranchDashboardComponent } from './branch-dashboard/branch-dashboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    AddEditBranchComponent,
    BranchDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxDatatableModule
  ]
})
export class AdminModule { }
