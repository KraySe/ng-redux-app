import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: [
  ]
})
export class HijoComponent implements OnInit {

  counter: number | undefined;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((counter) => {
      this.counter = counter;
    })
  }

  public multiply() {
    // this.counter *= 2;
    // this.changeCounter.emit(this.counter);
  }

  public divide() {
    // this.counter /= 2;
    // this.changeCounter.emit(this.counter);
  }

}
