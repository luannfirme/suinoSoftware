import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { SuinoModule } from './suino/suino.module';
import { PesoModule } from './peso/peso.module';
import { SessaoModule } from './sessao/sessao.module';
import { SharedModule } from './shared/shared.module';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


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
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SuinoModule,
    PesoModule,
    SessaoModule,
    SharedModule,
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
