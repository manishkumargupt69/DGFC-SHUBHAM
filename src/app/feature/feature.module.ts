import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ApplicationComponent } from './application.component';
import { SharedModule } from './shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class FeatureModule {
  
 }
