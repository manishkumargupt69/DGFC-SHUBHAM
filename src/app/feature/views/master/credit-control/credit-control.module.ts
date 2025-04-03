import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditControlRoutingModule } from './credit-control-routing.module';
import { CustomerMasterDashboardComponent } from './customer-master-dashboard/customer-master-dashboard.component';
import { AddEditCustomerMasterComponent } from './add-edit-customer-master/add-edit-customer-master.component';
import { SharedModule } from 'src/app/feature/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BillingPartyDashboardComponent } from './billing-party-dashboard/billing-party-dashboard.component';
import { AddEditBillingPartyComponent } from './add-edit-billing-party/add-edit-billing-party.component';
import { PaymentTermsDashboardComponent } from './payment-terms-dashboard/payment-terms-dashboard.component';
import { AddEditPaymentTermsComponent } from './add-edit-payment-terms/add-edit-payment-terms.component';


@NgModule({
  declarations: [
    CustomerMasterDashboardComponent,
    AddEditCustomerMasterComponent,
    BillingPartyDashboardComponent,
    AddEditBillingPartyComponent,
    PaymentTermsDashboardComponent,
    AddEditPaymentTermsComponent
  ],
  imports: [
    CommonModule,
    CreditControlRoutingModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class CreditControlModule { }
