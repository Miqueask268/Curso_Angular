import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  openALert: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  
  mostrar_en_consola(name: string){
    console.log(name);

    this.openALert = true;
  }
}
