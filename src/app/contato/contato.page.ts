import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  public contato = {
    nome: null,
    email: null,
    mensagem: null
  }

  constructor(private apiService: ApiService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmação de cadastro',
      subHeader: 'Sucesso!',
      message: `Recebemos sua mensagem! "${mensagem}"`,
      buttons: ['OK']
    });

    await alert.present();
  }

  enviarCadastro(){
    this.apiService.postContato(this.contato).subscribe(data => {
      this.presentAlert(this.contato.mensagem);
    })
  }
}