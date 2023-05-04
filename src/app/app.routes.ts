import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'AccionesComerciales',
    loadComponent: () => import('./pages/AccionesComerciales/AccionesComerciales.page').then( m => m.AccionesComerciales)
  },
  {
    path: 'Clientes',
    loadComponent: () => import('./pages/Clientes/Clientes.page').then( m => m.Clientes)
  },
  {
    path: 'Comisisonista',
    loadComponent: () => import('./pages/Comisisonista/Comisisonista.page').then( m => m.Comisisonista)
  },
  {
    path: 'PedidosPendientes',
    loadComponent: () => import('./pages/PedidosPendientes/PedidosPendientes.page').then( m => m.PedidosPendientes)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  
  
];
