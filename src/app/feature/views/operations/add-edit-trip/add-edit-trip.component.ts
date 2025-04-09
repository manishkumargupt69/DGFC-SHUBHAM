import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-trip',
  templateUrl: './add-edit-trip.component.html',
  styleUrls: ['./add-edit-trip.component.scss']
})
export class AddEditTripComponent implements OnInit {
  title:string='Add';
  isEmptyTrip:boolean=true;

  constructor(private route:ActivatedRoute){}
  
  ngOnInit() {
    this.route.paramMap.subscribe(parameterMap => {
      let type = parameterMap.get('trip-type');
      if(type=='trip'){
        this.isEmptyTrip=false;
      }
    });
  }
}
