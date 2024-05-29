import { Component } from '@angular/core';
import { TablaPaisesComponent } from '../../tabla-paises/tabla-paises.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FireStoreService } from '../../../Services/fire-store.service';
import { TablaActorComponent } from '../tabla-actor/tabla-actor.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alta-actor',
  standalone: true,
  imports: [TablaPaisesComponent,FormsModule,CommonModule,ReactiveFormsModule,TablaActorComponent,RouterOutlet],
  templateUrl: './alta-actor.component.html',
  styleUrl: './alta-actor.component.css'
})
export default class AltaActorComponent 
{
  actorForm: FormGroup;
  paises: any[] = []; // Agrega esta propiedad para almacenar la lista de países seleccionados

  constructor(private fb: FormBuilder, private service: FireStoreService) {
    this.actorForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      paisNatal: [''] // Añadimos el campo de país natal al formulario
    });
  }

  seleccionarPais(pais: any) {
    this.paises.push(pais); // Agrega el país seleccionado a la lista de países
    this.actorForm.get('paisNatal').setValue(pais.nombre); // Setea el valor del país seleccionado en el formulario
  }

  onSubmit() {
    if (this.actorForm.valid) {
      const actor = this.actorForm.value;
      this.service.guardarActor(actor).then(() => {
        console.log('Actor guardado exitosamente');
      }).catch(error => {
        console.error('Error al guardar el actor:', error);
      });
    }
  }
}
