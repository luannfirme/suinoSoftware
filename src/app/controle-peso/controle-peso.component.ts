import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';

@Component({
  selector: 'app-controle-peso',
  templateUrl: './controle-peso.component.html',
  styleUrls: ['./controle-peso.component.css']
})
export class ControlePesoComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
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
  }
}

