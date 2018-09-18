import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {
  API_URL = 'http://api.pillpresso.com/';
  medicineDetails= [];
  enable:boolean;
  enStatus: string;
  slots=['A','B','C','D','E','F','G','H','I','J']
  id: string;
  foodInst = ["", "No food instructions", "Before food", "With food", "After food"];
  quantity:any;

  constructor(private router:ActivatedRoute,public http:HttpClient) { 
  }
  
  ngOnInit() {
    this.id=this.router.snapshot.paramMap.get('id')
    this.getMedicineDetails(this.id)
  }
  getMedicineDetails(id){
    debugger;
    this.http.get(this.API_URL+'api/medication/getMedicine/'+id).subscribe((response)=>{
      console.log('response:-', response)
      this.medicineDetails=response['docs'];
      this.enable=this.medicineDetails['status']
      this.enStatus=this.enable.toString();
      this.quantity=this.medicineDetails['stock'];
    },(error)=>{
      console.log('error', error)
    })
  }

  updateState(type,value) {
    console.log('update status', type,value)
    let data;
    if (type == "status") {
      data = { "status": value };
    } else if (type == "critical") {
      data = { "critical": value };
    }
    this.http.put(this.API_URL+'api/medication/statusActiveCritical/' + this.id,data).subscribe((res) => {
      if (res) {
        console.log('res', res)
      }
    }, Error => {
      console.log('Error', Error)
    })
  }

  refillmedicine(id){
    if (this.quantity != '' && this.quantity > 0) {
      this.http.put(this.API_URL+'api/medication/refillMeds/' + id, { "quantity": this.quantity }).subscribe((res) => {
        console.log('Add quantity res:-', res)
      });
    } else {
      return false;
    }
  }

  deleteMedicine(){
    this.http.delete(this.API_URL+'api/user/removeMedicine/'+this.id).subscribe((res)=>{
      console.log('res', res)
    },(error)=>{
      console.log('error', error)
    })
  }

}
