import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: [
  ]
})
export class HijoComponent implements OnInit {

  @Input()
  count!: number;

  @Output()
  changeCount = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public multiply() {
    this.count *= 2;
    this.changeCount.emit(this.count);
  }

  public divide() {
    this.count /= 2;
    this.changeCount.emit(this.count);
  }

  public reset(count: number) {
    this.count = count;
    this.changeCount.emit(this.count);
  }

}
