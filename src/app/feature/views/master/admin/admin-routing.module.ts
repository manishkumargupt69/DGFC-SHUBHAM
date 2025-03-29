import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBranchComponent } from './add-edit-branch/add-edit-branch.component';
import { BranchDashboardComponent } from './branch-dashboard/branch-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { AddEditCompanyComponent } from './add-edit-company/add-edit-company.component';
import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';

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
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
