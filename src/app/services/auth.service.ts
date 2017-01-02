import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs";
import {BASE_URL} from "./user.service";
import {User} from "../models/user";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  currentUser: User;

  constructor(public http: Http) { }

  login(username: string, password: string): Observable<boolean>{
     return this.http.post(`${BASE_URL}/login`,
      JSON.stringify({username: username, password: password}),
      this.getBasicHeaders())
      .map((response) => {
      console.log(response);
        return response.json() as User
      })
      .map((user) =>{
        this.currentUser = user;
        this.setToken(user.username, user.token);

        if (this.currentUser){
          console.log('authenticated success');
          return true;
        }
        else {
          console.error('authenticated failed');
          return false;
        }
      });
  }

  isLoggedIn(): boolean {
    return  !!this.getToken()
  }

  register(){}

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(username: string, token: string){
    localStorage.setItem('token', JSON.stringify({username: username, token: token}));
  }

  getBasicHeaders(): RequestOptions{
    let header = new  Headers({'Content-Type': 'application/json'});
    header.append('Accept', 'application.json');
    return new RequestOptions({headers: header});
  }

  getAuthenticatedHeader(){
    let token: string;
    if (token = this.getToken()){
      let header = new  Headers({'Content-Type': 'application/json'});
      header.append('Accept', 'application.json');
      header.append('X-Auth-Token', `${token}`);
      return new RequestOptions({headers: header});
    }
  }

}
