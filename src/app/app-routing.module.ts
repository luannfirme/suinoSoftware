import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ListagemSuinosComponent } from './listagem-suinos/listagem-suinos.component';
import { EditarSuinoComponent } from './editar-suino/editar-suino.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cadastrarSuino',component:CadastroSuinoComponent},
  {path: 'listarSuinos', component: ListagemSuinosComponent},
  {path: 'editarSuino/:id', component: EditarSuinoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
