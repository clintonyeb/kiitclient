import {Component, ElementRef, ViewChild, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormGroup, AbstractControl, FormBuilder, Validators, FormControl} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {Response} from "@angular/http";
import {Duplicate} from "../../models/authuser";
import {Observable, Subscription} from "rxjs";
import {UserState} from "../../_reducers/user";
import {AppStore} from "../../models/appstore";
import {Store} from "@ngrx/store";
import {UserActionTypes} from "../../actions/user";

declare const $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {

  formGroup: FormGroup;
  username: AbstractControl;
  nickname: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  gender: AbstractControl;
  conditions: AbstractControl;
  @ViewChild("dropdown") dropdown: ElementRef;
  userState: UserState;
  userSubscription: Subscription;

  constructor(public router: Router,
              public formBuilder: FormBuilder,
              public authService: AuthService,
              public userService: UserService,
              public store: Store<AppStore>) {

    this.formGroup = this.formBuilder.group({

      'username': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(4)]
      )],

      'nickname': ['', Validators.compose([
        Validators.minLength(4),
        Validators.pattern(/^[A-Za-z][A-Za-z0-9]+$/),
        Validators.maxLength(10)]
      )],

      'password': ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)]
      )],

      'confirmPassword': [''],

      'gender': ['', Validators.required],

      'conditions': [true]

    }, {validator: this.passwordValidator('password', 'confirmPassword')});

    this.username = this.formGroup.controls['username'];
    this.nickname = this.formGroup.controls['nickname'];
    this.password = this.formGroup.controls['password'];
    this.confirmPassword = this.formGroup.controls['confirmPassword'];
    this.gender = this.formGroup.controls['gender'];
    this.conditions = this.formGroup.controls['conditions'];

    this.conditions.setErrors(this.conditions.value ? null : {mustBeTrue: true});

    this.userSubscription = store.select(store => store.userState).subscribe(data => this.userState = data);
  }

  usernameBlurred() {
    if (this.username.value && this.username.valid) {
      this.userService.searchForDuplicate(this.username.value, 'username').subscribe((val: Response) => {
        let obj = val.json() as Duplicate;
        if (obj.status === true) {
          if (this.nickname.hasError('alreadyExist')) this.nickname.setErrors(null);
          return null;
        }

        else if (obj.status === false && obj.message === "EXISTS")
          this.username.setErrors({alreadyExist: true});
        else
          this.username.setErrors({notARollnumber: true});
      }, (err => {

      }))
    }
  }

  nicknameBlurred() {
    if (this.nickname.value && this.nickname.valid) {
      this.userService.searchForDuplicate(this.nickname.value, 'nickname').subscribe((val: Response) => {
        let obj = val.json() as Duplicate;
        if (obj.status === true) {
          if (this.nickname.hasError('alreadyExist')) this.nickname.setErrors(null);
          return null;
        }
        else
          this.nickname.setErrors({alreadyExist: true});
      }, (err => {

      }))
    }
  }

  ngAfterViewInit(): void {
    $(this.dropdown.nativeElement)
      .dropdown();
  }

//TODO: Implement sameusernameandpassword validation

  passwordValidator(pass: string, conf: string) {
    return (group: FormGroup) => {

      let password = group.controls[pass];
      let confirm = group.controls[conf];

      /*let name = group.controls[user];
       if ((!password.value) && (password.value == name.value))
       return password.setErrors({sameUsernameAndPassword: true});*/

      return (password.value !== confirm.value) ? confirm.setErrors({mismatchedPassword: true}) : null;
    };

  }

  onGenderChange(val: number) {
    this.gender.setValue(val);
  }

  onCheckBoxChanged() {
    this.conditions.setValue(!this.conditions.value);
    this.conditions.setErrors(this.conditions.value ? null : {mustBeTrue: true})
  }

  onFormSubmit(form: any) {
    this.store.dispatch({type: UserActionTypes.REGISTER, payload: form});
    if (!form.nickname) form.nickname = form.username;
    this.authService.registerNewUser(form.username, form.nickname, form.password, form.gender).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  onLoginClicked() {
    this.router.navigate(['/login']);
    return false;
  }

  formClasses() {
    return {
      loading: this.userState.loading,
      success: this.userState.success,
      error: this.formGroup.invalid
    };
  }


  //TODO: Implement field classes to show help on hover and nice colors
  fieldClasses(control: FormControl) {
    return {
      error: control.touched && control.invalid,
      teal: control.touched && control.valid
    }
  }

}
