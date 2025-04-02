import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ScreenviewService } from 'src/app/core/api-services/screen/screenview.service';
import { AddEditVechileModelComponent } from '../add-edit-vechile-model/add-edit-vechile-model.component';

@Component({
  selector: 'app-vechile-model-dashboard',
  templateUrl: './vechile-model-dashboard.component.html',
  styleUrls: ['./vechile-model-dashboard.component.scss']
})
export class VechileModelDashboardComponent {
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
  
  openAddVechileModel(){
    let dialogRef = this.dialog.open(AddEditVechileModelComponent, {
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
