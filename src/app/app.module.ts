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
import { LoginComponent } from './login/login.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinoComponent,
    NavbarComponent,
    HomeComponent,
    ListagemSuinosComponent,
    ControlePesoComponent,
    CadastroPesoComponent,
    EditarSuinoComponent,
    LoginComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"feb-p015","appId":"1:526851697276:web:c4ececcb788d48337cf7f9","databaseURL":"https://feb-p015-default-rtdb.firebaseio.com","storageBucket":"feb-p015.appspot.com","apiKey":"AIzaSyDbAsoB7n_PDZZY6Zr0J1npeUb3ktHXw9E","authDomain":"feb-p015.firebaseapp.com","messagingSenderId":"526851697276","measurementId":"G-JWM3GN0BVH"})),
    provideAuth(() => getAuth())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
