import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import {AppStore} from "../../models/appstore";
import {UserState} from "../../_reducers/user";
import {LoginAction, UserActionTypes, LoginSimple} from "../../actions/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  @Input() userData: UserState;
  formGroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(public authService: AuthService,
              public router: Router,
              formBuilder: FormBuilder) {

    this.formGroup = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.username = this.formGroup.controls['username'];
    this.password = this.formGroup.controls['password'];
  }

  onSubmit(f: any) {
    let data = f as LoginSimple;
    this.authService.login(data.username, data.password)
      .subscribe(data => {
        if (data){
          this.router.navigate(['/home/index'])
        }
      });
  }

  formClasses() {
    return {
      loading: this.userData.loading,
      success: this.userData.success,
      warning: this.formGroup.invalid,
      error: this.userData.errors
    };
  }

  onSignUpClicked() {
    this.router.navigate(['/register']);
    return false;
  }

}
