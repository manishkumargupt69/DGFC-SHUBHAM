import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AddEditAccountLedgerComponent } from './add-edit-account-ledger/add-edit-account-ledger.component';
import { AccountLedgerDashboardComponent } from './account-ledger-dashboard/account-ledger-dashboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/feature/shared/shared.module';
import { VendorMasterDashboardComponent } from './vendor-master-dashboard/vendor-master-dashboard.component';
import { AddEditVendorMasterComponent } from './add-edit-vendor-master/add-edit-vendor-master.component';


@NgModule({
  declarations: [
    AddEditAccountLedgerComponent,
    AccountLedgerDashboardComponent,
    VendorMasterDashboardComponent,
    AddEditVendorMasterComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class AccountsModule { }
