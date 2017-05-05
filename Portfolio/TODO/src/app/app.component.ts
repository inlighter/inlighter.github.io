import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'todo-app',
  template: `
  <section class="todoapp">
  <router-outlet></router-outlet>
  </section>
  <form>
  <button class="btn-1" type="button" (click)="shareMyList()">Share</button>
  <textarea placeholder="Shared link!">{{sharedLink}}</textarea>
  </form>
  ` 

})
export class AppComponent {
  sharedLink: string;
  constructor(private taskService: TaskService){}
  shareMyList(){
    this.sharedLink = this.taskService.encodeTaskList();
  }
}
