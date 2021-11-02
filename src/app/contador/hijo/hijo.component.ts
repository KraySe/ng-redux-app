import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: [
  ]
})
export class HijoComponent implements OnInit {

  public counter: number | undefined;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((counter) => {
      this.counter = counter;
    })
  }

  public multiply() {
    this.store.dispatch(actions.multiply(
      {
        num: 3
      }
    ));
  }

  public divide() {
    this.store.dispatch(actions.divide(
      {
        num: 2
      }
    ));
  }

}
