import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {ApiService} from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm : FormGroup;
  public showMessage = false;
  public errMsg = '';
  public newlogin = null;
  public title = 'User Login';

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private route: Router) {
    this.loginForm = this.formBuilder.group({
        username: [''],
        password: ['']
    });
   }

  ngOnInit() {
    this.showMessage = false;
    window.scroll(0, 0);
  }

  userlogin(){
    const userdata = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
    };
	
	this.apiService.checklogin(userdata).subscribe((response: Response) => {
		if(response["message"] == "success"){
            this.route.navigateByUrl('/');
            localStorage.setItem('userData',this.loginForm.value.username);
		} else {
			this.showMessage = true;
			this.errMsg = 'Invalid username or password';
		}
    }, error => {
        this.showMessage = true;
        this.errMsg = 'Invalid username or password';
    });
	}
  
  loginCheck(){
	  this.newlogin = 'true';
  }

  userregister(){
	  const userdata = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
    };
	
	this.apiService.addUser(userdata).subscribe((response: Response) => {
        if(response["message"] == "success"){
            alert('User Registered Successfully !!!');
			window.location.reload();
			this.route.navigateByUrl('/login');
		} else {
			this.showMessage = true;
			this.errMsg = 'Registration unsuccessful';			
		}
    }, error => {
        this.showMessage = true;
        this.errMsg = 'Registration unsuccessful';
    });
	}	
}
