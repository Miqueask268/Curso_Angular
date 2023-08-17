import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  constructor() { }

  ngOnInit(): void {}

  numero: number = 1;

  decrementar() {
    this.numero--;
  }

  incrementar() {
    this.numero += 1;
  }
}
