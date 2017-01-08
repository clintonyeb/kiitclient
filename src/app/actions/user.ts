import {type} from '../utilities/action_types';
import {Action} from "@ngrx/store";
import {User} from "../models/user";
import {AuthUser} from "../models/authuser";

export const UserActionTypes = {
    LOGIN: type('[USER] Login'),
    LOGOUT: type('[USER] Logout'),
    LOGGED_IN: type('[USER] LoggedIn'),
    LOGIN_FAILURE: type('[USER] LoginFailed'),
    REGISTER: type('[USER] Register'),
    REGISTRATION_COMPLETE: type('[USER] RegistrationCompleteAction'),
    REGISTRATION_FAILURE: type('[USER] RegistrationFailureAction')
};

export interface LoginSimple {
  username: string;
  password: string;
}

export class LoginAction implements Action {

  type = UserActionTypes.LOGIN;

  constructor(public payload: LoginSimple){}
}

export class LogoutAction implements Action {

  type = UserActionTypes.LOGOUT;

  constructor(public payload: boolean){}
}

export class LoggedInAction implements Action {

  type = UserActionTypes.LOGGED_IN;
  constructor(public payload: AuthUser){}
}

export class RegisterAction implements Action {
  type = UserActionTypes.REGISTER;

  constructor(public payload: User){}
}

export class RegistrationCompleteAction implements Action {
  type = UserActionTypes.REGISTRATION_COMPLETE;

  constructor(public payload: User){}
}

export class LogInFailureAction implements Action {
  type = UserActionTypes.LOGIN_FAILURE;

  constructor(public payload: LoginSimple){}
}

export class RegistrationFailureAction implements Action {
  type = UserActionTypes.REGISTRATION_FAILURE;

  constructor(public payload: User){}
}
export type Actions = LoggedInAction
  | LoginAction
  | LogoutAction
  | RegisterAction
  | RegistrationCompleteAction
  | LogInFailureAction
  | RegistrationFailureAction;
