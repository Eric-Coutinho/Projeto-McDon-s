import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto-service';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {
  produto: any;
  produtos: any[] = [];

  constructor(private productService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      (response) => {
        this.produtos = response;
        this.carregarDetalhesProduto();
      },
      (error) => {
        console.error('Erro ao obter produtos:', error);
      }
    );
  }

  private carregarDetalhesProduto(): void {
    this.route.queryParams.subscribe((params) => {
      const produtoId = Number(params['id']);

      this.produto = this.produtos.find((produto) => produto.id === produtoId);

      if (!this.produto) {
        console.error('Produto não encontrado');
      }
    });
  }
}


