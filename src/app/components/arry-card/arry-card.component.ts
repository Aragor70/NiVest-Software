import { Component, OnInit } from '@angular/core';
import { arry } from 'src/app/utils/binaryTree';

@Component({
  selector: 'app-arry-card',
  templateUrl: './arry-card.component.html',
  styleUrls: ['./arry-card.component.scss'],
})
export class ArryCardComponent implements OnInit {

  numbers: number[] = [];
  constructor() { }


  ngOnInit() {
    this.numbers = arry;

    console.log(arry)
  }

}
