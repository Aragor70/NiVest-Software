import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlgorithmsPageRoutingModule } from './algorithms-routing.module';

import { AlgorithmsPage } from './algorithms.page';
import { BinaryTreeComponent } from 'src/app/components/binary-tree/binary-tree.component';
import { TreeNodeComponent } from 'src/app/components/binary-tree/tree-node/tree-node.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlgorithmsPageRoutingModule
  ],
  declarations: [AlgorithmsPage, BinaryTreeComponent, TreeNodeComponent]
})
export class AlgorithmsPageModule {}
