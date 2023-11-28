import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ApiClientService{
    backend = 'http://localhost:5037' // alterar a porta

    constructor(private http: HttpClient) { }

    get(url: string){
        return this.http
            .get(this.backend + url)
    }

    post(url: string, obj: any){
        return this.http
            .post(this.backend + url, obj)
    }
}