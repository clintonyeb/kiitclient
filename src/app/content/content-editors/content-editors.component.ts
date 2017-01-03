import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-content-editors',
  templateUrl: './content-editors.component.html',
  styleUrls: ['./content-editors.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentEditorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
