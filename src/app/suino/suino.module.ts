import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { EditarSuinoComponent } from './editar-suino/editar-suino.component';
import { ListagemSuinosComponent } from './listagem-suinos/listagem-suinos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { SuinoRoutingModule } from './suino-routing.module';

@NgModule({
  declarations: [
    CadastroSuinoComponent,
    EditarSuinoComponent,
    ListagemSuinosComponent
  ],
  imports: [
    CommonModule,
    SuinoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SuinoModule { }
