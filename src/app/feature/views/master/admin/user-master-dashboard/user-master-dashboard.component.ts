import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-user-master-dashboard',
  templateUrl: './user-master-dashboard.component.html',
  styleUrls: ['./user-master-dashboard.component.scss']
})
export class UserMasterDashboardComponent {
 data:any=[
    {
      name:'Test',
      code:'121',
      email:'test@mail.com',
      address:'Hno 81 bhardwaj block ambedkar colony bijwasan newDelhi 110061',
      department:'IT',
      designation:'Developer',
      isActive:true
    }
  ];
  filterData:any=[...this.data];

  public ColumnMode = ColumnMode;
  constructor() {}

  ngOnInit() {
    
  }

  filterTable(event: any) {
    const val = event.target.value.toLowerCase();
    this.filterData = this.data.filter((row:any) => 
    Object.values(row).some((value:any) => 
       value.toString().toLowerCase().includes(val)
     )
    );
  }
}
