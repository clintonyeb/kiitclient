import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
