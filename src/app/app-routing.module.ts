import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'botones',
    loadChildren: () => import('./paginas/botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./paginas/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./paginas/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'listas',
    loadChildren: () => import('./paginas/listas/listas.module').then( m => m.ListasPageModule)
  },
  {
    path: 'array',
    loadChildren: () => import('./paginas/array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./paginas/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'empleado',
    loadChildren: () => import('./paginas/empleado/empleado.module').then( m => m.EmpleadoPageModule)
  },
  {
    path: 'empleado-details',
    loadChildren: () => import('./paginas/empleado-details/empleado-details.module').then( m => m.EmpleadoDetailsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./paginas/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'checks',
    loadChildren: () => import('./paginas/checks/checks.module').then( m => m.ChecksPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./paginas/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'navegacion',
    loadChildren: () => import('./paginas/navegacion/navegacion.module').then( m => m.NavegacionPageModule)
  },
  {
    path: 'pagina1/:id/:nombreap',
    loadChildren: () => import('./paginas/pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./paginas/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina3',
    loadChildren: () => import('./paginas/pagina3/pagina3.module').then( m => m.Pagina3PageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./paginas/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./paginas/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
