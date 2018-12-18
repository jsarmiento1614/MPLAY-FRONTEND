import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient) { 
    this.http=http;
  }

  addUser(user : User){
    return this.http.post("http://localhost:8090/v1/Account/Register", user)
  }

}
