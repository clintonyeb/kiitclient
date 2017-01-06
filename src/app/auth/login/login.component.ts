import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AppStore} from "../../models/AppStore";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  success: boolean = false;
  errors: boolean = false;
  user: Observable<User>;
  formGroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(public authService: AuthService,
              public router: Router,
              public store: Store<AppStore>,
              formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.username = this.formGroup.controls['username'];
    this.password = this.formGroup.controls['password'];
  }


  ngOnInit() {
    this.authService.authenticate();
    this.user = this.store.select(store => store.user)
  }

  onSubmit(f: any) {
    this.loading = true;
    this.authService.login(f.username, f.password)
      .subscribe(data => {
        this.success = true;
        this.loading = false;
        // this.router.navigate(['/home/index'])
      }, err => {
        this.errors = true;
        this.loading = false;
      });
    /*setTimeout(() => {

    }, 2000);*/
  }

  formClasses() {
    return {
      loading: this.loading,
      success: this.success,
      warning: this.formGroup.invalid,
      error: this.errors
    };
  }

  onSignUpClicked() {
    this.router.navigate(['/register']);
    return false;
  }

}
