import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Servicio01Component } from './pages/servicios/servicio01/servicio01.component';
import { Servicio02Component } from './pages/servicios/servicio02/servicio02.component';
import { Servicio03Component } from './pages/servicios/servicio03/servicio03.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'formulacion-de-proyectos-para-fondos-concursables', component: Servicio01Component },
  { path: 'diseño-y-desarrollo-de-sistemas-informáticos', component: Servicio02Component },
  { path: 'modelamiento-de-procesos', component: Servicio03Component },
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
