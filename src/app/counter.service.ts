import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { from, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private API: string = 'http://localhost:9000/counter'
  noAuthHeader = {headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}) };


  constructor(private httpClient: HttpClient) { }
  public incrementCounter(){
    return this.httpClient.get(this.API, this.noAuthHeader);
  }

}

