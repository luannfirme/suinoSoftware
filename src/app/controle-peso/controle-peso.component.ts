import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pig } from '../models/pig.model';
import { DatabaseService } from '../services/database/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PigWeight } from '../models/pigWeight.model';
import Chart from 'chart.js/auto';

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
  @ViewChild("pesoChart") grafico!: ElementRef;
  displayedColumns: string[] = ['brincoAnimal', 'dataPesagem', 'peso', 'acoes']

  constructor(private dbService: DatabaseService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPeso = this.formBuilder.group({
      BrincoAnimal: ['', Validators.required]
    })

    this.dbService.getPigs().subscribe(response => {
      this.suinos = response;
    });
  }

  submitBrinco() {
    if (this.formPeso.valid) {
      this.dbService.getWeightsByPig(this.formPeso.get('BrincoAnimal')?.value).subscribe(response => {
        this.pesosAnimal = response;
        setTimeout(() => {
          this.renderizaGrafico();
        });
      });
    }
  }

  ordenaPesos(pesos: PigWeight[]): PigWeight[] {
    return pesos.sort((pesoA, pesoB) => {
      return pesoA.dataPesagem.getTime() - pesoB.dataPesagem.getTime();
    })
  }

  renderizaGrafico() {
    if (this.grafico && this.grafico.nativeElement) {
      const ctx = this.grafico.nativeElement.getContext('2d');

      if (this.chart) {
        this.chart.destroy();
      }

      this.pesosAnimal.sort((a, b) => new Date(a.dataPesagem).getTime() - new Date(b.dataPesagem).getTime());

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.pesosAnimal.map(peso => new Date(peso.dataPesagem).toLocaleDateString()),
          datasets: [
            {
              label: 'Peso',
              data: this.pesosAnimal.map(peso => parseFloat(peso.peso)),
              borderColor: 'rgba(70,130,180)',
              backgroundColor: 'rgba(70,130,180, 0.5)',
              type: 'line',
              order: 0
            },
            {
            label: '',
            data: this.pesosAnimal.map(peso => parseFloat(peso.peso)),
            backgroundColor: 'rgba(255,127,80)',
            borderColor: 'rgba(255,127,80, 0.5)',
            borderWidth: 1
          }
        ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true, 
            }
          },
          plugins: {
            legend: {
              display: false,
              position: 'bottom'
            }
          }
        }
      });
    } else {
      console.error('Elemento do gráfico não encontrado.');
    }
  }
}

