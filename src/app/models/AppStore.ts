import {User} from "./user";
import {Content} from "./content";
export interface AppStore {
  user: User;
  contents: Array<Content>;
}
