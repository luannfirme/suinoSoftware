import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroSuinoComponent } from './suino/cadastro-suino/cadastro-suino.component';
import { ListagemSuinosComponent } from './suino/listagem-suinos/listagem-suinos.component';
import { EditarSuinoComponent } from './suino/editar-suino/editar-suino.component';
import {LoginComponent} from './login/login.component'
import { AuthGuard } from './services/guards/auth.guard';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CadastroPesoComponent } from './peso/cadastro-peso/cadastro-peso.component';
import { ControlePesoComponent } from './peso/controle-peso/controle-peso.component';
import { EditarPesoComponent } from './peso/editar-peso/editar-peso.component';
import { ListagemSessoesComponent } from './sessao/listagem-sessoes/listagem-sessoes.component';
import { CadastroSessaoComponent } from './sessao/cadastro-sessao/cadastro-sessao.component';
import { EditarSessaoComponent } from './sessao/editar-sessao/editar-sessao.component';
import { DetalhesSessaoComponent } from './sessao/detalhes-sessao/detalhes-sessao.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'suino-software', component: NavbarComponent, canActivate: [AuthGuard], children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
      path: 'suinos',
      loadChildren: () => import('./suino/suino.module').then(m => m.SuinoModule)
    },
    {
      path: 'pesos',
      loadChildren: () => import('./peso/peso.module').then(m => m.PesoModule)
    },
    {
      path: 'sessoes',
      loadChildren: () => import('./sessao/sessao.module').then(m => m.SessaoModule)
    }
  ]},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
