import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-service-network-dashboard',
  templateUrl: './service-network-dashboard.component.html',
  styleUrls: ['./service-network-dashboard.component.scss']
})
export class ServiceNetworkDashboardComponent {
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
