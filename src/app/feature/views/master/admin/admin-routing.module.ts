import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBranchComponent } from './add-edit-branch/add-edit-branch.component';
import { BranchDashboardComponent } from './branch-dashboard/branch-dashboard.component';

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
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
