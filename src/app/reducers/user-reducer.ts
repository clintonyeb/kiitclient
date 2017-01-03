import {ActionReducer, Action} from "@ngrx/store";
import {User, Avatar, Profile} from "../models/user";
import {LOGIN} from "../actions/index";

export const userReducer: ActionReducer<User> = (state: User = null, action: Action) =>{
  switch (action.type){
    default:
      return state;
  }
};

export const avatarReducer: ActionReducer<Avatar> = (state: Avatar = null, action: Action) => {
  switch (action.type){
    default:
      return state;
  }
};

export const profileReducer: ActionReducer<Profile> = (state: Profile = null, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
