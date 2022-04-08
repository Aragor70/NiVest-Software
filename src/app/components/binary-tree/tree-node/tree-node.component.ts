import { Component, HostListener, Input, OnInit } from '@angular/core';

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

  public innerWidth: number;


  constructor() {

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
onResize() {
  this.innerWidth = window.innerWidth;
}

}
