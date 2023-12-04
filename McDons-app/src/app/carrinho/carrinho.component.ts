import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

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
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  constructor(private viewportScroller: ViewportScroller) { }
  public cupom(){

  }
  
  public removeItem(){

  }

  public finishOrder(){
    
  }

  public navigateToSection(section: string){
    this.viewportScroller.scrollToAnchor(section);
  }
}
