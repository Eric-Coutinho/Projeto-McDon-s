import { Injectable } from "@angular/core";
import { ApiClientService } from './api-client.service';
import { ClientData } from './client-data';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    constructor(private http: ApiClientService) { }

    login(data: ClientData, callback: any) {
        this.http.post('/login', data)
            .subscribe(
                response => {
                    callback(response)
                },
                error => {
                    callback(null)
                })
    }
}

