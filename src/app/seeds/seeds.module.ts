import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeedsPageRoutingModule } from './seeds-routing.module';

import { SeedsPage } from './seeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeedsPageRoutingModule
  ],
  declarations: [SeedsPage]
})
export class SeedsPageModule {}
