import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ProdutoService } from '../service/produto-service';

@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [CommonModule, MatIconModule, ],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent implements OnInit{  
  constructor(private products: ProdutoService, private viewportScroller: ViewportScroller) { }
  
  list: any = [];
  hamburguerList: any = [];
  bebidaList: any = [];
  acompanhamentoList: any = [];
  sobremesaList: any = [];
  
  goToInfo(){
    console.log("oiii")
  }

  public navigateToSection(section: string){
    this.viewportScroller.scrollToAnchor(section);
  }

  ngOnInit() {
    this.products.getAll().subscribe(
      (data: any) => {
        this.list = data;
        console.log("produtos:", this.list);
  
        this.hamburguerList = this.list.filter((produto: any) => produto.tipo === 'Hamburguer');
        this.bebidaList = this.list.filter((produto: any) => produto.tipo === 'Bebida');
        this.acompanhamentoList = this.list.filter((produto: any) => produto.tipo === 'Acompanhamento');
        this.sobremesaList = this.list.filter((produto: any) => produto.tipo === 'Sobremesa');
      },
      (error: any) => {
        console.error('Erro ao obter produtos:', error);
      }
    );
  }

  logTipo(tipo: string) {
  console.log('Tipo:', tipo);
  return tipo;
}
}
