import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NovaRoupaModalPage } from '../nova-roupa-modal/nova-roupa-modal.page';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss']
})
export class ListagemPage implements OnInit {

  public guardaroupa = [];

  constructor(private modalController: ModalController, private apiService: ApiService, private alertController: AlertController) { }

  ngOnInit(){
    this.apiService.getRoupas().subscribe((data:any) => {
      this.guardaroupa = data;
    });
   }

  async novaRoupa(){
    const modal = await this.modalController.create({
      component: NovaRoupaModalPage,
      componentProps: {
        'modalController': this.modalController
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.guardaroupa.push(data);
    return
  }

}