import { Component } from '@angular/core';
import { AddEditDesignationComponent } from '../add-edit-designation/add-edit-designation.component';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { ScreenviewService } from 'src/app/core/api-services/screen/screenview.service';

@Component({
  selector: 'app-designation-dashboard',
  templateUrl: './designation-dashboard.component.html',
  styleUrls: ['./designation-dashboard.component.scss']
})
export class DesignationDashboardComponent {
  data:any=[
    {
      name:'Test',
      departmentName:'Test',
      isActive:true
    }
  ]
  filterData:any=[...this.data];
  screenWidth:number|undefined;

  public ColumnMode = ColumnMode;
  constructor(private dialog: MatDialog,private screenService:ScreenviewService) {}
  
  
  ngOnInit() {
    this.screenWidth = this.screenService.getCurrentScreenWidth();
  }
  
  loadTableData(){
  
  }
  
  filterTable(event: any) {
     const val = event.target.value.toLowerCase();
     this.filterData = this.data.filter((row:any) => 
     Object.values(row).some((value:any) => 
        value.toString().toLowerCase().includes(val)
      )
     );
  }
  
  
  openAddDesignation(){
    let dialogRef = this.dialog.open(AddEditDesignationComponent, {
     width: this.screenWidth!<600?'100%':'40%',
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
