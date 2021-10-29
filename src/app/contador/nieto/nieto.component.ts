import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  @Input()
  count!: number;

  @Output()
  changeCount = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public reset() {
    this.count = 0;
    this.changeCount.emit(this.count);
  }

}
