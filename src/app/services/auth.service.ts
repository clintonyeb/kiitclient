import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {BASE_URL} from "./user.service";
import {User} from "../models/user";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import {Store} from "@ngrx/store";
import {UserActionTypes} from "../actions/user";
import {CanActivate, Router} from "@angular/router";
import {getAccessToken, getBasicHeaders, removeAccessToken, setAccessToken} from "../utilities/utilities";
import {AppStore} from "../models/appstore";
import {AuthUser} from "../models/authuser";

@Injectable()
export class AuthService implements CanActivate {

  constructor(public http: Http,
              public store: Store<AppStore>,
              public router: Router) {
  }

  canActivate() {
    return this.authenticate();
  }

  authenticate(): Observable<boolean>{
    let val = this.hasAccessToken();
    if (!val) {
      if (this.router.url !== '/login')
        this.router.navigate(['/login']);
    }
    return val;
  }

  login(username: string, password: string): Observable<boolean> {
    this.store.dispatch({type: UserActionTypes.LOGIN, payload: {username, password}});
    return this.http.post(`${BASE_URL}/login`,
      JSON.stringify({username: username, password: password}),
      getBasicHeaders())
      .map((res: Response) => {
        if (res) {
          if (res.status === 200 || res.status === 201) {
            let authUser = res.json() as AuthUser;
            this.store.dispatch({type: UserActionTypes.LOGGED_IN, payload: {authUser}});
            setAccessToken(authUser);
            console.log('saved token');
            return !!authUser;
          }
        }
      })/*.catch((error: any) => {
        if (error.status < 400 || error.status === 500) {
          this.store.dispatch({type: UserActionTypes.LOGIN_FAILURE, payload: error});
        }
      }*/
  }

  registerNewUser(username: string, nickname: string, password: string, gender: number) {
    console.log( JSON.stringify({username, nickname, password, gender}));
    return this.http.post(`${BASE_URL}/guests/users`,
      JSON.stringify({username, nickname, password, gender}),
      getBasicHeaders())
      .map((response: Response) => {
        this.store.dispatch({type: UserActionTypes.REGISTRATION_COMPLETE, payload: response.json() as User});
      }, (err => {
        this.store.dispatch({type: UserActionTypes.REGISTRATION_FAILURE, payload: err.json()});
      }));
  }

  hasAccessToken(): Observable<boolean>{
    return this.store.select(store => store.userState)
      .map(user => {
        if (user && user.entity.authUser.access_token)
          return !!user.entity.authUser.access_token;
        else {
          let authUser = getAccessToken();
          if (authUser) {
            this.store.dispatch({type: UserActionTypes.LOGIN, payload: {authUser}});
            return true;
          }
          return false;
        }
      });

  }

  logOutAndRemoveToken() {
    removeAccessToken();
    this.router.navigate(['/login']);
  }

}
