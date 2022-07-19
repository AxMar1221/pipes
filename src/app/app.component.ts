import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Bart Simpson';

  personajes: string[] = ['Homero', ' Marge',' Bart', ' Lisa', ' Maguie', ' Apu', ' Nelson', ' Flanders', ' Milhouse']
  PI: number = Math.PI;
  porcentaje: number = 0.123456789;
  salario: number = 1234.5;

  heroe = {
    nombre: 'Peter',
    clave: 'Spidy',
    edad: '25',
    direccion: {
      calle: 'ave primera',
      casa: 10,
      colonia: 'brooklyn'
    }
  }
}
