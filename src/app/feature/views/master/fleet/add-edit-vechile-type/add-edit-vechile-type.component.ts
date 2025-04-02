import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-vechile-type',
  templateUrl: './add-edit-vechile-type.component.html',
  styleUrls: ['./add-edit-vechile-type.component.scss']
})
export class AddEditVechileTypeComponent {
  title:string='Add';

    constructor(public dialogRef: MatDialogRef<AddEditVechileTypeComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
  ){}

  ngOnInit() {
    
  }

  close(){
    this.dialogRef.close()
  }
}
