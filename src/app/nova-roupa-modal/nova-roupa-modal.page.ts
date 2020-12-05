import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-nova-roupa-modal',
  templateUrl: './nova-roupa-modal.page.html',
  styleUrls: ['./nova-roupa-modal.page.scss'],
})
export class NovaRoupaModalPage implements OnInit {

  @Input() modalController: ModalController;
  public roupa = {
    nome: null,
    descricao: null,
    valor: null
  }
  public imagem: File;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  fileChangeListener($event){
    this.imagem = $event.target.files[0];
  }

  adicionar(){
    console.log(this.roupa)
    console.log(this.imagem)
    this.apiService.postRoupa(this.roupa, this.imagem).subscribe(data => {
      this.modalController.dismiss(data);
    })
  }

  fechar() {
    this.modalController.dismiss(null);
  }

}
