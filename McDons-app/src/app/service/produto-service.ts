import { Injectable } from "@angular/core";
import { ApiClientService } from '../api-client.service';

import { ProdutoData } from '../data/produto-data';

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    constructor(private http: ApiClientService) { }

    register(data: ProdutoData)
    {
        this.http.post('produto/create', data)
            .subscribe(response => console.log(response))
    }

}

