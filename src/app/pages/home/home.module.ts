import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { FancyCardComponent } from 'src/app/components/fancy-card/fancy-card.component';
import { BinaryTreeComponent } from 'src/app/components/binary-tree/binary-tree.component';
import { TreeNodeComponent } from 'src/app/components/binary-tree/tree-node/tree-node.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, TodoComponent, FancyCardComponent, BinaryTreeComponent, TreeNodeComponent]
})
export class HomePageModule {}
