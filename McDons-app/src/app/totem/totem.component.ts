import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './totem.component.html',
  styleUrl: './totem.component.css'
})
export class TotemComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  public navigateToSection(section: string){
    this.viewportScroller.scrollToAnchor(section);
  }
}
