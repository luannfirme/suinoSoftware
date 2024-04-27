import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroSessaoComponent } from './cadastro-sessao/cadastro-sessao.component';
import { DetalhesSessaoComponent } from './detalhes-sessao/detalhes-sessao.component';
import { EditarSessaoComponent } from './editar-sessao/editar-sessao.component';
import { ListagemSessoesComponent } from './listagem-sessoes/listagem-sessoes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CadastroSessaoComponent,
    DetalhesSessaoComponent,
    EditarSessaoComponent,
    ListagemSessoesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SessaoModule { }
