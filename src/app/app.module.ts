import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonesComponent } from './botones/botones.component';
import { BuclesComponent } from './bucles/bucles.component';
import { ContadorComponent } from './contador/contador.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SwitchComponent } from './switch/switch.component';
import { FormularioDosComponent } from './formulario-dos/formulario-dos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario3Component } from './formulario3/formulario3.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    BuclesComponent,
    ContadorComponent,
    FormularioComponent,
    SwitchComponent,
    FormularioDosComponent,
    Formulario3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
