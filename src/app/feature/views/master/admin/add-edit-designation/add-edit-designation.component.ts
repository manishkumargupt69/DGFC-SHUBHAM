import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-designation',
  templateUrl: './add-edit-designation.component.html',
  styleUrls: ['./add-edit-designation.component.scss']
})
export class AddEditDesignationComponent {
  title:string='Add';

  constructor(public dialogRef: MatDialogRef<AddEditDesignationComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
  ){}

  ngOnInit() {
   
  }

  close(){
    this.dialogRef.close()
  }
}
