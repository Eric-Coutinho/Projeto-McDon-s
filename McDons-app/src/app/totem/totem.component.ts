import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { Router } from '@angular/router';
import { ProdutoService } from '../service/produto-service';

@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './totem.component.html',
  styleUrl: './totem.component.css'
})

export class TotemComponent {
  constructor(private viewportScroller: ViewportScroller, private router: Router, private products: ProdutoService) {}
  
  list: any = [];
  comboList: any = [];
  hamburguerList: any = [];
  bebidaList: any = [];
  acompanhamentoList: any = [];
  sobremesaList: any = [];
  
  goToInfo(){
    console.log("oiii")
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
  
  public navigateToSection(section: string){
    this.viewportScroller.scrollToAnchor(section);
  }

  public carrinho(){
    this.router.navigate(['/carrinho'])
  }
}
