import {Avatar} from "./avatar";
import {AuthUser} from "./authuser";

export interface User {
  id: number;
  password: string;
  avatar: Avatar;
  enabled: boolean;
  uniqueId: number;
  gender: string;
  username: string;
  authUser: AuthUser;

}

