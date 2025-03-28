import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
