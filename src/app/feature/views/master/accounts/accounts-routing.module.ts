import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLedgerDashboardComponent } from './account-ledger-dashboard/account-ledger-dashboard.component';
import { AddEditAccountLedgerComponent } from './add-edit-account-ledger/add-edit-account-ledger.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
