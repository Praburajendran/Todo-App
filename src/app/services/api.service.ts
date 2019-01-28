import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions  } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AppConstantSettings } from './app-constants.service';
import {trigger, state, animate, style, transition} from '@angular/core';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
    apiSettings: any = {};
    constructor(private http: HttpClient, private http_old: Http) {
        this.apiSettings = new AppConstantSettings();
    }
    params: any = {};

    getUserTasks() {
        return this.http.get(this.apiSettings.api_tasks_url + '/gettasks', { });
    }

    updateTask(data) {
		return this.http.put(this.apiSettings.api_tasks_url + '/updatetask', data);
    }
	
	addTask(data) {
        return this.http.post(this.apiSettings.api_tasks_url + '/addtask', data);
    }
	
	getTaskforId(index) {
		let params = new HttpParams().set('index', index);
        return this.http.get(this.apiSettings.api_tasks_url + '/getTaskforId', {
            params: params
        });
    }
	
	deleteTask(index) {
		let params = new HttpParams().set('index', index);
        return this.http.delete(this.apiSettings.api_tasks_url + '/deletetask', {
            params: params
        });
    }

    checklogin(data) {
		return this.http.post( this.apiSettings.api_users_url + '/checkLogin', data);
    }
	
	addUser(data) {
		return this.http.post( this.apiSettings.api_users_url + '/addUser', data);
    }
}

export function routerTransition() {
	return slideToLeft();
}

function slideToLeft() {
	return trigger('routerTransition', [
		transition(':enter', [
			style({transform: 'translateX(100%)', position:'fixed', width:'100%'}),
			animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
			]),
		transition(':leave', [
			style({transform: 'translateX(0%)', position:'fixed', width:'100%'}),
			animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
			])
		]);
}

