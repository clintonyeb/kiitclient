import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormGroup, AbstractControl, FormBuilder, Validator, Validators, FormControl} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;
  username: AbstractControl;
  nickname: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  gender: AbstractControl;
  conditions: AbstractControl;
  loading: boolean;
  success: boolean;

  constructor(public router: Router,
              public formBuilder: FormBuilder,
              public authService: AuthService) {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required])],
      'nickname': ['', Validators.minLength(4)],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'confirmPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'gender': ['', Validators.required],
      'conditions': [false, Validators.compose([this.conditionsValidator])]
    }, {validator: this.passwordValidator('password', 'confirmPassword')});

    this.username = this.formGroup.controls['username'];
    this.nickname = this.formGroup.controls['nickname'];
    this.password = this.formGroup.controls['password'];
    this.confirmPassword = this.formGroup.controls['confirmPassword'];
    this.gender = this.formGroup.controls['gender'];
    this.conditions= this.formGroup.controls['conditions'];
  }

  ngOnInit() {

  }

  passwordValidator(pass: string, conf: string){
    return (group: FormGroup) => {
      let password = group.controls[pass];
      let confirm = group.controls[conf];
      let name = group.controls['username'];
      if(password.value === name.value)
        return password.setErrors({sameUsernameAndPassword: true});
      if(password.value !== confirm.value)
        return confirm.setErrors({mismatchedPassword: true});
    };
  }

  conditionsValidator(control: FormControl) {
    if (control.value === false)
      return {mustBeTrue: true};
  }

  onGenderChange(val: number){
    this.gender.setValue(val);
  }

  onCheckBoxChanged(){
    this.conditions.setValue(!this.conditions.value);
  }

  onFormSubmit(form: any) {
    console.log(form);
    if(!form.nickname) form.nickname = form.username;
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

}
