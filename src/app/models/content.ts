import {Avatar, User} from "./user";

export class Content {

  public text: string;
  public lastUpdated: string;
  public flagged: boolean;
  public avatars?: Array<Avatar>;
  user: User;
  vote: Vote;
  contentType: string;
  tags: Array<Tag>;


  constructor(text: string, lastUpdated: string, flagged: boolean, avatars: Array<Avatar>, user: User, vote: Vote, contentType: string, tags: Array<Tag>) {
    this.text = text;
    this.lastUpdated = lastUpdated;
    this.flagged = flagged;
    this.avatars = avatars;
    this.user = user;
    this.vote = vote;
    this.contentType = contentType;
    this.tags = tags;
  }
}

export class Vote {
  public upVotes: number;
  public downVotes: number;
  public lastUpdated: string;
  public user: User;

  constructor(upVotes: number,
              downVotes: number,
              lastUpdated: string,
              user: User) {
    this.upVotes = upVotes;
    this.downVotes = downVotes;
    this.lastUpdated = lastUpdated;
    this.user = user;
  }
}

export class Tag {
  tagName: string;

  constructor(tagName: string) {
    this.tagName = tagName;
  }
}

export class Announcement extends Content{
  title: string;


  constructor(text: string, lastUpdated: string, flagged: boolean, avatars: Array<Avatar>, user: User, vote: Vote, contentType: string, tags: Array<Tag>, title: string) {
    super(text, lastUpdated, flagged, avatars, user, vote, contentType, tags);
    this.title = title;
  }
}


export class Article extends Content{
  title: string;

  constructor(text: string, lastUpdated: string, flagged: boolean, avatars: Array<Avatar>, user: User, vote: Vote, contentType: string, tags: Array<Tag>, title: string) {
    super(text, lastUpdated, flagged, avatars, user, vote, contentType, tags);
    this.title = title;
  }
}
export class Event extends Content {
  title: string;
  venue: string;
  dateOfEvent: string;

  constructor(text: string, lastUpdated: string, flagged: boolean, avatars: Array<Avatar>, user: User, vote: Vote, contentType: string, tags: Array<Tag>, title: string, venue: string, dateOfEvent: string) {
    super(text, lastUpdated, flagged, avatars, user, vote, contentType, tags);
    this.title = title;
    this.venue = venue;
    this.dateOfEvent = dateOfEvent;
  }
}

export class Song{

}

export class Tweet extends Content{

  constructor(text: string, lastUpdated: string, flagged: boolean, avatars: Array<Avatar>, user: User, vote: Vote, contentType: string, tags: Array<Tag>) {
    super(text, lastUpdated, flagged, avatars, user, vote, contentType, tags);
  }
}
