"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var content_module_1 = require("./content/content.module");
var auth_module_1 = require("./auth/auth.module");
var router_1 = require("@angular/router");
var user_service_1 = require("./services/user.service");
var auth_guard_service_1 = require("./services/auth-guard.service");
var auth_service_1 = require("./services/auth.service");
var store_1 = require("@ngrx/store");
var reducers_1 = require("./_reducers/reducers");
var content_service_1 = require("./services/content.service");
var routes = [
    { path: '', redirectTo: '/home/index', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                content_module_1.ContentModule,
                auth_module_1.AuthModule,
                router_1.RouterModule.forRoot(routes),
                store_1.StoreModule.provideStore({
                    user: reducers_1.userReducer,
                    avatar: reducers_1.avatarReducer,
                    profile: reducers_1.profileReducer,
                    contents: reducers_1.contentReducer,
                    newContentNumber: reducers_1.newContentNumberReducer
                })
            ],
            providers: [
                user_service_1.UserService,
                content_service_1.ContentService,
                auth_guard_service_1.AuthGuardService,
                auth_service_1.AuthService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
