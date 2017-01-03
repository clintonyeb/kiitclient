"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var index_component_1 = require('./index/index.component');
var content_routing_module_1 = require("./content-routing.module");
var tweet_component_1 = require('./tweet/tweet.component');
var top_nav_component_1 = require('./top-nav/top-nav.component');
var side_nav_component_1 = require('./side-nav/side-nav.component');
var event_component_1 = require('./event/event.component');
var announcement_component_1 = require('./announcement/announcement.component');
var article_component_1 = require('./article/article.component');
var profile_component_1 = require('./profile/profile.component');
var container_component_1 = require('./container/container.component');
var content_editors_component_1 = require('./content-editors/content-editors.component');
var ContentModule = (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                content_routing_module_1.ContentRoutingModule
            ],
            declarations: [
                index_component_1.IndexComponent,
                tweet_component_1.TweetComponent,
                top_nav_component_1.TopNavComponent,
                side_nav_component_1.SideNavComponent,
                event_component_1.EventComponent,
                announcement_component_1.AnnouncementComponent,
                article_component_1.ArticleComponent,
                profile_component_1.ProfileComponent,
                container_component_1.ContainerComponent,
                content_editors_component_1.ContentEditorsComponent
            ],
            bootstrap: [container_component_1.ContainerComponent]
        })
    ], ContentModule);
    return ContentModule;
}());
exports.ContentModule = ContentModule;
