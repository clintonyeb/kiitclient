import {User} from "./user";
import {Avatar} from "./avatar";
export interface Profile {

  bio: string;
  contact: string;
  address: string;
  emailId: string;
  avatar: Avatar;
  user: User;
  socialNetworks: Array<string>;
}
