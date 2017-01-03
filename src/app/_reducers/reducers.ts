import {Action} from "@ngrx/store";
import {User, Profile} from "../models/user";
import {NewContentNumber, Content, Tweet} from "../models/content";
import {VIEW_CONTENT, LOGIN, USER_DETAILS_FETCHED} from "../actions/user-actions";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

export function userReducer(state: User = new User({}), action: Action) {
  switch (action.type) {
    case LOGIN:
      let user = Object.assign({}, state, action.payload);
      console.log('reducer', user);
      return user;
    case USER_DETAILS_FETCHED:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function profileReducer(state: Profile = null, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function contentReducer(state: Content[] = [], action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function tweetReducer(state: Tweet[] = [], action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function newContentNumberReducer(state: Observable<NewContentNumber> = null, action: Action): Observable<NewContentNumber> {
  switch (action.type) {
    case VIEW_CONTENT:
      let id = action.payload.id;
      switch (id) {
        case 'home':
          return state.map(data => {
            data.announcement = 0;
            data.event = 0;
            data.article = 0;
            return data;
          });

        case 'announcements':
          return state.map(data => {
            data.announcement = 0;
            return data;
          });
        case 'article':
          return state.map(data => {
            data.article = 0;
            return data;
          });
        case 'event':
          return state.map(data => {
            data.event = 0;
            return data;
          });
        default:
          throw new Error()
      }
    default:
      return state;
  }
}

