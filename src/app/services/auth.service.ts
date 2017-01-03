import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {BASE_URL} from "./user.service";
import {User, AuthUser} from "../models/user";
import "rxjs/add/operator/map";
import {AppStore} from "../models/AppStore";
import {Store} from "@ngrx/store";
import {LOGIN} from "../actions/user-actions";
import {CanActivate, CanActivateChild, Router} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate{

  constructor(public http: Http,
              public store: Store<AppStore>,
              public router: Router) { }

  canActivate() {
    if (this.isLoggedIn()){
      console.log('success route');
      return true;
    }else {console.log('failure route');

      this.router.navigate(['/login']);
      return false
    }
  }

  login(username: string, password: string): Observable<boolean>{
    this.remoteToken();
     return this.http.post(`${BASE_URL}/login`,
      JSON.stringify({username: username, password: password}),
      this.getBasicHeaders())
      .map((response: Response) => {
      console.log(response);
        return response.json() as AuthUser
      })
      .map((data: AuthUser) =>{
       this.store.dispatch({type: LOGIN, payload: {data}});
        if (data){
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
    let userAuth = JSON.parse(localStorage.getItem('token')) as AuthUser;
    console.log(userAuth.token);
    return userAuth.token;
  }

 /* setToken(token: string){
    localStorage.setItem('token', JSON.stringify({name: 'token', token: token}));
  }*/

 remoteToken(): boolean{
   localStorage.removeItem('token');
   return true;
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
