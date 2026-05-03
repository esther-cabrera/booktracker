import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';
import { ElementService } from '../../services/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsService } from '../../services/preferits.service';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    TargetaElementComponent,
    FormulariCercaComponent,
  ],
  templateUrl: './cataleg.component.html',
})
export class CatalegComponent implements OnInit {
  private elementService = inject(ElementService);

  elements = this.elementService.elements;
  carregant = this.elementService.carregant;
  error = this.elementService.error;

  ngOnInit() {
    this.elementService.obtenirTots();
  }
  reintentar() {
    this.elementService.obtenirTots();
  }

  private preferitsService = inject(PreferitsService);
  totalPreferits = this.preferitsService.totalPreferits;
}
