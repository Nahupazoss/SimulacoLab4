import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore/firebase';
import { FireStoreService } from '../../../Services/fire-store.service';

@Component({
  selector: 'app-tabla-actor',
  standalone: true,
  imports: [],
  templateUrl: './tabla-actor.component.html',
  styleUrl: './tabla-actor.component.css'
})
export class TablaActorComponent implements OnInit
{

  actores : any[] = [];
  @Output() actorSeleccionado = new EventEmitter<any>();

  constructor(private service : FireStoreService)
  {

  }

  ngOnInit(): void 
  {
    this.service.obtenerActores().subscribe(actores => {
      this.actores = actores;
    });
  }
  seleccionarActor(actor: any, evento : any): void 
  {
    if(evento.srcElement)
    {
      this.actorSeleccionado.emit(actor);
    
    }
    console.log(evento);
  }

}
