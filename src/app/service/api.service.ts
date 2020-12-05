import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getRoupas() {
    return this.httpClient.get('http://localhost:3000/api/roupas');
  }
  postRoupa(item, imagem) {
    const formData = new FormData();
    formData.append('nome', item.nome);
    formData.append('descricao', item.descricao);
    formData.append('imagem', imagem);
    return this.httpClient.post('http://localhost:3000/api/roupas', formData);
  }
  postContato(contato) {
    return this.httpClient.post('http://localhost:3000/api/contato', contato);
  }
}