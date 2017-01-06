import {Component, ElementRef, ViewChild, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormGroup, AbstractControl, FormBuilder, Validators, FormControl} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {Response} from "@angular/http";
declare const $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit{
  formGroup: FormGroup;
  username: AbstractControl;
  nickname: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  gender: AbstractControl;
  conditions: AbstractControl;
  loading: boolean;
  success: boolean;
  @ViewChild("dropdown") dropdown: ElementRef;

//TODO: Add maxsize 20 to nickname and password and also 4..15 for username

  constructor(public router: Router,
              public formBuilder: FormBuilder,
              public authService: AuthService,
              public userService: UserService) {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(4)])],
      'nickname': ['', Validators.compose([Validators.minLength(4), this.nickNameValidator, Validators.maxLength(10)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'confirmPassword': [''],
      'gender': ['', Validators.required],
      'conditions': [false, Validators.compose([this.conditionsValidator])]
    }, {validator: this.passwordValidator('password', 'confirmPassword')});

    this.username = this.formGroup.controls['username'];
    this.nickname = this.formGroup.controls['nickname'];
    this.password = this.formGroup.controls['password'];
    this.confirmPassword = this.formGroup.controls['confirmPassword'];
    this.gender = this.formGroup.controls['gender'];
    this.conditions = this.formGroup.controls['conditions'];
  }

  usernameBlured(){
    if(this.username.value && this.username.valid){
      this.userService.searchUserName(this.username.value, 'username').subscribe((val: Response) => {
        if (val.status === 200)
          this.username.setErrors({alreadyExist: true});
      }, (err => {

      }))
    }
  }

  nicknameBlured(){
    if(this.nickname.value && this.nickname.valid){
      this.userService.searchUserName(this.nickname.value, 'nickname').subscribe((val: Response) => {
        if (val.status === 200)
          this.nickname.setErrors({alreadyExist: true});
      }, (err => {

      }))
    }
  }

  ngAfterViewInit(): void {
    $(this.dropdown.nativeElement)
      .dropdown();
  }


  nickNameValidator(control: FormControl){
    if(control.touched &&  !control.value.match('/^[a-zA-Z]/'))
      return {mustBeCharactersOnly: true};
  }


  passwordValidator(pass: string, conf: string) {
    return (group: FormGroup) => {
      let password = group.controls[pass];
      let confirm = group.controls[conf];
      /*let name = group.controls[user];
      if ((!password.value) && (password.value == name.value))
        return password.setErrors({sameUsernameAndPassword: true});*/
      if (password.value !== confirm.value)
        return confirm.setErrors({mismatchedPassword: true});
    };
  }


  conditionsValidator(control: FormControl) {
    if (control.touched && control.value === false)
      return {mustBeTrue: true};
  }

  onGenderChange(val: number) {
    this.gender.setValue(val);
  }

  onCheckBoxChanged() {
    this.conditions.setValue(!this.conditions.value);
  }

  onFormSubmit(form: any) {
    console.log(form);
    if (!form.nickname) form.nickname = form.username;
    this.authService.registerNewUser(form.username, form.nickname, form.password, form.gender).subscribe();
  }

  onLoginClicked() {
    this.router.navigate(['/login']);
    return false;
  }

  formClasses() {
    return {
      loading: this.loading,
      success: this.success,
      error: this.formGroup.invalid
    };
  }

  onChange(value){

  }

}
