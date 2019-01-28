import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['']
})
export class AppComponent {
  title = 'app';
  eventType = null;
  eventDuration = null;
  constructor(private router:Router){}
  public eventMaxDuration:Number = 3;
  gotoCreateEvent(){
    this.router.navigate(['/create']);
  }
}
