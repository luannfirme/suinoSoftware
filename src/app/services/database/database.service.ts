import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pig } from '../../models/pig.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private readonly API_URL: string = 'https://feb-p015-default-rtdb.firebaseio.com/'

  constructor(private http: HttpClient) { }

  postPig(pigData: {
    brincoAnimal: string,
    brincoPai: string,
    brincoMae: string,
    dataNascimento: string,
    dataSaida: string,
    status: string,
    sexo: string
  }) {
    this.http.post(`${this.API_URL}/pigs.json`, pigData).subscribe(response => {
      console.log(response);
    })
  }

  getPigs() {
    return this.http.get<{[key: string]: Pig}>(`${this.API_URL}/pigs.json`, 
      {
        params: new HttpParams().set('print', 'pretty')
      })
      .pipe(
        map((responseData) => {
          const array: Pig[] = [];
          for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)){
              array.push({...(responseData as any)[key], id: key});
            }
          }
          return array;
        })
      )
  }

  getPigById(pigId: string) {
    return this.http.get<Pig>(`${this.API_URL}/pigs/${pigId}.json`)
  }

  putPig(pigId: string, pigData: {
    brincoAnimal: string,
    brincoPai: string,
    brincoMae: string,
    dataNascimento: string,
    dataSaida: string,
    status: string,
    sexo: string
  }) {
    return this.http.put(`${this.API_URL}/pigs/${pigId}.json`, pigData, { observe: 'response'});
  }

  deletePig(pigId: string) {
    return this.http.delete(`${this.API_URL}/pigs/${pigId}.json`);
  }
}
