import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonesComponent } from './botones/botones.component';
import { BuclesComponent } from './bucles/bucles.component';
import { ContadorComponent } from './contador/contador.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SwitchComponent } from './switch/switch.component';
import { FormularioDosComponent } from './formulario-dos/formulario-dos.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    BuclesComponent,
    ContadorComponent,
    FormularioComponent,
    SwitchComponent,
    FormularioDosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
