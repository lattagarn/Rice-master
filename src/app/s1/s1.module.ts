import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S1PageRoutingModule } from './s1-routing.module';

import { S1Page } from './s1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S1PageRoutingModule
  ],
  declarations: [S1Page]
})
export class S1PageModule {}
