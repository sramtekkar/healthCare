import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  boxes = [];
  slots=['A','B','C','D','E','F','G','H','I','J']

  currentMeds = [];
  outsidemed = []
  API_URL = 'http://api.pillpresso.com/';
  tabVal=[1,2,3];
    refillMedi=[];
  view=1
  boxesList: any=[];

  constructor(public http: HttpClient,private router:Router) { }

  ngOnInit() {
    this.getAllMedicineData()
  }
  changeView(vw){
    if(vw==0){
      this.view=1;
    }else{
      this.view=0;
    }
  }

  getAllMedicineData() {
    this.http.get(this.API_URL + "api/medication/myAllMedicine/599b1480446ce64f19f59707").subscribe(res => {
      if (res) {
        res['docs'].forEach((item) => {
          if (item._id == true) {
            console.log('Doc [0]', item['data'])
            this.outsidemed=item['data']
          } else if (item._id == false) {
            console.log('Doc [1]', item)
          } else if (item._id == "refill") {
            console.log('Doc [2]', item)
            this.refillMedi=item.data;

          } else if (item._id == "grid") {
            console.log('Doc [3]', item)
            this.boxes = item.data
            if(item.data){
              item.data.forEach((listData) => {
                if(listData.mesg=='current'){
                  this.boxesList.push(listData);
                  console.log('boxesList1111111111',this.boxesList)
                }
              });
            }
          }
        });
      }
    });
  }

  getDetails(details,index){
    console.log("details:-",details)
    if(details._id!==""){
      this.router.navigate(['/medicineDetails',details._id])
    }else{
    console.log("Add button");
    this.router.navigate(['/addMedicine'])
    }
  }

  isString(val) { 
    if(typeof(val)=='string'){
      return true;
    }
  }

  isShow(val){
    console.log('Val:11111',val)
    if(val==="current"){
      return true;
    }
  }

  tabChange(state){
    console.log('Tab state', state)
    // this.tabVal=state;
  }

}
