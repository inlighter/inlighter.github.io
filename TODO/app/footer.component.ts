import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from './task.service';
import 'rxjs/add/operator/map';
@Component({
	selector: 'my-footer',
	templateUrl: './footer.component.html'	
})

export class FooterComponent implements OnInit {
	currentStatus: string;
	constructor(private taskService: TaskService, private route: ActivatedRoute){}

	ngOnInit() {
	this.route.params.map((params: Params) => params['status'])
	.subscribe(status => { this.currentStatus = status || '' });
	
	}

	getRemainingCount(): number {
		return this.taskService.getRemaining().length;
	}

	getCompletedCount(): number {
		return this.taskService.getCompleted().length;
	}

	clearCompleted(): void {
		this.taskService.removeCompleted()
	}

	hasItems(): boolean {
		return Boolean(this.taskService.taskList.length);
	}

}