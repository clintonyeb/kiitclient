"use strict";
var Content = (function () {
    function Content(obj) {
        this.text = obj.text;
        this.lastUpdated = obj.lastUpdated;
        this.flagged = obj.flagged;
        this.avatars = obj.avatars;
        this.user = obj.user;
        this.vote = obj.vote;
        this.contentType = obj.contentType;
        this.tags = obj.tags;
        this.title = obj.title || null;
        this.venue = obj.event || null;
        this.dateOfEvent = obj.dateOfEvent || null;
    }
    return Content;
}());
exports.Content = Content;
var Vote = (function () {
    function Vote(upVotes, downVotes, lastUpdated, user) {
        this.upVotes = upVotes;
        this.downVotes = downVotes;
        this.lastUpdated = lastUpdated;
        this.user = user;
    }
    return Vote;
}());
exports.Vote = Vote;
var Tag = (function () {
    function Tag(tagName) {
        this.tagName = tagName;
    }
    return Tag;
}());
exports.Tag = Tag;
var Song = (function () {
    function Song() {
    }
    return Song;
}());
exports.Song = Song;
var NewContentNumber = (function () {
    function NewContentNumber(obj) {
        this.announcement = obj.announcement || 0;
        this.article = obj.article || 0;
        this.event = obj.event || 0;
        this.tweet = obj.tweet || 0;
        this.vote = obj.vote || 0;
        this.tag = obj.tag || 0;
    }
    return NewContentNumber;
}());
exports.NewContentNumber = NewContentNumber;
