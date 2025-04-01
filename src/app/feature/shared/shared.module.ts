import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { OnlyalphanumericDirective } from './directive/onlyalphanumeric.directive';
import { OnlyNumericDirective } from './directive/only-numeric.directive';
import { EmailDirective } from './directive/email.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LoaderComponent,
    OnlyalphanumericDirective,
    OnlyNumericDirective,
    EmailDirective,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    LoaderComponent,
    OnlyalphanumericDirective,
    OnlyNumericDirective,
    EmailDirective,
    MatDialogModule,
    HttpClientModule
  ]
})
export class SharedModule { }
