import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-dos',
  templateUrl: './formulario-dos.component.html',
  styleUrls: ['./formulario-dos.component.css']
})
export class FormularioDosComponent {
  persona = {
    nombre: '',
    edad: ''
  };

  procesar(){
    console.log(this.persona);
  }
}
