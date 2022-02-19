import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent implements OnInit {

  @Input() props: any;
  @Input() stylesX: any;
  @Input() stylesY: any;
  @Input() level: any;


  constructor() {

  }

  ngOnInit() {}

}
