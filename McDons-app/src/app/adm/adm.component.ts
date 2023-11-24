import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [CommonModule, MatIconModule, ],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  public navigateToSection(section: string){
    this.viewportScroller.scrollToAnchor(section);
  }

  public createNewProduct(){
    
  }
}
