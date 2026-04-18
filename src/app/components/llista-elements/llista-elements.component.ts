import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';
import { ElementService } from '../../services/element.service';
import { FormulariCercaComponent } from '../formulari-cerca/formulari-cerca.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent, FormulariCercaComponent],
  templateUrl: './llista-elements.component.html',
})
export class LlistaElementsComponent implements OnInit {
  private elementService = inject(ElementService);

  elements = this.elementService.elements;
  carregant = this.elementService.carregant;
  error = this.elementService.error;

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }
  reintentar() {
    this.elementService.obtenirPopulars();
  }
}
