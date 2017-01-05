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
import {getAccessToken, getBasicHeaders, removeAccessToken} from "../utilities/utilities";

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

    if(val && this.router.url === '/login')
      this.router.navigate(['/home/index']);

    return val;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${BASE_URL}/login`,
      JSON.stringify({username: username, password: password}),
      getBasicHeaders())
      .map((response: Response) => {
        console.log(response);
        return response.json() as AuthUser
      })
      .map((authUser: AuthUser) => {
        this.store.dispatch({type: LOGIN, payload: {authUser}});
        return !!authUser;
      });
  }


  hasAccessToken(): boolean {
    if (this.user)
      return !!this.user.authUser.access_token;
    else {
      let authUser = getAccessToken();
      if (authUser){
        this.store.dispatch({type: LOGIN, payload: {authUser}});
        return true;
      }
      return false;
    }
  }

  logOut() {
    removeAccessToken();
  }

}
