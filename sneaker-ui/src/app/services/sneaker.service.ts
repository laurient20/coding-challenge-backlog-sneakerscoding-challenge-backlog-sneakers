import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class SneakerService {

  constructor(private http:HttpClient) { }

  getSneakers(){
    return this.http.get('/server/api/v1/sneakers');
  }

  getSneaker(id: number){
    return this.http.get('/server/api/v1/sneakers' + id);
  }

  addSneaker(sneaker){
    let body = JSON.stringify(sneaker);
    return this.http.post('/server/api/v1/sneakers', body, httpOptions);
  }
}
