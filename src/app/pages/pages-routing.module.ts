import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'seguridad',
      loadChildren: () => import('./seguridad/seguridad.module')
      .then(m => m.SeguridadModule),
    },
    {
      path: 'mesas',
      loadChildren: () => import('./mesas/mesas.module')
      .then(m => m.MesasModule),
    },
    {
      path: 'candidatos',
      loadChildren: () => import('./candidatos/candidatos.module')
      .then(m => m.CandidatosModule),
    },
    {
      path: 'partidos',
      loadChildren: () => import('./partidos/partidos.module')
      .then(m => m.PartidosModule),
    },
    {
      path: 'votaciones',
      loadChildren: () => import('./votaciones/votaciones.module')
      .then(m => m.VotacionesModule),
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
