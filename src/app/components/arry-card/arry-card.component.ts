import { Component, Input, OnInit } from '@angular/core';
import { arry } from 'src/app/utils/binaryTree';

@Component({
  selector: 'app-arry-card',
  templateUrl: './arry-card.component.html',
  styleUrls: ['./arry-card.component.scss'],
})
export class ArryCardComponent implements OnInit {

  numbers: number[] = [];
  
  constructor() { }
  
  @Input() sorting: any;

  ngOnInit() {
    this.numbers = this.sorting ? this.sorting(arry) : arry;
    
    console.log(this.numbers)
  }

}
