import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user.model';



@Injectable({providedIn: 'root'})
export class UserService{
globalCollection = [];
 url = 'http://localhost:3000/flights';


regURL = 'http://localhost:3000/users';

book = 'http://localhost:3000/bookFlights';

  constructor(private httpClient: HttpClient) { }

  registerUser(data) {
    return this.httpClient.post(this.regURL, data);
  }

  getFlights(){

    return this.httpClient.get(this.url);
  }
  getCurrentFlight(id)
  {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  bookFlight(data)
  {
     return this.httpClient.post(this.book, data);
  }
  
  updateSelectedFlight(id,data)
  {
     
    return this.httpClient.put(`${this.url}/${id}`, data);
  }

 



}

