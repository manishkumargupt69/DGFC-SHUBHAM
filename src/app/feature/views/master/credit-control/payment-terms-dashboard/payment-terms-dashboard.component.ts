import { Component } from '@angular/core';
import { AddEditPaymentTermsComponent } from '../add-edit-payment-terms/add-edit-payment-terms.component';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ScreenviewService } from 'src/app/core/api-services/screen/screenview.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-terms-dashboard',
  templateUrl: './payment-terms-dashboard.component.html',
  styleUrls: ['./payment-terms-dashboard.component.scss']
})
export class PaymentTermsDashboardComponent {
 data:any=[
    {
      name:'test'
    }
  ]
  filterData:any=[...this.data]
  screenWidth:number|undefined

  public ColumnMode = ColumnMode;
  constructor(private dialog:MatDialog,private screenService:ScreenviewService){}

  ngOnInit(){
    
  }

  filterTable(event: any) {
    const val = event.target.value.toLowerCase();

    this.filterData = this.data.filter((row:any) => 
      Object.values(row).some((value:any) => 
        value.toString().toLowerCase().includes(val)
      )
    );
  }

  openAddPaymentTerms(){
    let dialogRef = this.dialog.open(AddEditPaymentTermsComponent, {
      width: this.screenWidth!<600?'100%':'50%',
      autoFocus: false,
      
      data: {}
    });
    // dialogRef.componentInstance.confirmed.subscribe(res => {
    //   if (res) {
    //     this.loadTableData();
    //   }
    // });
  }
}
