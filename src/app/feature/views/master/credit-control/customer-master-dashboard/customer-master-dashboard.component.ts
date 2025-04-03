import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-customer-master-dashboard',
  templateUrl: './customer-master-dashboard.component.html',
  styleUrls: ['./customer-master-dashboard.component.scss']
})
export class CustomerMasterDashboardComponent {
  data:any = [
    {
      name:'Agra Office',
      isActive:'true',  
    },
  ];

  dataCopy:any = [...this.data]
  public ColumnMode = ColumnMode;

  constructor() { }

  ngOnInit() {
    
  }

  filterTable(event: any) {
    const val = event.target.value.toLowerCase();

    this.dataCopy = this.data.filter((row:any) => 
      Object.values(row).some((value:any) => 
        value.toString().toLowerCase().includes(val)
      )
    );
  }
}
