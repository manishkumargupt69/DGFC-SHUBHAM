import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBranchComponent } from './add-edit-branch/add-edit-branch.component';
import { BranchDashboardComponent } from './branch-dashboard/branch-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { AddEditCompanyComponent } from './add-edit-company/add-edit-company.component';
import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
import { DesignationDashboardComponent } from './designation-dashboard/designation-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { CityDashboardComponent } from './city-dashboard/city-dashboard.component';
import { AddEditCityComponent } from './add-edit-city/add-edit-city.component';
import { QuickCodeComponent } from './quick-code/quick-code.component';
import { ZoneDashboardComponent } from './zone-dashboard/zone-dashboard.component';

const routes: Routes = [
  {
    path: 'branch/add',
    component:AddEditBranchComponent
  },
  {
    path: 'branch/:type/:id',
    component:AddEditBranchComponent
  },
  {
    path: 'branch-dashboard',
    component:BranchDashboardComponent
  },  
  {
    path: 'company/add',
    component:AddEditCompanyComponent
  },
  {
    path: 'company/:type/:id',
    component:AddEditCompanyComponent
  },
  {
    path: 'company-dashboard',
    component:CompanyDashboardComponent
  },
  {
    path:'department-dashboard',
    component:DepartmentDashboardComponent
  },  
  {
    path:'designation-dashboard',
    component:DesignationDashboardComponent
  },  
  {
    path:'employee-dashboard',
    component:EmployeeDashboardComponent
  },  
  {
    path:'employee/add',
    component:AddEditEmployeeComponent
  },
  {
    path: 'employee/:type/:id',
    component:AddEditEmployeeComponent
  },  
  {
    path:'city-dashboard',
    component:CityDashboardComponent
  },  
  {
    path:'city/add',
    component:AddEditCityComponent
  },
  {
    path: 'city/:type/:id',
    component:AddEditCityComponent
  },
  {
    path:'quick-code-dashboard',
    component:QuickCodeComponent
  },   
  {
    path:'zone-dashboard',
    component:ZoneDashboardComponent
  },   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
