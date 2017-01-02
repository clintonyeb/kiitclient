import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";
import {User} from "../models/user";

export const BASE_URL = 'http://localhost:8080/api';

@Injectable()
export class UserService {

  currentUser: User;
  constructor (public http: Http) { }

  getToken(username: string, password: string){
      this.http.post(`${BASE_URL}/login`, JSON.stringify({username: username, password: password}))
      .subscribe((data: Response) => {
          data.json() as User
      });
      //map((response: Response) => response.json() as User)
  }

}
