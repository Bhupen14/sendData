import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'; 
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-dislay',
  templateUrl: './dislay.component.html',
  styleUrls: ['./dislay.component.css']
})
export class DislayComponent implements OnInit {
  firstname:any[];
  lastname:any[];
  emailid:string;
  password:string;


  constructor(private mydata:DataService)
   {
  

    console.log("component");
   }

  ngOnInit() {

 
  }

  sendmyData(data) :  void {
   

     this.mydata.create(data);
   }



  
}
