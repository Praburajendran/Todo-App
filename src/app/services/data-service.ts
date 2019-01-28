import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {
  private appData = new BehaviorSubject<string>('');
  appTodoData = this.appData.asObservable();
  todoId = this.appData.asObservable();

  constructor() { }
    sendAppData(data: string) {
    this.appData.next(data);
  }
  sendTodoId(data: any) {
    this.appData.next(data);
  }
}
