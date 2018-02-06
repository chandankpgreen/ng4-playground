import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  constructor() { }
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }
  ngOnChanges(): void {
    this.starWidth = this.rating *110/5;
  }
  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }

}
