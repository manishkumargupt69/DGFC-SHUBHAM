import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-vechile-master-dashboard',
  templateUrl: './vechile-master-dashboard.component.html',
  styleUrls: ['./vechile-master-dashboard.component.scss']
})
export class VechileMasterDashboardComponent {
   data:any=[
      {
        name:'test'
      }
    ]
    filterData:any=[...this.data]
  
    public ColumnMode = ColumnMode;
    constructor(){}
  
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
}
