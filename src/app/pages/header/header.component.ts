import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public _servicio: InfoPaginaService){}

  public isCollapsed = true;

}
