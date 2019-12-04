import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { HomeComponent } from './components/home/home.component';

import { VerimagenComponent } from './components/verimagen/verimagen.component';

const routes: Routes = [
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'imagen',
    component: ImagenesComponent
  },
  {
    path: 'verimagen/:id',
    component: VerimagenComponent
  },
  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
