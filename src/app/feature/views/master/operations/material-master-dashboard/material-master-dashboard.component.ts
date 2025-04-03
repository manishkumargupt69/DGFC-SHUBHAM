import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ScreenviewService } from 'src/app/core/api-services/screen/screenview.service';
import { AddEditMaterialMasterComponent } from '../add-edit-material-master/add-edit-material-master.component';

@Component({
  selector: 'app-material-master-dashboard',
  templateUrl: './material-master-dashboard.component.html',
  styleUrls: ['./material-master-dashboard.component.scss']
})
export class MaterialMasterDashboardComponent {
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

  openAddFMaterialMaster(){
    let dialogRef = this.dialog.open(AddEditMaterialMasterComponent, {
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
