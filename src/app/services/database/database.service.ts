import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pig } from '../../models/pig.model';
import { map } from 'rxjs';
import { PigWeight } from '../../models/pigWeight.model';
import { Sessao } from '../../models/sessao.model';

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
    return this.http.get<{ [key: string]: Pig }>(`${this.API_URL}/pigs.json`,
      {
        params: new HttpParams().set('print', 'pretty')
      })
      .pipe(
        map((responseData) => {
          const array: Pig[] = [];
          for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)) {
              array.push({ ...(responseData as any)[key], id: key });
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
    return this.http.put(`${this.API_URL}/pigs/${pigId}.json`, pigData, { observe: 'response' });
  }

  deletePig(pigId: string) {
    return this.http.delete(`${this.API_URL}/pigs/${pigId}.json`);
  }

  getWeights() {
    return this.http.get<{ [key: string]: PigWeight }>(`${this.API_URL}/pesos.json`,
      {
        params: new HttpParams().set('print', 'pretty')
      })
      .pipe(
        map((responseData) => {
          const array: PigWeight[] = [];
          for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)) {
              array.push({ ...(responseData as any)[key], id: key });
            }
          }
          return array;
        })
      )
  }

  getWeightsByPig(earingPig: string) {
    return this.getWeights().pipe(map(pesos => pesos.filter(peso => peso.brincoAnimal == earingPig)));
  }

  getWeightById(pesoId: string) {
    return this.http.get<PigWeight>(`${this.API_URL}/pesos/${pesoId}.json`)
  }

  postWeight(pesoData: {
    brincoSuino: string,
    dataPesagem: Date,
    peso: string,
  }) {
    return this.http.post(`${this.API_URL}/pesos.json`, pesoData);
  }

  putWeight(pesoId: string, pesoData: {
    brincoAnimal: string;
    dataPesagem: Date;
    peso: string;
  }) {
    return this.http.put(`${this.API_URL}/pesos/${pesoId}.json`, pesoData, { observe: 'response' });
  }

  postSessions(sessionData: Sessao) {
    this.http.post(`${this.API_URL}/sessions.json`, sessionData).subscribe(response => {
      console.log(response);
    })
  }

  getSession() {
    return this.http.get<{ [key: string]: Sessao }>(`${this.API_URL}/sessions.json`,
      {
        params: new HttpParams().set('print', 'pretty')
      })
      .pipe(
        map((responseData) => {
          const array: Sessao[] = [];
          for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)) {
              array.push({ ...(responseData as any)[key], id: key });
            }
          }
          return array;
        })
      )
  }

  getSessionsByPig(earingPig: string) {
    return this.getSession().pipe(map(sessions => sessions.filter(session => session.brincos.some(pig => pig.brincoAnimal === earingPig))));
  }  

  getSessionById(sessionId: string) {
    return this.http.get<Sessao>(`${this.API_URL}/sessions/${sessionId}.json`)
  }

  putSession(sessionId: string, sessionData: {
    data: Date,
    descricao: string,
    brincos: string[],
    atividades: string[]
  }) {
    return this.http.put(`${this.API_URL}/sessions/${sessionId}.json`, sessionData, { observe: 'response' });
  }

  deleteSession(sessionId: string) {
    return this.http.delete(`${this.API_URL}/sessions/${sessionId}.json`);
  }
}
