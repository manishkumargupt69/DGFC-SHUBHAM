import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScreenviewService } from 'src/app/core/api-services/screen/screenview.service';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AddEditVechileTypeComponent } from '../add-edit-vechile-type/add-edit-vechile-type.component';

@Component({
  selector: 'app-vechile-type-master-dashboard',
  templateUrl: './vechile-type-master-dashboard.component.html',
  styleUrls: ['./vechile-type-master-dashboard.component.scss']
})
export class VechileTypeMasterDashboardComponent {
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
  
  openAddVechileType(){
    let dialogRef = this.dialog.open(AddEditVechileTypeComponent, {
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
