import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from '../services/api.service';
import {DataService} from '../services/data-service';

import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpHeaders, HttpClient, HttpParams,HttpHandler } from '@angular/common/http';


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      imports: [ RouterTestingModule,HttpModule],
      providers: [ ApiService,HttpClient,HttpHandler,DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
