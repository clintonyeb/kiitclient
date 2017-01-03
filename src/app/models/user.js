"use strict";
var User = (function () {
    function User(obj) {
        this.id = obj.id || '';
        this.username = obj.username || null;
        this.password = obj.password || null;
        this.token = obj.token || null;
        this.avatar = obj.avatar || null;
        this.enabled = obj.enabled || true;
        this.uniqueId = obj.uniqueId ? obj.uniqueId : obj.username;
        this.gender = obj.gender;
    }
    return User;
}());
exports.User = User;
var Avatar = (function () {
    function Avatar(obj) {
        this.avatarByte = obj.avatarByte || null;
        this.avatarContentType = obj.avatarContentType || '';
        this.lastUpdated = obj.lastUpdated || '';
    }
    return Avatar;
}());
exports.Avatar = Avatar;
var Profile = (function () {
    function Profile(bio, contact, address, emailId, avatar, user, socialNetworks) {
        this.bio = bio;
        this.contact = contact;
        this.address = address;
        this.emailId = emailId;
        this.avatar = avatar;
        this.user = user;
        this.socialNetworks = socialNetworks;
    }
    return Profile;
}());
exports.Profile = Profile;
