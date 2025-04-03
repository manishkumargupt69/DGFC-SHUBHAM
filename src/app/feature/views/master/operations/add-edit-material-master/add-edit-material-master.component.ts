import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-material-master',
  templateUrl: './add-edit-material-master.component.html',
  styleUrls: ['./add-edit-material-master.component.scss']
})
export class AddEditMaterialMasterComponent {
  title:string='Add';

    constructor(public dialogRef: MatDialogRef<AddEditMaterialMasterComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
  ){}

  ngOnInit() {
    
  }

  close(){
    this.dialogRef.close()
  }
}
