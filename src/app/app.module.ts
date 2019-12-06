import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VerimagenComponent } from './components/verimagen/verimagen.component';
import { AgregariComponent } from './components/agregari/agregari.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ad', component: AdminComponent },
  { path: 'admin',  component: AdminComponent },
 
  { path: 'ad/:id', component: AdminComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    ImagenesComponent,
    HomeComponent,
    VerimagenComponent,
    AgregariComponent,
    AdminComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
