import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ListagemSuinosComponent } from './listagem-suinos/listagem-suinos.component';
import { EditarSuinoComponent } from './editar-suino/editar-suino.component';
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {path:'cadastrarSuino',component:CadastroSuinoComponent},
  {path: 'listarSuinos', component: ListagemSuinosComponent},
  {path: 'editarSuino/:id', component: EditarSuinoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'**', redirectTo: '/login', pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
