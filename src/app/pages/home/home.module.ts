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
import { CircularButtonComponent } from 'src/app/components/circular-button/circular-button.component';
import { SubFancyCardComponent } from 'src/app/components/sub-fancy-card/sub-fancy-card.component';
import { IconGroupComponent } from 'src/app/components/icon-group/icon-group.component';
import { OverviewComponent } from 'src/app/components/overview/overview.component';
import { SoftwareDevelopmentComponent } from 'src/app/components/software-development/software-development.component';
import { NivestForEducationComponent } from 'src/app/components/nivest-for-education/nivest-for-education.component';
import { InsiderComponent } from 'src/app/components/insider/insider.component';
import { PersonalCardComponent } from 'src/app/components/personal-card/personal-card.component';
import { NivestService } from 'src/app/services/nivest/nivest.service';
import { HttpClientModule } from '@angular/common/http';
import { StatisticTableComponent } from 'src/app/components/statistic-table/statistic-table.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  providers: [
    NivestService
  ],
  declarations: [HomePage, TodoComponent, FancyCardComponent, BinaryTreeComponent, TreeNodeComponent, CircularButtonComponent, SubFancyCardComponent, IconGroupComponent, OverviewComponent, SoftwareDevelopmentComponent, NivestForEducationComponent, InsiderComponent, PersonalCardComponent, StatisticTableComponent]
})
export class HomePageModule {}
