import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-quick-code',
  templateUrl: './add-edit-quick-code.component.html',
  styleUrls: ['./add-edit-quick-code.component.scss']
})
export class AddEditQuickCodeComponent {
  title:string='Add';

  constructor(public dialogRef: MatDialogRef<AddEditQuickCodeComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
){}

  ngOnInit() {
   
  }

  close(){
    this.dialogRef.close()
  }
}
