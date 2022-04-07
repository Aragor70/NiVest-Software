import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss'],
})
export class NumberFieldComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit() {}

}
