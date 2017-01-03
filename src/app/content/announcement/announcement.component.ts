import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnouncementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
