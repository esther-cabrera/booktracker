import { Component, Input, inject } from '@angular/core';
import { ElementCataleg } from '../../models/element-cataleg.model';
import { CommonModule } from '@angular/common';
import { PreferitsService } from '../../services/preferits.service';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeta-element.component.html',
  styleUrls: ['./targeta-element.component.scss'],
})
export class TargetaElementComponent {
  @Input() element!: ElementCataleg;

  private preferitsService = inject(PreferitsService);

  togglePreferit() {
    if (this.preferitsService.esPreferit(this.element.id)) {
      this.preferitsService.eliminarPreferit(this.element.id);
    } else {
      this.preferitsService.afegirPreferit(this.element);
    }
  }

  esPreferit(): boolean {
    return this.preferitsService.esPreferit(this.element.id);
  }
}
