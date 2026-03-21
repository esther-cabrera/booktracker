import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';
import { DADES_MOCK } from '../../mock/dades-mock';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent, BarraCercaComponent],
  templateUrl: './llista-elements.component.html',
  styleUrls: ['./llista-elements.component.scss'],
})
export class LlistaElementsComponent {
  elements = DADES_MOCK;
  filtrats = DADES_MOCK;

  filtrar(text: string) {
    this.filtrats = this.elements.filter((e) =>
      e.nom.toLowerCase().includes(text.toLowerCase()),
    );
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
