import { Component, OnInit,ViewChild } from '@angular/core';
import {ApiService} from '../services/api.service';
import {DataService} from '../services/data-service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-event',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private apiService: ApiService, private router:Router, private data:DataService) { }
  
  todoListData = null;
  deletedRow = null;

  ngOnInit() {
	  this.apiService.getUserTasks().subscribe((value: Response) => {
          this.todoListData = value["data"];
    },(error) => {
      console.log(error);
      });
  }
  
    deleteTodo(index:number){
 		// get confirm box for confirmation
 		let r = confirm("Are you sure?");
 		if (r == true) {
			this.apiService.deleteTask(index).subscribe((value: Response) => {
				if(value["message"] == 'success'){
					alert('Tasks deleted Successfully !!!');
				}
			    this.deletedRow = this.todoListData.findIndex(item => item._id == index);
			    this.todoListData.splice(this.deletedRow,1);
			}, (error) => {
        console.log(error);
        });
 		}
 	}

}
