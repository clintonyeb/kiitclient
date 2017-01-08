import { Component, OnInit } from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppStore} from "../../models/appstore";
import {UserState} from "../../_reducers/user";

@Component({
  selector: 'app-login-container',
  template: `<app-login [userData]="userSubscription | async" ></app-login>`
})
export class LoginContainerComponent implements OnInit {

  userSubscription: Observable<UserState>;

  constructor(private store: Store<AppStore>) {
    this.userSubscription = store.select(store => store.userState)
  }

  ngOnInit() {
  }

}
