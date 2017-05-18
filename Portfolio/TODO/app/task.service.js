"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var task_1 = require("./task");
var TaskService = (function () {
    function TaskService() {
        this.taskList = [];
        var savedTasks = JSON.parse(localStorage.getItem('todos-patotski') || '[]');
        this.taskList = savedTasks.map(function (task) {
            var result = new task_1.Task(task._title);
            result.completed = task.completed;
            return result;
        });
    }
    TaskService.prototype.updateContainer = function () {
        localStorage.setItem('todos-patotski', JSON.stringify(this.taskList));
    };
    TaskService.prototype.appendTask = function (title) {
        this.taskList.push(new task_1.Task(title));
        this.updateContainer();
    };
    TaskService.prototype.toggleCompletion = function (task) {
        task.completed = !task.completed;
        this.updateContainer();
    };
    TaskService.prototype.removeTask = function (task) {
        this.taskList.splice(this.taskList.indexOf(task), 1);
        this.updateContainer();
    };
    TaskService.prototype.editTask = function (task) {
        task.editing = true;
    };
    TaskService.prototype.allCompleted = function () {
        return this.taskList.length === this.getCompleted().length;
    };
    TaskService.prototype.getCompleted = function () {
        return this.taskList.filter(function (task) { return task.completed === true; });
    };
    TaskService.prototype.getRemaining = function () {
        return this.taskList.filter(function (task) { return task.completed === false; });
    };
    TaskService.prototype.removeCompleted = function () {
        this.taskList = this.getRemaining();
        this.updateContainer();
    };
    TaskService.prototype.setAllTo = function (completed) {
        this.taskList.forEach(function (t) { return t.completed = completed; });
        this.updateContainer();
    };
    TaskService.prototype.getTasks = function () {
        return this.taskList;
    };
    TaskService.prototype.getSelectedTasks = function (status) {
        if (status === 'completed') {
            return this.getCompleted();
        }
        if (status === 'active') {
            return this.getRemaining();
        }
        return this.taskList;
    };
    TaskService.prototype.encodeTaskList = function () {
        return window.location.host + '/Portfolio/TODO/#/share/' + encodeURIComponent(JSON.stringify(this.taskList));
    };
    TaskService.prototype.setExternalTodo = function (tasks) {
        this.taskList = tasks;
        this.updateContainer();
    };
    TaskService.prototype.decodeIntoList = function (url) {
        var decoded = decodeURIComponent(url) || '[]';
        var tempTasks;
        var extractedTasks;
        try {
            //tempTasks = JSON.parse(decoded.slice(decoded.indexOf('share') + 6));
            tempTasks = JSON.parse(decoded);
            extractedTasks = tempTasks.map(function (task) {
                var result = new task_1.Task(task._title);
                result.completed = task.completed;
                return result;
            });
        }
        catch (e) {
            console.warn('Smth went wrong');
            console.log(decodeURIComponent(url));
            return undefined;
        }
        return extractedTasks;
    };
    TaskService.prototype.fetchTask = function (url) {
        return "Some Fake";
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable()
], TaskService);
exports.TaskService = TaskService;
