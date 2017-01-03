import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from "@angular/core";
import {NewContentNumber} from "../../models/content";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {ContentService} from "../../services/content.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {

  newContentNumber: Observable<NewContentNumber>;
  user: Observable<User>;
  announcement: number;
  article: number;
  event: number;
  total: number;

  constructor(public userService: UserService, public contentService: ContentService) {
    this.newContentNumber = contentService.newContentNumber;
    this.user = userService.user;
  }

  ngOnInit() {
    this.newContentNumber.subscribe(content => {
      this.announcement = content.announcement;
      this.article = content.article;
      this.event = content.event;
      this.total = this.announcement + this.article + this.event;
    })

  }

  addColorEffect(num: number) {
    return {
      teal: num,
      left: num,
      pointing: num
    };
  }

}
