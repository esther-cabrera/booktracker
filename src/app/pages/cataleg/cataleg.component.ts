import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';
import { ElementService } from '../../services/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsService } from '../../services/preferits.service';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [
    CommonModule,
    TargetaElementComponent,
    FormulariCercaComponent,
    PreferitsPanelComponent,
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
