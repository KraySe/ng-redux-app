import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  @Input()
  counter!: number;

  @Output()
  changeCounter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public reset() {
    this.counter = 0;
    this.changeCounter.emit(this.counter);
  }

}
