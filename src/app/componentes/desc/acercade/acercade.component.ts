import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  acercade: any[] = [];

  constructor( ){

    this.acercade = [
      {id: 1, titulo:"Acerca del fundador de la empresa", urlImg:"/assets/img/acercafundador.jpg", descripcion:"Conoce a Richards Rojas Arquero, el fundador de nuestra empresa de ingeniería y sistemas. Ingeniero Civil de Minas, especialista en TIC y con amplia experiencia en el campo de la ingeniería industrial y de sistemas."},
      {id: 2, titulo:"Experiencia", urlImg:"/assets/img/experiencia.jpg", descripcion:"Nuestro equipo tiene más de 30 años de experiencia en consultoría, evaluación de proyectos, gestión, diseño y desarrollo de sistemas, y reingeniería de empresas. Hemos trabajado con importantes instituciones y empresas de diversos sectores económicos."},
      {id: 3, titulo:"Desempeño laboral actual", urlImg:"/assets/img/desenpenoactual.jpg", descripcion:"Nuestro fundador es un destacado académico en la Universidad Santo Tomás - Sede Antofagasta, donde imparte varias asignaturas, desde algoritmos y programación hasta diseño de procesos y gestión de calidad. También supervisa proyectos y seminarios de título."},
      {id: 4, titulo:"Hitos mas importantes", urlImg:"/assets/img/hitos.jpg", descripcion:"Nuestro fundador ha logrado importantes hitos, como ser Director de Informática y miembro de la Comisión de Acreditación Institucional y de Carreras en la Universidad de Antofagasta. También ha obtenido fondos para proyectos de análisis institucional y gestión de indicadores por más de 400 millones de pesos."}
    ];


  }

  ngOnInit(): void {

  }



}
