import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-vechile-model',
  templateUrl: './add-edit-vechile-model.component.html',
  styleUrls: ['./add-edit-vechile-model.component.scss']
})
export class AddEditVechileModelComponent {
  title:string='Add';

    constructor(public dialogRef: MatDialogRef<AddEditVechileModelComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
  ){}

  ngOnInit() {
    
  }

  close(){
    this.dialogRef.close()
  }
}
