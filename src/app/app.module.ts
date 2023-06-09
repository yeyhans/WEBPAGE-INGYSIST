import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Servicio01Component } from './pages/servicios/servicio01/servicio01.component';
import { Servicio02Component } from './pages/servicios/servicio02/servicio02.component';
import { Servicio03Component } from './pages/servicios/servicio03/servicio03.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
//PLUG
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarruselClientes } from "./componentes/carrusel/clientes/clientes.component";

//FIRESTORE

import { AcercadeComponent } from './componentes/desc/acercade/acercade.component';
import { ProyectosComponent } from './componentes/desc/proyectos/proyectos.component';
import { FormularioComponent } from './pages/contacto/formulario/formulario.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PortafolioComponent,
        ServiciosComponent,
        Servicio01Component,
        Servicio02Component,
        Servicio03Component,
        NoEncontradoComponent,
        NosotrosComponent,
        ContactoComponent,
        ClientesComponent,
        CarruselClientes,
        AcercadeComponent,
        ProyectosComponent,
        FormularioComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule


    ]
})
export class AppModule { }
