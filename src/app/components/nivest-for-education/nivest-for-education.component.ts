import { Component, OnInit } from '@angular/core';
import quickSort from 'src/app/utils/quickSort';

@Component({
  selector: 'app-nivest-for-education',
  templateUrl: './nivest-for-education.component.html',
  styleUrls: ['./nivest-for-education.component.scss'],
})
export class NivestForEducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  quickSort = quickSort;

}
