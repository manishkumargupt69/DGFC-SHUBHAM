import { Component } from '@angular/core';
import { AddEditZoneComponent } from '../add-edit-zone/add-edit-zone.component';
import { ScreenviewService } from 'src/app/core/api-services/screen/screenview.service';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-zone-dashboard',
  templateUrl: './zone-dashboard.component.html',
  styleUrls: ['./zone-dashboard.component.scss']
})
export class ZoneDashboardComponent {
  data:any=[]
  filterData:any=[];
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


  openAddQuickCode(){
    let dialogRef = this.dialog.open(AddEditZoneComponent, {
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
