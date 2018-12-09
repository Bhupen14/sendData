import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) 
  { 
    console.log("http");
  }

  create(mylog)
  {

    return this.http.post('http://162.17.231.117:1314/SpinoService.svc/SignUp',mylog)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );

    
   
    
    

  }
}
