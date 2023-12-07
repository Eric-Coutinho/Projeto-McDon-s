import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientService } from '../service/client-service';
import { ProdutoService } from '../service/produto-service';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  constructor(private product: ProdutoService, private router: Router, private http: HttpClient) { }
  nome: string = ""
  tipo: string = ""
  preco: number = 0
  descricao: string = ""

  imgId: number = 1;

  create() {
    this.product.register({
      nome: this.nome,
      tipo: this.tipo,
      preco: this.preco,
      descricao: this.descricao,
      ImagemId: this.imgId
    })
    console.log('ELP')
    this.router.navigate(['/adm'])
  }

  private formData = new FormData()

  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.http.post('http://localhost:5037/produto/imagem', formData)
      .subscribe((result : any) => {
        this.imgId = result.imgID
        console.log(this.preco)
      });
  }
}

