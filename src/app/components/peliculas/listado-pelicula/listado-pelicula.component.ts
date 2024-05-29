import { Component } from '@angular/core';
import TablaPeliculaComponent from '../../tabla-pelicula/tabla-pelicula.component';

@Component({
  selector: 'app-listado-pelicula',
  standalone: true,
  imports: [TablaPeliculaComponent],
  templateUrl: './listado-pelicula.component.html',
  styleUrl: './listado-pelicula.component.css'
})
export default class ListadoPeliculaComponent {

}
