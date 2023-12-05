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
  constructor (private product: ProdutoService, private router: Router, private http: HttpClient) { }
  nome: string = ""
  tipo: string = ""
  preco: number = 0
  descricao: string = ""

  create()
  {
    this.product.register({
      nome: this.nome,
      tipo: this.tipo,
      preco: this.preco,
      descricao: this.descricao
    })
    this.router.navigate(['/adm'])
  }

  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    var jwt = sessionStorage.getItem('jwt');
    if (jwt == null)
      return
    formData.append('jwt', jwt)
     
    this.http.put('https://localhost:5037/produto/image', formData)
      .subscribe(result => console.log("ok!"));
  }

}
