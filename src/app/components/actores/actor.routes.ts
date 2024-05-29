import { Routes } from "@angular/router";
export const routes:Routes =[

  {
    path: 'alta',loadComponent: ()=> import('./alta-actor/alta-actor.component')
  },
  {
    path: 'listado',loadComponent: ()=> import('./listado-actor/listado-actor.component')
  }

]

export default routes;