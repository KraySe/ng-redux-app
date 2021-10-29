import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: [
  ]
})
export class HijoComponent implements OnInit {

  @Input()
  counter!: number;

  @Output()
  changeCounter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public multiply() {
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  }

  public divide() {
    this.counter /= 2;
    this.changeCounter.emit(this.counter);
  }

  public reset(counter: number) {
    this.counter = counter;
    this.changeCounter.emit(this.counter);
  }

}
