import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ProdutoService } from '../service/produto-service';

@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [CommonModule, MatIconModule, ],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent {
  constructor(private product: ProdutoService, private viewportScroller: ViewportScroller) { }
  
  fetchAll(){
    
  }

  public navigateToSection(section: string){
    this.viewportScroller.scrollToAnchor(section);
  }
}
