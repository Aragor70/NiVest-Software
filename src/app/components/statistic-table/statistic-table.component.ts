import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss'],
})
export class StatisticTableComponent implements OnInit {

  
  @Input() props: string;

  constructor() { }

  ngOnInit() {}

}
