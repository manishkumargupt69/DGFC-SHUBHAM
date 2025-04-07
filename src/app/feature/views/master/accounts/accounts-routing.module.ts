import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLedgerDashboardComponent } from './account-ledger-dashboard/account-ledger-dashboard.component';
import { AddEditAccountLedgerComponent } from './add-edit-account-ledger/add-edit-account-ledger.component';
import { VendorMasterDashboardComponent } from './vendor-master-dashboard/vendor-master-dashboard.component';
import { AddEditVendorMasterComponent } from './add-edit-vendor-master/add-edit-vendor-master.component';

const routes: Routes = [
  {
    path:'account-ledger-dashboard',
    component:AccountLedgerDashboardComponent
  },
  {
    path:'account-ledger/add',
    component:AddEditAccountLedgerComponent
  },
  {
    path:'account-ledger/:type/:id',
    component:AddEditAccountLedgerComponent
  },
  {
    path:'vendor-master-dashboard',
    component:VendorMasterDashboardComponent
  },
  {
    path:'vendor-master/add',
    component:AddEditVendorMasterComponent
  },
  {
    path:'vendor-master/:type/:id',
    component:AddEditVendorMasterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
