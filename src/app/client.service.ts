import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseURL: string =  "http://localhost:3000/Client"

  constructor(public http: HttpClient) { }

  loadClientDetails():Observable<Client[]> {
    return this.http.get<Client[]>("http://localhost:3000/Client")
  }

  storeClientMeeting(client: any): any {
    return this.http.post(this.baseURL, client);
  }

  deleteMeeting(id: any): any {
    return this.http.delete(this.baseURL+"/"+id);
  }

  
  updateClientMeeting(client: any): any {
    return this.http.put(this.baseURL+"/"+client.id, client);
  }





}

