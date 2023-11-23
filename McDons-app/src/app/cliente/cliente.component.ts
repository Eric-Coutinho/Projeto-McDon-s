import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  public navigateToSection(section: string){
    window.location.hash = '';
    window.location.hash = section;
  }
}
