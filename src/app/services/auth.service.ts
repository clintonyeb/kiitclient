import { Injectable } from '@angular/core';
import {Headers} from "@angular/http";

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return  !!this.getToken()
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getHeaders(): Headers{
    let header: Headers;
    header.append('')
    return header;
  }

}
