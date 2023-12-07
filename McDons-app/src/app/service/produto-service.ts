import { Injectable } from "@angular/core";
import { ApiClientService } from '../api-client.service';

import { ProdutoData } from '../data/produto-data';
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    constructor(private http: ApiClientService) { }

    register(data: ProdutoData)
    {
        this.http.post('produto/create', data)
            .subscribe(response =>  console.log('ELLLLLP'))
    }

    getByType(data: ProdutoData)
    {
        this.http.get('produto/getByType')
            .subscribe(response => console.log(response))
    }

    getById(id: any): Observable<any> {
      return this.http.get(`produto/getById/${id}`);
    }
    
    getAll(): Observable<any[]> {
        return this.http.get('produto/getAll').pipe(
          map((response: any) => {
            return response;
          })
        );
      }
}

