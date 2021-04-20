import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class DataService{

 //url = 'http://localhost:3000/flights';
 globalCollection = [] ;
 id:number;
 url = 'http://localhost:3000/flights';

 
 constructor(private httpClient:HttpClient){}
 saveCollection(data)
 {
    data=this.httpClient.get(this.url);
    this.globalCollection = data;
 }

 updateCollection(data)
{
  data=this.globalCollection[this.id].availableTickets - 1;
  return data;
}

}

