import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S2PageRoutingModule } from './s2-routing.module';

import { S2Page } from './s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S2PageRoutingModule
  ],
  declarations: [S2Page]
})
export class S2PageModule {}
