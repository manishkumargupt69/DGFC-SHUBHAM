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
import { DesignationDashboardComponent } from './designation-dashboard/designation-dashboard.component';
import { AddEditDesignationComponent } from './add-edit-designation/add-edit-designation.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { AddEditCityComponent } from './add-edit-city/add-edit-city.component';
import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';
import { QuickCodeComponent } from './quick-code/quick-code.component';
import { AddEditQuickCodeComponent } from './add-edit-quick-code/add-edit-quick-code.component';
import { ZoneDashboardComponent } from './zone-dashboard/zone-dashboard.component';
import { AddEditZoneComponent } from './add-edit-zone/add-edit-zone.component';


@NgModule({
  declarations: [
    AddEditBranchComponent,
    BranchDashboardComponent,
    CompanyDashboardComponent,
    AddEditCompanyComponent,
    AddEditDepartmentComponent,
    DepartmentDashboardComponent,
    DesignationDashboardComponent,
    AddEditDesignationComponent,
    EmployeeDashboardComponent,
    AddEditEmployeeComponent,
    AddEditCityComponent,
    CityDashboardComponent,
    QuickCodeComponent,
    AddEditQuickCodeComponent,
    ZoneDashboardComponent,
    AddEditZoneComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxDatatableModule,
    SharedModule,
  ]
})
export class AdminModule { }
