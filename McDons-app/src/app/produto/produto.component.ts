import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

}
