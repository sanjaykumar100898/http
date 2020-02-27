import { Component } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.css']
})
export class MetaComponent  {

  constructor(private http: Http) {

   }

   JSONTest = function(){
    const data = {
      "jsonrpc" : "2.0",
      "method" : "getall",
      "id" : "1",
      "params": {'arguments' : 'something' }
  }
     this.http.post('http://localhost:4000/jsonrpc','POST',data);
   }
  /* JSONTest = function() {



    $scope({
        url : "http://localhost:4000/jsonrpc",
        type : 'GET',
        data : {
            "jsonrpc" : "2.0",
            "method" : "getall",
            "id" : "1",
            "params": {'arguments' : 'something' }
        },
        dataType : "json",
        success : function(result) {
            //alert("result"+result[0]);
            switch (result) {
            case true:
                alert(result);
                break;
            default:
                alert(result);
            }
        },
       error: function (xhr, ajaxOptions, thrownError) {
      alert(xhr.status);
      alert(thrownError);
      } 
    });
}; */
}
