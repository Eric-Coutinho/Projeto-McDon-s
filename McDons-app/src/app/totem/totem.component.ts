import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { Router } from '@angular/router';

@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './totem.component.html',
  styleUrl: './totem.component.css'
})

export class TotemComponent {
  constructor(private viewportScroller: ViewportScroller, private router: Router) {}
  
  public navigateToSection(section: string){
    this.viewportScroller.scrollToAnchor(section);
  }

  public carrinho(){
    this.router.navigate(['/carrinho'])
  }
}
