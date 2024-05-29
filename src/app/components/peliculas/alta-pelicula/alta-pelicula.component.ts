import { Component } from '@angular/core';
import { FireStoreService } from '../../../Services/fire-store.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablaActorComponent } from '../../actores/tabla-actor/tabla-actor.component';

@Component({
  selector: 'app-alta-pelicula',
  standalone: true,
  imports: [FormsModule,CommonModule,TablaActorComponent],
  templateUrl: './alta-pelicula.component.html',
  styleUrl: './alta-pelicula.component.css'
})
export default class AltaPeliculaComponent 
{
  pelicula: any = {};
  actores: any[] = [];
  fotoSeleccionada: File | null = null; // Variable para almacenar el archivo seleccionado

  constructor(private firestoreService: FireStoreService) {}

  onSubmit() 
  {
    if(this.validarDatos()) 
      {
        this.pelicula.actores = this.actores;
        this.firestoreService.guardarPeliculaConFoto(this.pelicula, this.fotoSeleccionada).then(() => {
        console.log('Película guardada exitosamente');
      }).catch(error => {
        console.error('Error al guardar la película:', error);
      });
    } else {
      console.error('Por favor, completa todos los campos');
    }
  }

  validarDatos(): any 
  {
    return this.pelicula.id && this.pelicula.nombre && this.pelicula.tipo && this.pelicula.cantidadPublico && this.pelicula.fechaEstreno && this.fotoSeleccionada;
  }

  onFileSelected(event: any) {
    this.fotoSeleccionada = event.target.files[0]; // Obtener el archivo seleccionado del evento
  }

  seleccionarActor(actor: any) 
  {
    this.actores.push(actor); 

  }
}
