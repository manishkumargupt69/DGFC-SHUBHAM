import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-trip-advance-budget-matrix',
  templateUrl: './trip-advance-budget-matrix.component.html',
  styleUrls: ['./trip-advance-budget-matrix.component.scss']
})
export class TripAdvanceBudgetMatrixComponent {
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
