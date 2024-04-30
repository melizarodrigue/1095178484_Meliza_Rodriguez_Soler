import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceTsService {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get(`https://example.com/api/productos`);
  }
}
