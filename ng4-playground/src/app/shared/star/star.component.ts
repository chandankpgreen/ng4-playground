import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  rating: number = 4;
  starWidth: number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(): void {
    this.starWidth = this.rating *86/5;
  }

}
