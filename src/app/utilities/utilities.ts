import {AuthUser} from "../models/user";
import {RequestOptions, Headers} from "@angular/http";

export function getAccessToken(): AuthUser {
  let item = localStorage.getItem('access_token');
  return item ? JSON.parse(item)  as AuthUser : null;
}

export function setAccessToken(authUser: AuthUser): boolean{
  localStorage.setItem('access_token', JSON.stringify(authUser));
  return true;
}

export function  removeAccessToken(): boolean{
  localStorage.removeItem('access_token');
  return true;
}

export function getBasicHeaders(): RequestOptions{
  let header = new  Headers({'Content-Type': 'application/json'});
  header.append('Accept', 'application.json');
  return new RequestOptions({headers: header});
}

export function getAuthenticatedHeader(){
  let authUser = getAccessToken();
  if (authUser && authUser.access_token){
    let header = new  Headers({'Content-Type': 'application/json'});
    header.append('Accept', 'application.json');
    header.append('X-Auth-Token', `${authUser.access_token}`);
    return new RequestOptions({headers: header});
  }
}


