import {User, Avatar, Profile} from "./user";
import {Content, NewContentNumber, Tweet} from "./content";
export interface AppStore {
  user: User;
  profile: Profile;
  contents: Array<Content>;
  tweets: Array<Tweet>;
  newContentNumber: NewContentNumber;
}
