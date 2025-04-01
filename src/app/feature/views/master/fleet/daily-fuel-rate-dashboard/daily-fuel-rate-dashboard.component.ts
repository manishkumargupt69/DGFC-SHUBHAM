import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AddEditDailyFuelRateComponent } from '../add-edit-daily-fuel-rate/add-edit-daily-fuel-rate.component';
import { MatDialog } from '@angular/material/dialog';
import { ScreenviewService } from 'src/app/core/api-services/screen/screenview.service';

@Component({
  selector: 'app-daily-fuel-rate-dashboard',
  templateUrl: './daily-fuel-rate-dashboard.component.html',
  styleUrls: ['./daily-fuel-rate-dashboard.component.scss']
})
export class DailyFuelRateDashboardComponent {
 data:any=[
    {
      name:'test'
    }
  ]
  filterData:any=[...this.data];
  screenWidth:number|undefined;

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


  openAddDailyFuelRate(){
    let dialogRef = this.dialog.open(AddEditDailyFuelRateComponent, {
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
