import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerMasterDashboardComponent } from './customer-master-dashboard/customer-master-dashboard.component';
import { AddEditCustomerMasterComponent } from './add-edit-customer-master/add-edit-customer-master.component';
import { PaymentTermsDashboardComponent } from './payment-terms-dashboard/payment-terms-dashboard.component';

const routes: Routes = [
  {
    path:'customer-master-dashboard',
    component:CustomerMasterDashboardComponent
  },
  {
    path:'customer-master/add',
    component:AddEditCustomerMasterComponent
  },
  {
    path:'customer-master/:type/:id',
    component:AddEditCustomerMasterComponent
  },
  {
    path:'payment-terms-dashboard',
    component:PaymentTermsDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditControlRoutingModule { }
