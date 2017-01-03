import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User, Avatar, Profile} from "../models/user";
import {AppStore} from "../models/AppStore";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

export const BASE_URL = 'http://localhost:8080/api';

@Injectable()
export class UserService {

  user: Observable<User>;
  profile: Observable<Profile>;

  constructor (public http: Http, private store: Store<AppStore>) {
    this.user = store.select(store => store.user);
    this.profile = store.select(store => store.profile);
  }


}
