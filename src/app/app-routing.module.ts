import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ListagemSuinosComponent } from './listagem-suinos/listagem-suinos.component';
import { EditarSuinoComponent } from './editar-suino/editar-suino.component';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cadastrarSuino',component:CadastroSuinoComponent},
  {path: 'listarSuinos', component: ListagemSuinosComponent},
  {path: 'editarSuino/:id', component: EditarSuinoComponent},
  {path: 'pesos/cadastrar', component: CadastroPesoComponent},
  {path: 'pesos/consultar', component: ControlePesoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
