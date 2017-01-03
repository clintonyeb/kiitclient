import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {ArticleComponent} from "./article/article.component";
import {AnnouncementComponent} from "./announcement/announcement.component";
import {ProfileComponent} from "./profile/profile.component";
import {ContainerComponent} from "./container/container.component";
import {AuthService} from "../services/auth.service";
import {EventComponent} from "./event/event.component";

const routes: Routes = [
  {
    path: 'home',
    component: ContainerComponent,
    children: [
      {path: 'index', component: IndexComponent},
      {path: 'announcements', component: AnnouncementComponent},
      {path: 'articles', component: ArticleComponent},
      {path: 'events', component: EventComponent},
      {path: 'profiles', component: ProfileComponent},
      {path: '', redirectTo: '/home/index', pathMatch: 'full'},
      {path: '**', redirectTo: '/home/index', pathMatch: 'full'}
    ], canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContentRoutingModule{}
