import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-fleet-traffic',
  templateUrl: './add-edit-fleet-traffic.component.html',
  styleUrls: ['./add-edit-fleet-traffic.component.scss']
})
export class AddEditFleetTrafficComponent {
  title:string='Add';

    constructor(public dialogRef: MatDialogRef<AddEditFleetTrafficComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
  ){}

  ngOnInit() {
    
  }

  close(){
    this.dialogRef.close()
  }
}
