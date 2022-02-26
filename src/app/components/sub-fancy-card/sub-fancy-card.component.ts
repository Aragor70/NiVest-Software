import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-fancy-card',
  templateUrl: './sub-fancy-card.component.html',
  styleUrls: ['./sub-fancy-card.component.scss'],
})
export class SubFancyCardComponent implements OnInit {

  @Input() props: any;

  constructor() { }

  ngOnInit() {}

}
