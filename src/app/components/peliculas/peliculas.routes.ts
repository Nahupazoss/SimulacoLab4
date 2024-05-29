import { Routes } from "@angular/router";
export const routes:Routes =[

  {
    path: 'alta',loadComponent: ()=> import('./alta-pelicula/alta-pelicula.component')
  },
  {
    path: 'listado',loadComponent: ()=> import('./listado-pelicula/listado-pelicula.component')
  }

]

export default routes;