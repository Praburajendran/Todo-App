import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ApiService} from '../services/api.service';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpHeaders, HttpClient, HttpParams,HttpHandler } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {DataService} from '../services/data-service';


describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAddComponent ],
      imports: [FormsModule, ReactiveFormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,HttpModule,RouterTestingModule],
      providers: [ ApiService, HttpClient, HttpHandler,DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
