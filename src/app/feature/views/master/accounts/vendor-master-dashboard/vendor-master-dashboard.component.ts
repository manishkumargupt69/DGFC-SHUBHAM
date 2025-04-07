import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-vendor-master-dashboard',
  templateUrl: './vendor-master-dashboard.component.html',
  styleUrls: ['./vendor-master-dashboard.component.scss']
})
export class VendorMasterDashboardComponent {
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
