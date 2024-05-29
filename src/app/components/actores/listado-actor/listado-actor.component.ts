import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../../../Services/fire-store.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-actor',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './listado-actor.component.html',
  styleUrl: './listado-actor.component.css'
})
export default class ListadoActorComponent implements OnInit
{
  actores: any[] = [];

  constructor(private services : FireStoreService)
  {

  }

  ngOnInit(): void 
  {
    this.services.obtenerActores().subscribe(actores => {
      this.actores = actores;
    });
  }

}
