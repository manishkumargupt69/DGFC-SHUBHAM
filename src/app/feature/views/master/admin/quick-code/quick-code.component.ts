import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AddEditQuickCodeComponent } from '../add-edit-quick-code/add-edit-quick-code.component';
import { ScreenviewService } from 'src/app/core/api-services/screen/screenview.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quick-code',
  templateUrl: './quick-code.component.html',
  styleUrls: ['./quick-code.component.scss']
})
export class QuickCodeComponent {
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
    let dialogRef = this.dialog.open(AddEditQuickCodeComponent, {
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
