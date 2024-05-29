import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FireStoreService } from '../../Services/fire-store.service';
import DetallePeliculaComponent from '../detalle-pelicula/detalle-pelicula.component';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [CommonModule,DetallePeliculaComponent],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export default class TablaPeliculaComponent implements OnInit
{
  peliculas: any[] = [];
  @Output() peliculaSeleccionada = new EventEmitter<any>();

  constructor(private service: FireStoreService) { }

  ngOnInit(): void {
    this.service.obtenerPeliculas().subscribe(peliculas => {
      this.peliculas = peliculas;
    });
  }

  seleccionarPelicula(pelicula: any): void 
  {
    this.peliculaSeleccionada.emit(pelicula);
  }

}
