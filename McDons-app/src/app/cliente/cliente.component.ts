import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, MatIconModule, ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  public navigateToSection(section: string){
    this.viewportScroller.scrollToAnchor(section);
  }
}
