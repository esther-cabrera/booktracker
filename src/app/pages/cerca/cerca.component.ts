import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';

@Component({
  selector: 'app-cerca',
  standalone: true,
  imports: [CommonModule, FormulariCercaComponent, TargetaElementComponent],
  templateUrl: './cerca.component.html',
})
export class CercaComponent {
  private elementService = inject(ElementService);

  elements = this.elementService.elements;
  carregant = this.elementService.carregant;
  error = this.elementService.error;
}
