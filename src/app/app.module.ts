import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, Headers } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';
import { DataService } from './services/data-service';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { MyHttpInterceptor } from './my-http-interceptor';

import { environment } from '../environments/environment';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { HomeComponent,homeChildRoutes } from './homepage/home.component';
import { LoginComponent } from './login/login.component';


// Routes
const appRoutes: Routes = [
  {
	path: '',
	component: HomeComponent,
	children :homeChildRoutes
}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomeComponent,
	  TodoAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload'
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiService, DataService, HttpModule, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
} ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
