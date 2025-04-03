import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-payment-terms',
  templateUrl: './add-edit-payment-terms.component.html',
  styleUrls: ['./add-edit-payment-terms.component.scss']
})
export class AddEditPaymentTermsComponent {
 title:string='Add';

    constructor(public dialogRef: MatDialogRef<AddEditPaymentTermsComponent>, @Inject(MAT_DIALOG_DATA) public details: { id: number,type:string },
  ){}

  ngOnInit() {
    
  }

  close(){
    this.dialogRef.close()
  }
}
