import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../model/login-user';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) {
    this.http = http;
  }
  login(usuario: LoginUser) {
    const data = `userName=${usuario.email}&password=${usuario.pass}&grant_type=password`;
    return this.http.post('http://localhost:8090//v1/Account/Login', data);
  }

  getToken(): string {
    return localStorage.getItem('Token');
  }
}
