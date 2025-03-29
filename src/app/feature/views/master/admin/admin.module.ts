import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEditBranchComponent } from './add-edit-branch/add-edit-branch.component';
import { BranchDashboardComponent } from './branch-dashboard/branch-dashboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { AddEditCompanyComponent } from './add-edit-company/add-edit-company.component';
import { SharedModule } from 'src/app/feature/shared/shared.module';
import { AddEditDepartmentComponent } from './add-edit-department/add-edit-department.component';
import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';


@NgModule({
  declarations: [
    AddEditBranchComponent,
    BranchDashboardComponent,
    CompanyDashboardComponent,
    AddEditCompanyComponent,
    AddEditDepartmentComponent,
    DepartmentDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxDatatableModule,
    SharedModule,
  ]
})
export class AdminModule { }
