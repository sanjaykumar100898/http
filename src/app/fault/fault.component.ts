import { Component, OnInit, NgModule } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
//import {HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
//import { HttpClient ,HttpHeaders,HttpParams ,HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-fault',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.css']
})

export class FaultComponent  {
  

  constructor(private http : Http) { }

 public myalert(){
    alert('error');
    const data = {
      "jsonrpc" : "2.0",
      "method" : "echo",
      "id" : "1",
      "params": {'arguments' : 'something' }
  }
  
     const headers = new Headers({'Content-Type':'application/json'});
     this.http.post('http://localhost:80/jsonrpc',data,{headers:headers}).pipe(
     map((res: Response)=> console.log(res)));
     //catch((error:Response) =>console.log(error)));
     /*this.http.post('http://localhost:80/jsonrpc',data).toPromise().then((doc1:any) => {
      console.log(doc1);
      //this.json=JSON.stringify(data.json)
    });*/
     alert("completed request");
   
  }

  ngOnInit(): void {
  }

}
