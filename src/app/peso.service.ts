import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesoService {
  constructor(private http: HttpClient) {}

  getPesos() {
    return this.http.get('/api/pesos');
  }

  cadastrarPeso(pesoData: any) {
    return this.http.post('/api/pesos', pesoData);
  }
}

