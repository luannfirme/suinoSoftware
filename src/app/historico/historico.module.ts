import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaHistoricoComponent } from './consulta-historico/consulta-historico.component';
import { GraficoAtividadeComponent } from './grafico-atividade/grafico-atividade.component';
import { GraficoPesoComponent } from './grafico-peso/grafico-peso.component';
import { ListagemHistoricoComponent } from './listagem-historico/listagem-historico.component';
import { SharedModule } from '../shared/shared.module';
import { HistoricoRoutingModule } from './historico-routing.module';

@NgModule({
  declarations: [
    ConsultaHistoricoComponent,
    GraficoAtividadeComponent,
    GraficoPesoComponent,
    ListagemHistoricoComponent
  ],
  imports: [
    CommonModule,
    HistoricoRoutingModule,
    SharedModule
  ]
})
export class HistoricoModule { }
