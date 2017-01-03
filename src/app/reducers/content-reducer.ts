import {ActionReducer, Action} from "@ngrx/store";
import {Content, Announcement, Article, Tweet, Vote, Tag} from "../models/content";

export const contentReducer: ActionReducer<Content[]> = (state: Content[] = [], action: Action) => {
  switch (action.type){
    default:
      return state;
  }
};

export const announcementReducer: ActionReducer<Announcement> = (state: Announcement = null, action: Action) => {
  switch (action.type){
    default:
      return state;
  }
};

export const articleReducer: ActionReducer<Article> = (state: Article = null, action: Action) => {
  switch (action.type){
    default:
      return state;
  }
};

export const eventReducer: ActionReducer<Event> = (state: Event = null, action: Action) => {
  switch (action.type){
    default:
      return state;
  }
};

export const tweetReducer: ActionReducer<Tweet> = (state: Tweet = null, action: Action) => {
  switch (action.type){
    default:
      return state;
  }
};

export const voteReducer: ActionReducer<Vote> = (state: Vote = null, action: Action) => {
  switch (action.type){
    default:
      return state;
  }
};

export const tagReducer: ActionReducer<Tag> = (state: Tag = null, action: Action) => {
  switch (action.type){
    default:
      return state;
  }
};
