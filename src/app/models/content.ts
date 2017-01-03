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

  title: string; //announcement and Article

  venue: string; //event
  dateOfEvent: string;  //event


  constructor(obj?: any) {
    this.text = obj.text;
    this.lastUpdated = obj.lastUpdated;
    this.flagged = obj.flagged;
    this.avatars = obj.avatars;
    this.user = obj.user;
    this.vote = obj.vote;
    this.contentType = obj.contentType;
    this.tags = obj.tags;

    this.title = obj.title || null;
    this.venue = obj.event || null;
    this.dateOfEvent = obj.dateOfEvent || null;
  }
}


export class Tweet {

  public text: string;
  public lastUpdated: string;
  public flagged: boolean;
  public avatars?: Array<Avatar>;
  user: User;
  vote: Vote;
  contentType: string;
  tags: Array<Tag>;

  constructor(obj?: any) {
    this.text = obj.text;
    this.lastUpdated = obj.lastUpdated;
    this.flagged = obj.flagged;
    this.avatars = obj.avatars;
    this.user = obj.user;
    this.vote = obj.vote;
    this.contentType = obj.contentType;
    this.tags = obj.tags;
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

export class Song{

}

export class NewContentNumber {
  announcement: number;
  article: number;
  event: number;

  constructor(obj?: any) {
    this.announcement = obj.announcement || 0;
    this.article = obj.article || 0;
    this.event = obj.event || 0;
  }
}
