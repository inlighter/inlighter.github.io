import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'todo-app',
  template: `
  <section class="todoapp">
  <router-outlet></router-outlet>
</section>
<form>
  <button class="btn-1" type="button" (click)="shareMyList()">{{btnLabel}}</button>
  <textarea *ngIf="isEnable" placeholder="Shared link!">{{sharedLink}}</textarea>
</form>
`  

})
export class AppComponent {
  sharedLink: string;
  isEnable: boolean = false;
  btnLabel: string = 'Share';
  constructor(private taskService: TaskService){}
  shareMyList(){
    this.sharedLink = this.taskService.encodeTaskList();
    this.isEnable = !this.isEnable;
    this.btnLabel = this.btnLabel === 'Share' ? 'Hide' : 'Share';
  }
}
