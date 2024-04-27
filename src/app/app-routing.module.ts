import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component'
import { AuthGuard } from './services/guards/auth.guard';
import { NavbarComponent } from './shared/navbar/navbar.component';

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
