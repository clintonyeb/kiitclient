import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AppStore} from "../../models/AppStore";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public authService: AuthService,
              public router: Router,
              public store: Store<AppStore>) { }

  loading: boolean = false;
  success: boolean = false;
  errors: boolean = false;
  user: Observable<User>;

  ngOnInit() {
    this.user = this.store.select(store => store.user)
  }

  onSubmit(f: any){
    this.loading = true;
    setTimeout(() => {
      this.authService.login(f.rollnumber, f.password)
        .subscribe(data => {
          this.loading = false;
          this.router.navigate(['/home/index'])
        }, err => {
          this.loading = false;
          console.error(err)
        });
    }, 2000);

  }

  formClasses(){
    return {
      loading: this.loading,
      success: this.success,
      error: this.errors
    };
  }

}
