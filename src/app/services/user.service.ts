import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getBasicHeaders} from "../utilities/utilities";
import {AppStore} from "../models/appstore";

export const BASE_URL = 'http://localhost:8080/api';

@Injectable()
export class UserService {

  /*user: Observable<User>;
  profile: Observable<Profile>;*/

  constructor(public http: Http, private store: Store<AppStore>/*, public authService: AuthService*/) {
    /*this.user = store.select(store => store.user);
    this.profile = store.select(store => store.profile);*/
  }

  searchForDuplicate(term: string, type: string): Observable<Response>{
    return this.http.get(`${BASE_URL}/guests/users/search?${type}=${term}&type=${type}`, getBasicHeaders())
  }

}
