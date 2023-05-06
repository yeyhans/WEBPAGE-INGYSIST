import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrusel-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class CarruselClientes {

  images: any[] = [];


	constructor(config: NgbCarouselConfig) {
    this.images = [
      {id: 1, path:"./assets/img/clientes/cliente01.png"},
      {id: 2, path:"./assets/img/clientes/cliente02.png"},
      {id: 3, path:"./assets/img/clientes/cliente03.png"},
      {id: 4, path:"./assets/img/clientes/cliente04.png"},
      {id: 5, path:"./assets/img/clientes/cliente05.png"},
      {id: 6, path:"./assets/img/clientes/cliente06.png"}
    ];

		// customize default values of carousels used by this component tree
		config.interval = 4000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
    config.showNavigationArrows = false;
	}



}
