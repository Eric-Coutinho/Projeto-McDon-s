import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
//   constructor (public dialog: MatDialog,
//     private client: ClientService, private http: HttpClient) { } <====== implementar isso aq

  // uploadFile = (files: any) => {
  //   if(files.length === 0){
  //     return;
  //   }
  //   let fileToUpload = <File>files[0];
  //   const formData = new FormData();
  //   formData.append('file', fileToUpload, fileToUpload.name);

  //   var jwt = sessionStorage.getItem('jwt');
  //   if (jwt == null)
  //     return
  //   formData.append('jwt', jwt)

  //   this.http.put('https:/localhost:7122/user/image', formData)
  //     .subscribe(result => console.log("ok!"));
  // }
}
