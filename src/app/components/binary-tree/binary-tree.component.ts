import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BinaryTree } from 'src/app/models/BinaryTree';

@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.scss'],
})
export class BinaryTreeComponent implements OnInit {

  tree: {
    root: Observable<any>
  };

  constructor(private store: Store<{ tree: BinaryTree}>) {
    store.pipe(select('tree')).subscribe((value: any) => {
      
      this.tree = {
        root: value.nodes.root
      }

    })
  }



  ngOnInit() {}

}