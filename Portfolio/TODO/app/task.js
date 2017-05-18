"use strict";
exports.__esModule = true;
var Task = (function () {
    function Task(title) {
        this.completed = false;
        this.editing = false;
        this._title = title.trim();
    }
    Object.defineProperty(Task.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value.trim();
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
exports.Task = Task;
