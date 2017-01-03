import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, RequestOptions, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {ContentModule} from "./content/content.module";
import {AuthModule} from "./auth/auth.module";
import {Routes, RouterModule} from "@angular/router";
import {UserService} from "./services/user.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {StoreModule} from "@ngrx/store";
import {
  userReducer, avatarReducer, profileReducer, announcementReducer, articleReducer,
  contentReducer, eventReducer, voteReducer, tweetReducer
} from "./reducers/index";
import {tagReducer} from "./reducers/content-reducer";
import {ContentService} from "./services/content.service";


const routes: Routes = [
  {path: '', redirectTo: '/home/index', pathMatch: 'full'}
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
    RouterModule.forRoot(routes),
    StoreModule.provideStore({
      user: userReducer,
      avatar: avatarReducer,
      profile: profileReducer,

      contents: contentReducer,
      announcement: announcementReducer,
      article: articleReducer,
      event: eventReducer,
      tweet: tweetReducer,
      vote: voteReducer,
      tag: tagReducer
    })
  ],
  providers: [
    UserService,
    ContentService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
