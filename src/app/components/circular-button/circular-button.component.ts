import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-button',
  templateUrl: './circular-button.component.html',
  styleUrls: ['./circular-button.component.scss'],
})
export class CircularButtonComponent implements OnInit {

  constructor() { }

  @Input() props: any;

  ngOnInit() {}

  
}
