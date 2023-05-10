import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicios: any[] = [];

  constructor( ){

    this.servicios = [
      {id: 1, ruta:"/formulacion-de-proyectos-para-fondos-concursables", titulo:"Formulación de proyectos para fondos concursables", urlImg:"/assets/img/formulaciondeproyecto.jpg", descripcion:"Descubre la financiación ideal para tu proyecto con nuestro servicio de análisis de ideas y fondos de financiamiento."},
      {id: 2, ruta: "/diseño-y-desarrollo-de-sistemas-informáticos", titulo:"Diseño y desarrollo de sistemas informáticos.", urlImg:"/assets/img/disenoinformatico.jpg", descripcion:"Transforma tus ideas en sistemas innovadores y gana financiamiento con nuestro equipo de expertos."},
      {id: 3, ruta: "/modelamiento-de-procesos", titulo:"Modelamiento de procesos.", urlImg:"/assets/img/modelamientoproceso.jpg", descripcion:"Optimiza tus procesos y mejora el rendimiento de tu empresa con nuestro equipo de ingenieros industriales especializados."}
    ];


  }

  ngOnInit(): void {

  }
}

