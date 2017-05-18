import { Injectable } from '@angular/core';
import { Task } from './task';



@Injectable()
export class TaskService {
	taskList: Task[] = [];

	constructor(){
		let savedTasks = JSON.parse(localStorage.getItem('todos-patotski') || '[]');
		this.taskList = savedTasks.map((task: {_title: string, completed: boolean }) => {
			let result = new Task(task._title);
			result.completed = task.completed;
			return result;
		});
	}

	updateContainer(): void {
		localStorage.setItem('todos-patotski', JSON.stringify(this.taskList));		
	}

	appendTask(title: string): void {
		this.taskList.push(new Task(title));
		this.updateContainer();
	}

	toggleCompletion(task: Task): void {
		task.completed = !task.completed;
		this.updateContainer();
	}

	removeTask(task: Task): void {
		this.taskList.splice(this.taskList.indexOf(task), 1);
		this.updateContainer();
	}

	editTask(task: Task): void {
		task.editing = true;
	}

	allCompleted(): boolean {
		return this.taskList.length === this.getCompleted().length;
	}

	getCompleted(): Task[] {
		return this.taskList.filter((task: Task) => task.completed === true);
	}

	getRemaining(): Task[] {
		return this.taskList.filter((task: Task) => task.completed === false);
	}

	removeCompleted(): void {
		this.taskList = this.getRemaining();
		this.updateContainer();
	}

	setAllTo(completed: boolean) {
		this.taskList.forEach((t: Task) => t.completed = completed);
		this.updateContainer();
	}

	getTasks(): Task[] {
		return this.taskList;
	}
	getSelectedTasks(status: string): Task[] {
		if (status === 'completed') {
			return this.getCompleted();
		}
		if ( status === 'active') {
			return this.getRemaining();
		}
		return this.taskList;
	}

	
	encodeTaskList(): string {
		return window.location.host + '/Portfolio/TODO/#/share/' + encodeURIComponent(JSON.stringify(this.taskList));
	}

	setExternalTodo(tasks: Task[]): void {
		this.taskList = tasks;
		this.updateContainer();
	}

	decodeIntoList(url: string): Task[]|any {
		let decoded = decodeURIComponent(url) || '[]';
		let tempTasks;
		let extractedTasks;
		try {
			//tempTasks = JSON.parse(decoded.slice(decoded.indexOf('share') + 6));
			tempTasks = JSON.parse(decoded);
			extractedTasks = tempTasks.map((task: {_title: string, completed: boolean }) => {
			let result = new Task(task._title);
			result.completed = task.completed;
			return result;
		});
		} catch (e) {
			console.warn('Smth went wrong');
			console.log(decodeURIComponent(url));
			return undefined;
		}		
		return extractedTasks;
	}

	fetchTask(url: string){
		
		return "Some Fake";
	}

	


}