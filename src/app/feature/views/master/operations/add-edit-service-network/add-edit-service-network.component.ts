import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-service-network',
  templateUrl: './add-edit-service-network.component.html',
  styleUrls: ['./add-edit-service-network.component.scss']
})
export class AddEditServiceNetworkComponent implements OnInit {
 title:string='Add';
 cityArray : any = ['Delhi','Guragaon','jaipur','ahmedabad','bhiwandi','mumbai'];
 networks:any=[{}]
 data : any = {};

 constructor(){}


  ngOnInit() {
   
  }

  buildNetwork(){

  }

  addNetwork(){
    this.networks.push({})
    
  }

  removeRow(idx:number){
    this.networks.splice(idx,1)
  }
}
