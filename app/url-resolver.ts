import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Routes, Resolve } from '@angular/router';
import { Task } from './task';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskService } from './task.service';


@Injectable()
export class UrlResolver implements Resolve<Task> {
   
    constructor(private taskService: TaskService){
        
    }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any{        
        return this.taskService.decodeIntoList(route.params['tasks']);
    }
}