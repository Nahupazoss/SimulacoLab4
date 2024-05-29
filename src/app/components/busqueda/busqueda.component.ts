import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AltaActorComponent from '../actores/alta-actor/alta-actor.component';
import ListadoPeliculaComponent from '../peliculas/listado-pelicula/listado-pelicula.component';
import TablaPeliculaComponent from '../tabla-pelicula/tabla-pelicula.component';
import DetallePeliculaComponent from '../detalle-pelicula/detalle-pelicula.component';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [RouterOutlet,TablaPeliculaComponent,RouterOutlet,DetallePeliculaComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export default class BusquedaComponent 
{
  peliculaSeleccionada: any;

  actualizarPeliculaSeleccionada(pelicula: any) 
  {
    this.peliculaSeleccionada = pelicula;
  }

}
