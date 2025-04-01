import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-daily-fuel-rate',
  templateUrl: './add-edit-daily-fuel-rate.component.html',
  styleUrls: ['./add-edit-daily-fuel-rate.component.scss']
})
export class AddEditDailyFuelRateComponent {
  title:string='Add';

  constructor(public dialogRef: MatDialogRef<AddEditDailyFuelRateComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
){}

close(){
  this.dialogRef.close();
}

}
