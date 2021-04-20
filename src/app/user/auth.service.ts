import { Injectable } from "@angular/core";
//import { BehaviorSubject } from "rxjs";


@Injectable({providedIn:'root'})
export class AuthService {



    constructor() {

    }


    authUser(user: any) {
        let UserArray = [];
        if(localStorage.getItem('Users'))  {
          UserArray = JSON.parse(localStorage.getItem('Users'));
        }
        return UserArray.find(p => p.name === user.name && p.password === user.password)
      }
      loggedIn() {
        return !!localStorage.getItem('token');
      }
}
