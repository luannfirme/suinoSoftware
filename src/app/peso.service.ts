import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { PigWeight } from './models/pigWeight.model';

@Injectable({
  providedIn: 'root'
})
export class PesoService {

  private readonly API_URL: string = 'https://feb-p015-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getPesos() {
    return this.http.get<{[key: string]: PigWeight}>(`${this.API_URL}pesos.json`,
    {
      params: new HttpParams().set('print', 'pretty')
    })
    .pipe(
      map((responseData) => {
        const array: PigWeight[] = [];
        for (const key in responseData) {
          if ((responseData).hasOwnProperty(key)){
            array.push({...(responseData as any)[key], id: key});
          }
        }
        // console.log(array);
        return array;
      })
    )
  }

  getPesosByBrincoAnimal(brincoAnimal: string) {
    console.log('chamada ao método getPesosByBrincoAnimal')
    return this.getPesos().pipe(map(pesos => pesos.filter(peso => peso.brincoAnimal == brincoAnimal)));
  }

  getPesoById(pesoId: string) {
    return this.http.get<PigWeight>(`${this.API_URL}/pesos/${pesoId}.json`)
  }

  cadastrarPeso(pesoData: {
    brincoSuino: string,
    dataPesagem: Date,
    peso: string,
  } ) {
    return this.http.post(`${this.API_URL}/pesos.json`, pesoData);
  }

  editarPeso(pesoId: string, pesoData: {
    brincoAnimal: string;
    dataPesagem: Date;
    peso: string;
  }) {
    return this.http.put(`${this.API_URL}/pesos/${pesoId}.json`, pesoData, { observe: 'response' });
  }
}

