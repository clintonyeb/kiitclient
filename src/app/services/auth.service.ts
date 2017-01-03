import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {BASE_URL} from "./user.service";
import {User, AuthUser} from "../models/user";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import {AppStore} from "../models/AppStore";
import {Store} from "@ngrx/store";
import {LOGIN} from "../actions/user-actions";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate{

  user: User;
  constructor(public http: Http,
              public store: Store<AppStore>,
              public router: Router) {
    this.store.select(store => store.user).subscribe(data => this.user = data);
  }

  canActivate() {
    let val = this.isLoggedIn();
    if(!val){
      console.log('failure route');
      if(this.router.url !== '/login')
        this.router.navigate(['/login']);
    }
    return val;
  }

  login(username: string, password: string): Observable<boolean>{
    this.validateBeforeLogin();
    console.log('login', username, password);
     return this.http.post(`${BASE_URL}/login`,
      JSON.stringify({username: username, password: password}),
      this.getBasicHeaders())
      .map((response: Response) => {
      console.log(response);
        return response.json() as AuthUser
      })
      .map((authUser: AuthUser) =>{
       this.store.dispatch({type: LOGIN, payload: {authUser}});
        return !!authUser;
      });
  }

  validateBeforeLogin(){ //TODO: Validate user if credentials are already present
    /*let user = this.getAuthUser();
    if (user && user.access_token){
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
    }*/
  }

  isLoggedIn(): boolean {
      console.log('user', this.user);
        return !!this.user.authUser.access_token;

  }

  register(){}

  getAuthUser(): AuthUser {
    let item = localStorage.getItem('access_token');
    let userAuth = item ?  JSON.parse(item)  as AuthUser : null;
    return userAuth;
  }

 /* setToken(access_token: string){
    localStorage.setItem('access_token', JSON.stringify({name: 'access_token', access_token: access_token}));
  }*/

 remoteToken(): boolean{
   localStorage.removeItem('access_token');
   return true;
 }

  getBasicHeaders(): RequestOptions{
    let header = new  Headers({'Content-Type': 'application/json'});
    header.append('Accept', 'application.json');
    return new RequestOptions({headers: header});
  }

  getAuthenticatedHeader(){
    let authUser = this.getAuthUser();
    if (authUser && authUser.access_token){
      let header = new  Headers({'Content-Type': 'application/json'});
      header.append('Accept', 'application.json');
      header.append('X-Auth-Token', `${authUser.access_token}`);
      return new RequestOptions({headers: header});
    }
  }

}
