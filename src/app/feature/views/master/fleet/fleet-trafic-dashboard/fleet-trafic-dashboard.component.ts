import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AddEditFleetTrafficComponent } from '../add-edit-fleet-traffic/add-edit-fleet-traffic.component';
import { MatDialog } from '@angular/material/dialog';
import { ScreenviewService } from 'src/app/core/api-services/screen/screenview.service';

@Component({
  selector: 'app-fleet-trafic-dashboard',
  templateUrl: './fleet-trafic-dashboard.component.html',
  styleUrls: ['./fleet-trafic-dashboard.component.scss']
})
export class FleetTraficDashboardComponent {
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

  openAddFleetTrafficDashbaord(){
    let dialogRef = this.dialog.open(AddEditFleetTrafficComponent, {
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
