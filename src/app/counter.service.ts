import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class CounterService {

  //private API: string = 'http://localhost:9000/counter'
  private API: string = '/counter'

  header = {headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}) };


  constructor(private httpClient: HttpClient) { }
  public incrementCounter(){
    return this.httpClient.get(this.API, this.header);
  }

}

