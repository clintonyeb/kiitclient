import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {Routes, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, RegisterComponent],
  bootstrap: [LoginComponent]
})
export class AuthModule { }
