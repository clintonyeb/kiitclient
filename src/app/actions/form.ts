import {type} from "../utilities/action_types";
import {Action} from "@ngrx/store";

export const FormActionTypes = {
  NICKNAME_AUTHENTICATE: type('[FORM] NicknameAuthenticate'),
  USERNAME_AUTHENTICATE: type('[FORM] UsernameAuthenticate'),
  FORM_SUBMIT: type('[FORM] FormSubmit'),
  REGISTRATION_RESULTS: type('[FORM] RegistrationResults'),
  LOGIN_RESULTS: type('[FORM] LoginResults')
};


export class NicknameAuthenticateAction implements Action {

  type = FormActionTypes.NICKNAME_AUTHENTICATE;

  constructor(public payload: boolean){

  }
}
