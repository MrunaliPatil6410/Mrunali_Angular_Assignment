import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class AdminService{
 url = 'http://localhost:3000/locations';
 url1 = 'http://localhost:3000/flights';
  store: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient){

  }

 getLocations()
  {
    return this._http.get(this.url);
  }

  addLocation(data)
  {
     return this._http.post(this.url, data);
  }

  deleteLocation(id)
  {
     return this._http.delete(`${this.url}/${id}`);
  }

  getCurrentLocation(id)
  {
    return this._http.get(`${this.url}/${id}`);
  }

  updateSelectedLocation(id,data)
  {
    return this._http.put(`${this.url}/${id}`,data);
  }

  getLocation(id)
  {
    return this._http.get(`${this.url}/${id}`);
  }

  getFlights(){
    return this._http.get(this.url1);
  }

  addFlight(data)
  {
     return this._http.post(this.url1, data);
  }

  deleteFlight(id)
  {
     return this._http.delete(`${this.url1}/${id}`);
  }

  getCurrentFlight(id)
  {
    return this._http.get(`${this.url1}/${id}`);
  }

  updateSelectedFlight(id,data)
  {
    return this._http.put(`${this.url1}/${id}`,data);
  }

  getFlight(id)
  {
    return this._http.get(`${this.url1}/${id}`);
  }

  getValueFromObservable():Observable<string> {
    return this.store.map(res => res.json());
}
}
