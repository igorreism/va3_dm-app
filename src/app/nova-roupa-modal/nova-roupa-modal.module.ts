import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaRoupaModalPageRoutingModule } from './nova-roupa-modal-routing.module';

import { NovaRoupaModalPage } from './nova-roupa-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaRoupaModalPageRoutingModule
  ],
  declarations: [NovaRoupaModalPage]
})
export class NovaRoupaModalPageModule {}
