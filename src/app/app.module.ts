import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ContentModule} from "./content/content.module";
import {AuthModule} from "./auth/auth.module";
import {Routes, RouterModule} from "@angular/router";
import {IndexComponent} from "./content/index/index.component";

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    ContentModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
