import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm ,Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {DataService} from '../services/data-service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private apiService:ApiService, private router:Router,private route:ActivatedRoute, private data:DataService){ 
  
    // Check for route params
 		this.route.params.subscribe(params => {
 			this.index = params['_id'];
 			// check if ID exists in route & call update or add methods accordingly
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getTodoDetails(this.index);
 			}else{
 				this.createForm(null);
 			} 
 		});
  
  }
  
  private todoAddForm : FormGroup;
  showPage = false;
  deleteResponse = null;
  index = null;
  
  // for todo-
   title = null;
   description = null;
   todoStatus = null;
   todoDate = null;

	ngOnInit() {
		
	}
  
 	getTodoDetails(index:number){
 		this.apiService.getTaskforId(index).subscribe((value: Response) => {
			this.createForm(value);
		});
 	}
	
	updateTodoDetails(index:number){
 		this.apiService.getTaskforId(index).subscribe((value: Response) => {
			this.createForm(value);
		});
 	}

 	// If this is update request then auto fill form
 	createForm(data){
 		if (data == null) {
 			this.todoAddForm = this.formBuilder.group({
 				title: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(250)]],
 				description: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(500)]],
 				status: ['',],
 				createddate: ['']
 			});			
 		}else{
 			this.todoAddForm = this.formBuilder.group({
 				title: [data.data.title,  [Validators.required,Validators.minLength(3),Validators.maxLength(250)]],
 				description: [data.data.description,  [Validators.required,Validators.minLength(3),Validators.maxLength(500)]],
 				status: [data.data.status],
 				createddate: [new Date(data.data.createddate)]
 			});
 		}
 	}
	
	doRegister(){
		let todoRegister;
 		if (this.index && this.index != null && this.index != undefined) {
 			this.todoAddForm.value._id = this.index
			this.apiService.updateTask(this.todoAddForm.value).subscribe((value: Response) =>{
				if(value["message"] == 'success'){
					alert('Task Updated Successfully !!!');
					this.router.navigate(['/']);
				}
			});
 		}
 		else{
			this.apiService.addTask(this.todoAddForm.value).subscribe((value: Response) =>{
				if(value["message"] == 'success'){
					alert('Task Added Successfully !!!');
		 			this.router.navigate(['/']);
				}
			});
 		}
 	}

}
