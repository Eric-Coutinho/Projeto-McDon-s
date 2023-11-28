import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../client-service';

@Component({
  selector: 'app-login', 
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatInputModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (public dialog: MatDialog,
    private client: ClientService,
    private http: HttpClient
    ) { }

  hide = true;
  
  email: string = ""
  password: string = ""
  
  logar()
  {
    this.client.login({
      login: this.email,
      password: this.password
    }, (result: any) => {
      if (result == null)
        alert("Usuário ou senha inválidos.")
      else
        sessionStorage.setItem('jwt', JSON.stringify(result))
    })
  }

}
