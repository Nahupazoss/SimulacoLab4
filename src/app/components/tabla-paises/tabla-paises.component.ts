import { Component, EventEmitter, Output } from '@angular/core';
import { FireStoreService } from '../../Services/fire-store.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent
{
  paises: any[] = [];
  @Output() paisSeleccionado = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe(paises => {
      this.paises = paises.map(pais => ({
        nombre: pais.name.common,
        banderaUrl: pais.flags.png
      })).slice(0,50);
    });
  }

  seleccionarPais(pais: any): void {
    this.paisSeleccionado.emit(pais);
  }
}
