import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListagemPage } from './listagem.page';

import { ListagemPageRoutingModule } from './listagem-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListagemPageRoutingModule
  ],
  declarations: [ListagemPage]
})
export class ListagemPageModule {}
