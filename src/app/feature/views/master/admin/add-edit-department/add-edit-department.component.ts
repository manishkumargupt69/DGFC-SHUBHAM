import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit {
  title:string='Add';

  constructor(public dialogRef: MatDialogRef<AddEditDepartmentComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
){}

  ngOnInit() {
   
  }

  close(){
    this.dialogRef.close()
  }


}
