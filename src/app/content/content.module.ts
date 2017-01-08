import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IndexComponent} from "./index/index.component";
import {ContentRoutingModule} from "./content-routing.module";
import {TweetComponent} from "./tweet/tweet.component";
import {TopNavComponent} from "./top-nav/top-nav.component";
import {SideNavComponent} from "./side-nav/side-nav.component";
import {EventComponent} from "./event/event.component";
import {AnnouncementComponent} from "./announcement/announcement.component";
import {ArticleComponent} from "./article/article.component";
import {ProfileComponent} from "./profile/profile.component";
import {ContainerComponent} from "./container/container.component";
import {ContentEditorsComponent} from "./content-editors/content-editors.component";
import {MomentModule} from "angular2-moment";
import { EventsContainerComponent } from './events-container/events-container.component';
import { AnnouncementsContainerComponent } from './announcements-container/announcements-container.component';
import { ArticlesContainerComponent } from './articles-container/articles-container.component';
import { TweetsContainerComponent } from './tweets-container/tweets-container.component';
import { WriterComponent } from './writer/writer.component';
import { ContentWriterComponent } from './content-writer/content-writer.component';


@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    MomentModule
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
    ContentEditorsComponent,
    EventsContainerComponent,
    AnnouncementsContainerComponent,
    ArticlesContainerComponent,
    TweetsContainerComponent,
    WriterComponent,
    ContentWriterComponent
  ],
  bootstrap: [ContainerComponent]
})
export class ContentModule { }
