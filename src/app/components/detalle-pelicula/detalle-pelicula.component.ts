import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export default class DetallePeliculaComponent
{
  @Input() pelicula: any;

  constructor() { }

}
