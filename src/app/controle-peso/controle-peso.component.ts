import { Component, OnInit } from '@angular/core';
import { Pig } from '../models/pig.model';
import { DatabaseService } from '../services/database/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PigWeight } from '../models/pigWeight.model';
import { PesoService } from '../peso.service';
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
        console.log(response);
      });
    }
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

