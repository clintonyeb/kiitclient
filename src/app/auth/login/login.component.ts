import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: AuthService) { }

  ngOnInit() {
  }

  doLogin(){
    this.userService.login('clinton', 'password').subscribe(data => console.log(data), err => console.error(err));
  }

}
