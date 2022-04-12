import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportPageRoutingModule } from './support-routing.module';

import { SupportPage } from './support.page';
import { HeaderPageComponent } from 'src/app/components/header-page/header-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportPageRoutingModule
  ],
  declarations: [SupportPage, HeaderPageComponent]
})
export class SupportPageModule {}
