import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { EditarPesoComponent } from './editar-peso/editar-peso.component';
import { SharedModule } from '../shared/shared.module';
import { PesoRoutingModule } from './peso-routing.module';



@NgModule({
  declarations: [
    CadastroPesoComponent,
    ControlePesoComponent,
    EditarPesoComponent
  ],
  imports: [
    CommonModule,
    PesoRoutingModule,
    SharedModule
  ]
})
export class PesoModule { }
