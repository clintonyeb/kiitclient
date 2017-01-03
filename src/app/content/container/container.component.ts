import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Observable} from "rxjs";
import {Content, NewContentNumber, Tweet} from "../../models/content";
import {ContentService} from "../../services/content.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
