import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ProdutoService } from '../service/produto-service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, MatIconModule, ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  constructor(private products: ProdutoService, private viewportScroller: ViewportScroller) { }
  
  list: any = [];
  comboList: any = [];
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
  
        this.comboList = this.list.filter((produto: any) => produto.tipo === 'Combo');
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
