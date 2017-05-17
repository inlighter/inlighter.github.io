"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var task_service_1 = require("./task.service");
var router_1 = require("@angular/router");
var TasksComponent = (function () {
    function TasksComponent(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.newTask = '';
        this.myFocusTrigger = new core_1.EventEmitter();
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (params) { return params['status']; })
            .subscribe(function (status) { _this.selectedFilter = status || ''; });
        //console.log(this.route.snapshot.data.tasks);
        var url;
        if (this.route.snapshot.data.hasOwnProperty('tasks')) {
            url = this.route.snapshot.url[0].path;
            console.log(url);
            if (this.route.snapshot.data.hasOwnProperty('tasks') && this.taskService.decodeIntoList(url)) {
                this.tasksContainer = this.route.snapshot.data['tasks'];
                this.taskService.setExternalTodo(this.tasksContainer);
                this.tasksContainer = null;
            }
            this.router.navigate(['../../'], { relativeTo: this.route });
        }
    };
    TasksComponent.prototype.focusOnDblClick = function (task) {
        var _this = this;
        setTimeout(function () { return _this.myFocusTrigger.emit(true); }, 0);
        this.editTask(task);
    };
    TasksComponent.prototype.stopEditing = function (task, editedTitle) {
        if (this.reverted) {
            this.reverted = null;
            return;
        }
        editedTitle = editedTitle.trim();
        task.editing = false;
        if (editedTitle.length === 0) {
            this.taskService.removeTask(task);
        }
        task.title = editedTitle;
    };
    TasksComponent.prototype.editTask = function (task) {
        this.tempTask = __assign({}, task);
        task.editing = true;
    };
    TasksComponent.prototype.cancelEditing = function (task) {
        task.title = this.tempTask._title;
        task.editing = false;
        this.tempTask = null;
        this.reverted = true;
    };
    TasksComponent.prototype.addTask = function () {
        if (this.newTask.trim()) {
            this.taskService.appendTask(this.newTask);
            this.newTask = '';
        }
    };
    TasksComponent.prototype.removeTask = function (task) {
        this.taskService.removeTask(task);
    };
    TasksComponent.prototype.markAllItems = function () {
        this.taskService.allCompleted();
    };
    TasksComponent.prototype.hasItems = function () {
        return Boolean(this.taskService.taskList.length);
    };
    TasksComponent.prototype.setAllTo = function (val) {
        this.taskService.setAllTo(val);
    };
    TasksComponent.prototype.toggleCheckbox = function (task) {
        this.taskService.toggleCompletion(task);
    };
    TasksComponent.prototype.getSelectedTasks = function () {
        return this.taskService.getSelectedTasks(this.selectedFilter);
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        selector: 'my-tasks',
        templateUrl: './tasks.component.html'
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService, router_1.ActivatedRoute, router_1.Router])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map