"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_component_1 = require("./index/index.component");
var article_component_1 = require("./article/article.component");
var announcement_component_1 = require("./announcement/announcement.component");
var profile_component_1 = require("./profile/profile.component");
var container_component_1 = require("./container/container.component");
var event_component_1 = require("./event/event.component");
var auth_guard_service_1 = require("../services/auth-guard.service");
var routes = [
    {
        path: 'home',
        component: container_component_1.ContainerComponent,
        children: [
            { path: 'index', component: index_component_1.IndexComponent },
            { path: 'announcements', component: announcement_component_1.AnnouncementComponent },
            { path: 'articles', component: article_component_1.ArticleComponent },
            { path: 'events', component: event_component_1.EventComponent },
            { path: 'profiles', component: profile_component_1.ProfileComponent },
            { path: '', redirectTo: '/home/index', pathMatch: 'full' },
            { path: '**', redirectTo: '/home/index', pathMatch: 'full' }
        ], canActivate: [auth_guard_service_1.AuthGuardService], canActivateChild: [auth_guard_service_1.AuthGuardService]
    }
];
var ContentRoutingModule = (function () {
    function ContentRoutingModule() {
    }
    ContentRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ContentRoutingModule);
    return ContentRoutingModule;
}());
exports.ContentRoutingModule = ContentRoutingModule;
