import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AddEditDepartmentComponent } from '../add-edit-department/add-edit-department.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-department-dashboard',
  templateUrl: './department-dashboard.component.html',
  styleUrls: ['./department-dashboard.component.scss']
})
export class DepartmentDashboardComponent implements OnInit {
  data:any=[]
  filterData:any=[]


  public ColumnMode = ColumnMode;
  constructor(private dialog: MatDialog) {}


  ngOnInit() {
    
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

  openAddDepartment(){
    let dialogRef = this.dialog.open(AddEditDepartmentComponent, {
      width: '50%',
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
