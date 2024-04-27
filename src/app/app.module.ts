import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { CadastroSessaoComponent } from './sessao/cadastro-sessao/cadastro-sessao.component';
import { ListagemSessoesComponent } from './sessao/listagem-sessoes/listagem-sessoes.component';
import { EditarSessaoComponent } from './sessao/editar-sessao/editar-sessao.component';
import { DetalhesSessaoComponent } from './sessao/detalhes-sessao/detalhes-sessao.component';
import { SuinoModule } from './suino/suino.module';
import { PesoModule } from './peso/peso.module';
import { SessaoModule } from './sessao/sessao.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    SuinoModule,
    PesoModule,
    SessaoModule,
    provideFirebaseApp(() => initializeApp({"projectId":"feb-p015","appId":"1:526851697276:web:c4ececcb788d48337cf7f9","databaseURL":"https://feb-p015-default-rtdb.firebaseio.com","storageBucket":"feb-p015.appspot.com","apiKey":"AIzaSyDbAsoB7n_PDZZY6Zr0J1npeUb3ktHXw9E","authDomain":"feb-p015.firebaseapp.com","messagingSenderId":"526851697276","measurementId":"G-JWM3GN0BVH"})),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp({"projectId":"feb-p015","appId":"1:526851697276:web:c4ececcb788d48337cf7f9","databaseURL":"https://feb-p015-default-rtdb.firebaseio.com","storageBucket":"feb-p015.appspot.com","apiKey":"AIzaSyDbAsoB7n_PDZZY6Zr0J1npeUb3ktHXw9E","authDomain":"feb-p015.firebaseapp.com","messagingSenderId":"526851697276","measurementId":"G-JWM3GN0BVH"})
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
