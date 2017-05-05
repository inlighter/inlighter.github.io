import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'my-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit  {
	tasksContainer: Task[];
	selectedFilter: string;
	newTask: string = '';
	tempTask: Task;
	reverted: boolean;

	constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {} 

	ngOnInit() {
		this.route.params.map((params: Params) => params['status'])
		.subscribe(status => { this.selectedFilter = status || ''});		
		
		//console.log(this.route.snapshot.data.tasks);
		
		// let url;
		// if (this.route.snapshot.data.tasks) {
		// 	url = this.route.snapshot.url[0].path;
		// } else {
		// 	url = '';
		// }		
		 
		
		// if (this.route.snapshot.data.tasks && this.taskService.decodeIntoList(url)) {
		// 	this.tasksContainer = this.route.snapshot.data.tasks;
		// 	this.taskService.setExternalTodo(this.tasksContainer);
			
		// 	this.router.navigate(['../../'], {relativeTo: this.route});
			
		// 	this.tasksContainer = null;
		// }

		}

	public myFocusTrigger = new EventEmitter<boolean>();
	

	focusOnDblClick(task: Task): void {
		setTimeout(() => this.myFocusTrigger.emit(true), 0);
		this.editTask(task);
	}	

	stopEditing(task: Task, editedTitle: string): void {
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
	}

	editTask(task: Task): void {		
		this.tempTask = {...task};
		task.editing = true;
				
	}

	cancelEditing(task: Task): void {
		task.title = this.tempTask._title;
		task.editing = false;
		this.tempTask = null;
		this.reverted = true;
		
	}

	addTask(): void {
		if (this.newTask.trim()) {
			this.taskService.appendTask(this.newTask);
			this.newTask = '';
			
		}
	}

	removeTask(task: Task): void {
		this.taskService.removeTask(task);
	}

	markAllItems(): void {
		this.taskService.allCompleted();
	}

	hasItems(): boolean {
		return Boolean(this.taskService.taskList.length);
	}

	setAllTo(val: boolean): void {
		this.taskService.setAllTo(val);
	}

	toggleCheckbox(task: Task): void {
		this.taskService.toggleCompletion(task);
	}

	getSelectedTasks(): Task[] {
		return this.taskService.getSelectedTasks(this.selectedFilter);
		
	}

	
}
