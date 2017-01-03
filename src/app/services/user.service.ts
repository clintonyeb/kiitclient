import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";
import {User, Avatar, Profile} from "../models/user";
import {AppStore} from "../models/AppStore";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

export const BASE_URL = 'http://localhost:8080/api';

@Injectable()
export class UserService {

  user: Observable<User>;
  avatar: Observable<Avatar>;
  profile: Observable<Profile>;

  constructor (public http: Http, private store: Store<AppStore>) {
    this.user = store.select('user');
    this.avatar = store.select('avatar');
    this.profile = store.select('profile');
  }


}
