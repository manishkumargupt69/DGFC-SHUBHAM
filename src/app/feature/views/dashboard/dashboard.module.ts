import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GoogleMapsModule
  ]
})
export class DashboardModule { }
