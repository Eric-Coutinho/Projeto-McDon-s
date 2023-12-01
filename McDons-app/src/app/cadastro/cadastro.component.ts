import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../client-service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor (private client: ClientService) { }
    username: string = ""
    password: string = ""
    repeatPassword: string = ""

    create()
    {
      this.client.register({
        login: this.username,
        password: this.password
      })
    }

  hide = true;
  
  hide1 = true;
}

