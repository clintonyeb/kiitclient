import {NewContentNumber, Tweet, Content} from "./content";
import {Profile} from "./profile";
import {User} from "./user";
import {UserState} from "../_reducers/user";

export interface AppStore {
  userState: UserState;
  profile: Profile;
  contents: Array<Content>;
  tweets: Array<Tweet>;
  newContentNumber: NewContentNumber;
}
