import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { EditarSuinoComponent } from './editar-suino/editar-suino.component';
import { ListagemSuinosComponent } from './listagem-suinos/listagem-suinos.component';
import { SuinoRoutingModule } from './suino-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CadastroSuinoComponent,
    EditarSuinoComponent,
    ListagemSuinosComponent
  ],
  imports: [
    CommonModule,
    SuinoRoutingModule,
    SharedModule
  ]
})
export class SuinoModule { }
