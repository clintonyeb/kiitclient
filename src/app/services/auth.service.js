"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var user_service_1 = require("./user.service");
require('rxjs/add/operator/map');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(user_service_1.BASE_URL + "/login", JSON.stringify({ username: username, password: password }), this.getBasicHeaders())
            .map(function (response) {
            console.log(response);
            return response.json();
        })
            .map(function (user) {
            _this.currentUser = user;
            _this.setToken(user.username, user.token);
            if (_this.currentUser) {
                console.log('authenticated success');
                return true;
            }
            else {
                console.error('authenticated failed');
                return false;
            }
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return !!this.getToken();
    };
    AuthService.prototype.register = function () { };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.setToken = function (username, token) {
        localStorage.setItem('token', JSON.stringify({ username: username, token: token }));
    };
    AuthService.prototype.getBasicHeaders = function () {
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        header.append('Accept', 'application.json');
        return new http_1.RequestOptions({ headers: header });
    };
    AuthService.prototype.getAuthenticatedHeader = function () {
        var token;
        if (token = this.getToken()) {
            var header = new http_1.Headers({ 'Content-Type': 'application/json' });
            header.append('Accept', 'application.json');
            header.append('X-Auth-Token', "" + token);
            return new http_1.RequestOptions({ headers: header });
        }
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
