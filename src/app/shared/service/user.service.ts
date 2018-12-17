import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient) { 
    this.http=http;
  }

  addUser(user : User){
    debugger;
    return this.http.post<User>("http://localhost:8090/v1/Account/Registers", user)
  }
}
