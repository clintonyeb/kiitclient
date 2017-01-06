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
  error: boolean;
  @ViewChild("dropdown") dropdown: ElementRef;

  constructor(public router: Router,
              public formBuilder: FormBuilder,
              public authService: AuthService,
              public userService: UserService) {

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

    this.conditions.setErrors(this.conditions.value ? null : {mustBeTrue: true} )
  }

  usernameBlurred(){
    if(this.username.value && this.username.valid){
      this.userService.searchUserName(this.username.value, 'username').subscribe((val: Response) => {
        if (val.status === 200)
          this.username.setErrors({alreadyExist: true});
        else if(this.username.hasError('alreadyExist')) this.username.setErrors(null);
      }, (err => {

      }))
    }
  }

  nicknameBlurred(){
    if(this.nickname.value && this.nickname.valid){
      this.userService.searchUserName(this.nickname.value, 'nickname').subscribe((val: Response) => {
        if (val.status === 200)
          this.nickname.setErrors({alreadyExist: true});
        else if(this.nickname.hasError('alreadyExist')) this.nickname.setErrors(null);
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
    this.conditions.setErrors(this.conditions.value ? null : {mustBeTrue: true} )
  }

  onFormSubmit(form: any) {
    this.loading = true;
    if (!form.nickname) form.nickname = form.username;
    this.authService.registerNewUser(form.username, form.nickname, form.password, form.gender).subscribe( () => {
      console.log('no error');
      this.loading = false;
      this.error = false;
      this.success = true;
      this.router.navigate(['/login']);
    }, (err) => {
      console.log('error', err);
      this.loading = false;
      this.error  = true;
      this.success = false;
    });
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


  //TODO: Implement field classes to show help on hover and nice colors
  fieldClasses(control: FormControl){
    return {
      error: control.touched && control.invalid,
      teal : control.touched && control.valid
    }
  }

}
