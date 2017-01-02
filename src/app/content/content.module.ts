import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {Routes, RouterModule} from "@angular/router";
import {ContentRoutingModule} from "./content-routing.module";
import { TweetComponent } from './tweet/tweet.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { EventComponent } from './event/event.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ArticleComponent } from './article/article.component';
import { ProfileComponent } from './profile/profile.component';
import { ContainerComponent } from './container/container.component';
import { ContentEditorsComponent } from './content-editors/content-editors.component';


@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  declarations: [
    IndexComponent,
    TweetComponent,
    TopNavComponent,
    SideNavComponent,
    EventComponent,
    AnnouncementComponent,
    ArticleComponent,
    ProfileComponent,
    ContainerComponent,
    ContentEditorsComponent
  ],
  bootstrap: [ContainerComponent]
})
export class ContentModule { }
