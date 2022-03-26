import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-card',
  templateUrl: './fancy-card.component.html',
  styleUrls: ['./fancy-card.component.scss'],
})
export class FancyCardComponent implements OnInit {
  @Input() props: any;
  @Input() type: string;

  isHovered = false;

  constructor() { }

  ngOnInit() {}

  mouseEnter(){
    this.isHovered = true;
  }

  mouseLeave(){
    this.isHovered = false;
  }

}
