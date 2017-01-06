import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {BASE_URL} from "./user.service";
import {User, AuthUser} from "../models/user";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import {AppStore} from "../models/AppStore";
import {Store} from "@ngrx/store";
import {LOGIN} from "../actions/user-actions";
import {CanActivate, Router} from "@angular/router";
import {getAccessToken, getBasicHeaders, removeAccessToken, setAccessToken} from "../utilities/utilities";

@Injectable()
export class AuthService implements CanActivate {

  user: User;

  constructor(public http: Http,
              public store: Store<AppStore>,
              public router: Router) {
    this.store.select(store => store.user).subscribe(data => this.user = data);
  }

  canActivate() {
    return this.authenticate();
  }

  authenticate(): boolean {
    let val = this.hasAccessToken();
    if (!val) {
      console.log('failure route');
      if (this.router.url !== '/login')
        this.router.navigate(['/login']);
    }

    /*if(val && this.router.url === '/login')
     //this.router.navigate(['/home/index']);
     console.log('navigating to homepage');*/

    return val;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${BASE_URL}/login`,
      JSON.stringify({username: username, password: password}),
      getBasicHeaders())
      .map((res: Response) => {
        console.log(res);
        if (res) {
          if (res.status === 200 || res.status === 201) {
            let authUser = res.json() as AuthUser;
            this.store.dispatch({type: LOGIN, payload: {authUser}});
            setAccessToken(authUser);
            console.log('saved token');
            return !!authUser;
          }
        }
      }).catch((error: any) => {
        if (error.status < 400 || error.status === 500) {
          return Observable.throw(new Error(error.status));
        }
      })
  }

  registerNewUser(username: string, nickname: string, password: string, gender: number) {
    console.log( JSON.stringify({username, nickname, password, gender}));
    return this.http.post(`${BASE_URL}/guests/users`,
      JSON.stringify({username, nickname, password, gender}),
      getBasicHeaders())
      .map((response: Response) => {
        let authUser = response.json() as AuthUser;
        let user = response.json() as User;
        user.authUser = authUser;
      });
  }

  hasAccessToken(): boolean {
    if (this.user && this.user.authUser.access_token)
      return !!this.user.authUser.access_token;
    else {
      let authUser = getAccessToken();
      if (authUser) {
        this.store.dispatch({type: LOGIN, payload: {authUser}});
        return true;
      }
      return false;
    }
  }

  logOut() {
    removeAccessToken();
    this.router.navigate(['/login']);
  }

}
