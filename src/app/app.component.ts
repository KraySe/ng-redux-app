import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter: number = 0;

  public constructor(
    private store: Store<{ counter: number }>
  ) {
    // this.counter = 10;
    this.store.select('counter').subscribe(counter => {
      console.log(counter);
      this.counter = counter;
    })
  }

  public increment() {
    // this.counter++;
    this.store.dispatch(actions.increment());
  }

  public decrement() {
    // this.counter--;
    this.store.dispatch(actions.decrement());
  }
}
