import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogOutClicked(){
    this.authService.logOutAndRemoveToken()
  }
}
