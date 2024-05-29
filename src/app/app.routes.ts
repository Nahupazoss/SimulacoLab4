import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '', redirectTo: 'busqueda', pathMatch: 'full'
      },
      {
        path: 'busqueda', loadComponent:()=> import('./components/busqueda/busqueda.component')
      },
      {
        path: 'actores', loadChildren: ()=> import('./components/actores/actor.routes'),
      },
      {
        path: 'peliculas', loadChildren: ()=> import('./components/peliculas/peliculas.routes'),
      },

];
