import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public http: HttpClient) { }

  loadClientDetails():Observable<Client[]> {
    return this.http.get<Client[]>("http://localhost:3000/Client")
  }
}

