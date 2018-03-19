import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
const BASE_URL = environment.api;

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}
  get(url: string)  {
    return this.http.get(BASE_URL + url);
  }
  post(url: string, body: any) {
    return this.http.post(BASE_URL + url, body);
  }
  put(url: string, body: any) {
    return this.http.put(BASE_URL + url, body);
  }
  delete(url: string) {
    return this.http.delete(BASE_URL + url);
  }
}
