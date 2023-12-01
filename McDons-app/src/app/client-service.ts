import { Injectable } from "@angular/core";
import { ApiClientService } from './api-client.service';

import { ClientData } from './client-data';

@Injectable({
    providedIn: 'root'
})

export class ClientService {
    constructor(private http: ApiClientService) { }

    register(data: ClientData)
    {
        this.http.post('user/register', data)
            .subscribe(response => console.log(response))
    }

    login(data: ClientData, callback: any) {
        this.http.post('user/login', data)
            .subscribe(
                response => {
                    callback(response)
                },
                error => {
                    callback(null)
                })
    }
}

