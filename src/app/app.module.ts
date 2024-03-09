import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from '../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListagemSuinosComponent } from './listagem-suinos/listagem-suinos.component';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { EditarSuinoComponent } from './editar-suino/editar-suino.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinoComponent,
    NavbarComponent,
    HomeComponent,
    ListagemSuinosComponent,
    ControlePesoComponent,
    CadastroPesoComponent,
    EditarSuinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
