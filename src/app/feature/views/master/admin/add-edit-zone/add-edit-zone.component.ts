import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-zone',
  templateUrl: './add-edit-zone.component.html',
  styleUrls: ['./add-edit-zone.component.scss']
})
export class AddEditZoneComponent {
  title:string='Add';

  constructor(public dialogRef: MatDialogRef<AddEditZoneComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
){}

  ngOnInit() {
   
  }

  close(){
    this.dialogRef.close()
  }
}
