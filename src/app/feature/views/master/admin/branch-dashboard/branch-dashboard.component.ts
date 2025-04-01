import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AuthService } from 'src/app/core/api-services/auth/auth.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


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

  constructor(private authservice:AuthService) { }

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


  downloadPdf(){
    const divId = 'myTable'; // ID of the HTML section you want to convert
      const fileName = 'Sample';

      const reportName = 'Sample'; // Name of the report
      // this.authservice.downloadPdf(divId, fileName, reportName);
  }

  downloadExcel(){
    if (!this.data || this.data.length === 0) {
      console.error("No data available for export!");
      return;
    }

    // Convert the data array to a worksheet
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);

    // Create a new workbook and append the worksheet
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Write the file and trigger download
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const fileData: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

    saveAs(fileData, 'datatable.xlsx');
  }

  

}
