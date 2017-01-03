import {Component, OnInit, ChangeDetectionStrategy, Input} from "@angular/core";
import {Tweet} from "../../models/content";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetComponent implements OnInit {

  tweets: Observable<Array<Tweet>>;
  constructor() { }

  ngOnInit() {
  }

}
