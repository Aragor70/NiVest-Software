import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-card',
  templateUrl: './fancy-card.component.html',
  styleUrls: ['./fancy-card.component.scss'],
})
export class FancyCardComponent implements OnInit {

  @Input() props: any;

  constructor() { }

  ngOnInit() {}

}
