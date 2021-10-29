import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count: number;

  public constructor() {
    this.count = 10;
  }

  public increment() {
    this.count++;
  }

  public decrement() {
    this.count--;
  }
}
