import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ContentModule} from "./content/content.module";
import {AuthModule} from "./auth/auth.module";
import {Routes, RouterModule} from "@angular/router";
import {UserService} from "./services/user.service";
import {AuthService} from "./services/auth.service";
import {StoreModule} from "@ngrx/store";
import {
  userReducer,
  profileReducer,
  contentReducer,
  newContentNumberReducer, tweetReducer
} from "./_reducers/reducers";
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
    HttpModule,
    ContentModule,
    AuthModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore({
      user: userReducer,
      profile: profileReducer,
      contents: contentReducer,
      tweets: tweetReducer,
      newContentNumber: newContentNumberReducer
    })
  ],
  providers: [
    UserService,
    ContentService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
