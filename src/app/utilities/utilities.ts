import {RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {AuthUser} from "../models/authuser";

export function getAccessToken(): Observable<AuthUser> {
  let item = localStorage.getItem('access_token');
  if (item){
    return Observable.from(item)
      .filter(val => val !== null)
      .map(val => {
        return JSON.parse(val) as AuthUser;
      })
  }
  else return null;

}

export function setAccessToken(authUser: AuthUser): Observable<boolean>{
  localStorage.setItem('access_token', JSON.stringify(authUser));
  return Observable.of(true)
}

export function  removeAccessToken(): Observable<boolean>{
  return getAccessToken().filter(x => x !== null).map(x => {
    localStorage.removeItem('access_token');
    return true;
  });
}

export function getBasicHeaders(): RequestOptions{
  let header = new  Headers({'Content-Type': 'application/json'});
  header.append('Accept', 'application.json');
  return new RequestOptions({headers: header});
}

export function getAuthenticatedHeader(){
  return getAccessToken().map(auth => {
    if (auth && auth.access_token){
      let header = new  Headers({'Content-Type': 'application/json'});
      header.append('Accept', 'application.json');
      header.append('X-Auth-Token', `${auth.access_token}`);
      return new RequestOptions({headers: header});
    }
  });

}


