import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../client-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatInputModule, MatButtonModule, MatDividerModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private client: ClientService,
    private http: HttpClient,
    private router: Router
  ) { }

  hide = true;

  username: string = ""
  password: string = ""

  logar() {
    if (this.username == null || this.password == null)
      return;

    this.client.login({
      login: this.username,
      password: this.password
    },
      (result: any) => {
        console.log(result);
        if (result == null)
          alert("Usuário ou senha inválidos.")
        else {
          sessionStorage.setItem('jwt', JSON.stringify(result))

          if (result.isAdm == true)
          {
            this.router.navigate(['/adm'])
            return;
          }

          this.router.navigate(['/cliente'])
        }
      })
  }

}
