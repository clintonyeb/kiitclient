import {User, Avatar, Profile} from "./user";
import {Content, Announcement, Article, Tweet, Vote, Tag} from "./content";
export interface AppStore {
  user: User;
  avatar: Avatar;
  profile: Profile;

  contents: Array<Content>;
  announcement: Announcement;
  article: Article;
  event: Event;
  tweet: Tweet;
  vote: Vote;
  tag: Tag;
}
