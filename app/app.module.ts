import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { TasksComponent }  from './tasks.component';
import { FocusDirective } from './focus-me.directive';
import { TaskService }  from './task.service';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UrlResolver } from './url-resolver';






const routes: Routes = [
	
	{ path: '', component: TasksComponent, pathMatch: 'full' },
  { path: 'share', 
    children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: ':tasks', component: TasksComponent, resolve: {
      tasks: UrlResolver
      }
    }
    ]},
	{ path: ':status', component: TasksComponent },

]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes, {useHash: true}) ],
  declarations: [ AppComponent, FocusDirective, TasksComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    TaskService,
    UrlResolver]
})
export class AppModule { }
