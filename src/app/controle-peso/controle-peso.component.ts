import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pig } from '../models/pig.model';
import { DatabaseService } from '../services/database/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PigWeight } from '../models/pigWeight.model';
import { PesoService } from '../peso.service';
import { Chart } from 'chart.js';
// import { Chart } from 'chart.js';

@Component({
  selector: 'app-controle-peso',
  templateUrl: './controle-peso.component.html',
  styleUrls: ['./controle-peso.component.css']
})
export class ControlePesoComponent implements OnInit {
  chart: any;
  suinos: Pig[] = [];
  formPeso!: FormGroup;
  pesosAnimal: PigWeight[] = [];
  @ViewChild("grafico") grafico!: ElementRef;
  displayedColumns: string[] = ['brincoAnimal', 'dataPesagem', 'peso', 'acoes']

  constructor(private dbService: DatabaseService, private pesoService: PesoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPeso = this.formBuilder.group({
      BrincoAnimal: ['', Validators.required]
    })

    this.dbService.getPigs().subscribe(response => {
      this.suinos = response;
    });
  }

  submitBrinco() {
    console.log('Submit chamado')
    if(this.formPeso.valid) {
      console.log('Form valido')
      this.pesoService.getPesosByBrincoAnimal(this.formPeso.get('BrincoAnimal')?.value).subscribe(response => {
        this.pesosAnimal = response;
        // this.pesosAnimal = this.ordenaPesos(response);
        // this.pesosAnimal = response.sort((pesoA, pesoB) => {
        //   return pesoA.dataPesagem.getTime() - pesoB.dataPesagem.getTime();
        // })
        // console.log(response);
        console.log(this.pesosAnimal)
      });
    }

    this.renderizaGrafico();
  }

  ordenaPesos(pesos: PigWeight[]): PigWeight[] {
    return pesos.sort((pesoA, pesoB) => {
      return pesoA.dataPesagem.getTime() - pesoB.dataPesagem.getTime();
    })
  }

  renderizaGrafico() {
    this.chart = new Chart("grafico", {
      type: 'bar',
      data: {
        labels: this.pesosAnimal.map(peso => peso.dataPesagem),
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  //   this.chart = new Chart('canvas', {
  //     type: 'line',
  //     data: {
  //       labels: ['2022-01-01', '2022-02-01', '2022-03-01'], // datas de pesagem
  //       datasets: [{
  //         label: 'Peso do animal',
  //         data: [100, 110, 105], // pesos correspondentes
  //         borderColor: '#3cba9f',
  //         fill: false
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         xAxes: [{
  //           type: 'time',
  //           time: {
  //             unit: 'day',
  //             displayFormats: {
  //               day: 'YYYY-MM-DD'
  //             }
  //           },
  //           scaleLabel: {
  //             display: true,
  //             labelString: 'Data de Pesagem'
  //           }
  //         }],
  //         yAxes: [{
  //           scaleLabel: {
  //             display: true,
  //             labelString: 'Peso (kg)'
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }
}

