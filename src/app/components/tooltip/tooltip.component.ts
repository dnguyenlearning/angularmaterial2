import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipComponent implements OnInit {
  position = 'before';
  constructor() { }

  ngOnInit() {
  }

}
