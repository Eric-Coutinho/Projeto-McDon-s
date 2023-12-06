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
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../service/client-service';
import { ProdutoService } from '../service/produto-service';

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

  create() {
    this.http.post('http://localhost:5037/product/imagem', this.formData)
      .subscribe((result: any) => {
        return this.product.register({
          nome: this.nome,
          tipo: this.tipo,
          preco: this.preco,
          descricao: this.descricao,
          ImagemId: result.imgID
        });
    })
    this.router.navigate(['/adm'])
  }

  private formData = new FormData()
  uploadFile = (files:any) => {
    if(files.length === 0){
      return;
    }
    let fileToUpload = <File>files[0];
    this.formData = new FormData();
    this.formData.append('file', fileToUpload, fileToUpload.name);

    console.log(fileToUpload)

    var jwt = sessionStorage.getItem('jwt');
    if(jwt == null)
      return
    this.formData.append('jwt', jwt)
  }
}
