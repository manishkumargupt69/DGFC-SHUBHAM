import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-branch-dashboard',
  templateUrl: './branch-dashboard.component.html',
  styleUrls: ['./branch-dashboard.component.scss']
})
export class BranchDashboardComponent implements OnInit {
  data:any = [
    {
      name:'Agra Office',
      code:'1013',
      type:'NON GST',
      companyName:'Delhi Gujarat Freight Carrier Pvt Ltd',
      manager:'Ramesh Kumar Mishra (2339)',
      openingDate:'12 Jul 1887',
      status:'true',
      zone:'North',
      address:'Agra Office, 1st Floor, 1/2, Raja Mandi, Agra, Uttar Pradesh, 282002',
      isActive:'true',  
    },
    {
      name:'Agra Office',
      code:'1014',
      type:'NON GST',
      companyName:'Delhi Gujarat Freight Carrier Pvt Ltd',
      manager:'Ramesh Kumar Mishra (2339)',
      openingDate:'12 Jul 1887',
      status:'true',
      zone:'North',
      address:'Agra Office, 1st Floor, 1/2, Raja Mandi, Agra, Uttar Pradesh, 282002',
      isActive:'true',  
    },
    {
      name:'Agra Office',
      code:'1013',
      type:'NON GST',
      companyName:'Delhi Gujarat Freight Carrier Pvt Ltd',
      manager:'Ramesh Kumar Mishra (2339)',
      openingDate:'12 Jul 1887',
      status:'true',
      zone:'North',
      address:'Agra Office, 1st Floor, 1/2, Raja Mandi, Agra, Uttar Pradesh, 282002',
      isActive:'true',  
    },
    {
      name:'Agra Office',
      code:'1013',
      type:'NON GST',
      companyName:'Delhi Gujarat Freight Carrier Pvt Ltd',
      manager:'Ramesh Kumar Mishra (2339)',
      openingDate:'12 Jul 1887',
      status:'true',
      zone:'North',
      address:'Agra Office, 1st Floor, 1/2, Raja Mandi, Agra, Uttar Pradesh, 282002',
      isActive:'true',  
    },
    {
      name:'Agra Office',
      code:'1013',
      type:'NON GST',
      companyName:'Delhi Gujarat Freight Carrier Pvt Ltd',
      manager:'Ramesh Kumar Mishra (2339)',
      openingDate:'12 Jul 1887',
      status:'true',
      zone:'North',
      address:'Agra Office, 1st Floor, 1/2, Raja Mandi, Agra, Uttar Pradesh, 282002',
      isActive:'true',  
    },
    {
      name:'Agra Office',
      code:'1013',
      type:'NON GST',
      companyName:'Delhi Gujarat Freight Carrier Pvt Ltd',
      manager:'Ramesh Kumar Mishra (2339)',
      openingDate:'12 Jul 1887',
      status:'true',
      zone:'North',
      address:'Agra Office, 1st Floor, 1/2, Raja Mandi, Agra, Uttar Pradesh, 282002',
      isActive:'true',  
    },
    {
      name:'Agra Office',
      code:'1013',
      type:'NON GST',
      companyName:'Delhi Gujarat Freight Carrier Pvt Ltd',
      manager:'Ramesh Kumar Mishra (2339)',
      openingDate:'12 Jul 1887',
      status:'true',
      zone:'North',
      address:'Agra Office, 1st Floor, 1/2, Raja Mandi, Agra, Uttar Pradesh, 282002',
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
