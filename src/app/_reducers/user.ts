import {User} from "../models/user";
import "rxjs/add/operator/map";
import * as useractions from "../actions/user";

export interface UserState {
  loading: boolean;
  errors: boolean;
  success: boolean;
  entity: User;
  complete: boolean;
}

export const initialState: UserState ={
  loading: false,
  errors: false,
  success: false,
  entity: {
    id: 0,
    password: '',
    avatar: null,
    enabled: false,
    gender: '',
    username: '',
    uniqueId: 0,
    authUser: null
  },
  complete: false
};

/*const initialState: User = {
  id: 0,
  password: '',
  avatar: null,
  enabled: false,
  gender: '',
  username: '',
  uniqueId: 0,
  authUser: null
};*/

export function userReducer(state = initialState, action: useractions.Actions): UserState {
  switch (action.type) {

    case useractions.UserActionTypes.LOGIN:
      let newState = state;
      newState.loading = true;
      newState.errors  = false;
      newState.complete = false;
      newState.success = false;
      newState.entity.username = action.payload.username;
      newState.entity.password = action.payload.password;
      return Object.assign({}, state, newState);

    case useractions.UserActionTypes.LOGGED_IN:
      newState = state;
      newState.loading = false;
      newState.errors  = false;
      newState.complete = true;
      newState.success = true;
      newState.entity.authUser = action.payload;
      return Object.assign({}, state, newState);

    case useractions.UserActionTypes.LOGOUT:
      return null ;

    case useractions.UserActionTypes.REGISTER:
      newState = state;
      newState.loading = true;
      newState.errors  = false;
      newState.complete = false;
      newState.success = false;
      newState.entity = action.payload;
      return Object.assign({}, state, newState);

    case useractions.UserActionTypes.REGISTRATION_COMPLETE:
      newState = state;
      newState.loading = false;
      newState.errors  = false;
      newState.complete = true;
      newState.success = true;
      newState.entity = action.payload;
      return Object.assign({}, state, newState);

    case useractions.UserActionTypes.LOGIN_FAILURE:
      newState = state;
      newState.loading = false;
      newState.errors  = true;
      newState.complete = true;
      newState.success = false;
      newState.entity.username = action.payload.username;
      newState.entity.password = action.payload.password;
      return Object.assign({}, state, newState);

    default:
      return state;
  }
}


/*
export function profileReducer(state: Profile = new Profile({}), action: Action) {
  switch (action.type) {
    case VIEW_PROFILE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function contentReducer(state: Content[] = [], action: Action) {
  switch (action.type) {

    case ADD_CONTENT:
      return [...state, action.payload];

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
          return state.map(userData => {
            userData.announcement = 0;
            userData.event = 0;
            userData.article = 0;
            return userData;
          });

        case 'announcements':
          return state.map(userData => {
            userData.announcement = 0;
            return userData;
          });
        case 'article':
          return state.map(userData => {
            userData.article = 0;
            return userData;
          });
        case 'event':
          return state.map(userData => {
            userData.event = 0;
            return userData;
          });
        default:
          throw new Error()
      }
    default:
      return state;
  }
}

*/
