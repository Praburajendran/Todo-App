 import { Component, OnInit } from '@angular/core';
 import { RouterModule, Routes ,Router} from '@angular/router';


 // Components
 import { TodoListComponent } from '../todo-list/todo-list.component';
 import { TodoAddComponent } from '../todo-add/todo-add.component';
 import { LoginComponent } from '../login/login.component';

 // Services
  //import { routerTransition } from '../../services/config/config.service';
  import {ApiService,routerTransition} from '../services/api.service';

 @Component({
 	selector: 'app-home',
 	templateUrl: './home.component.html',
 	styleUrls: ['./home.component.css'],
 })


 export class HomeComponent implements OnInit {
	 active:string;
	 disabledfields = null;
	 
	public loginstatus = null;
	public menuclass = null;
	public username = null;

	

 	constructor(private router: Router) {
 		// Detect route changes for active sidebar menu
 		this.router.events.subscribe((val) => {
 			this.routeChanged(val);
 		});
 	}

 	ngOnInit() {
		if(localStorage.getItem('userData')){
			this.loginstatus = "Logout" ; 
			this.menuclass = "";
		} else {
			this.loginstatus = "Login" ;
			this.menuclass = "linkDisabled";
			this.router.navigate(['/login']);
	    }		
 	}

 	// Detect route changes for active sidebar menu
 	routeChanged(val){
		 this.active = val.url;

		if(this.active !== '/login'){
			this.menuclass = "";
			this.username = localStorage.getItem('userData');
			this.loginstatus = "Logout";
		} else {
			this.menuclass = "linkDisabled";
			this.loginstatus = "Login" ;
		}
		 
 	}

 	// Logout User
 	logOut(){
		localStorage.removeItem('userData'); 
 		this.router.navigate(['/login']);
 	}
 }


 // Define and export child routes of HomeComponent
 export const homeChildRoutes : Routes = [
 {
 	path: '',
 	component: TodoListComponent
 },
 {
 	path: 'login',
 	component: LoginComponent
 },
 {
 	path: 'add',
 	component: TodoAddComponent
 },
 {
 	path: 'update/:_id',
 	component: TodoAddComponent
 } 
 ];
