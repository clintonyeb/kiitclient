import {Component, OnInit, ChangeDetectionStrategy, Input} from "@angular/core";
import {Content} from "../../models/content";
import {Observable} from "rxjs";
import {ContentService} from "../../services/content.service";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnouncementComponent implements OnInit {

  contents: Observable<Array<Content>>;


  constructor(public contentService: ContentService) {
    this.contents = contentService.contents;
  }

  ngOnInit() {
  }

}
