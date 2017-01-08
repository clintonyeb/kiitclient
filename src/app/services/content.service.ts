import {Injectable} from "@angular/core";
import {Content, NewContentNumber, Tweet} from "../models/content";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Http} from "@angular/http";
import {AppStore} from "../models/appstore";

@Injectable()
export class ContentService {
  contents: Observable<Array<Content>>;
  tweets: Observable<Array<Tweet>>;
  newContentNumber: Observable<NewContentNumber>;

  constructor(public http: Http, public store: Store<AppStore>) {
    /*this.contents = store.select(store => store.contents);
    this.newContentNumber = store.select(store => store.newContentNumber);*/
  }

  sideNavItemSelected(id: string){
    //this.store.dispatch({type: VIEW_CONTENT, payload: {id: id}})
  }

}
