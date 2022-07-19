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
}
