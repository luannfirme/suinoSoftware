import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ListagemSuinosComponent } from './listagem-suinos/listagem-suinos.component';
import { EditarSuinoComponent } from './editar-suino/editar-suino.component';
import {LoginComponent} from './login/login.component'
import { AuthGuard } from './services/guards/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'suino-software', component: NavbarComponent, canActivate: [AuthGuard], children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'listar-suinos', component: ListagemSuinosComponent},
    { path: 'cadastrar-suino', component: CadastroSuinoComponent},
    { path: 'editar-suino/:id', component: EditarSuinoComponent},
    {path: 'cadastrar-pesos', component: CadastroPesoComponent},
    {path: 'consultar-pesos', component: ControlePesoComponent}
  ]},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
