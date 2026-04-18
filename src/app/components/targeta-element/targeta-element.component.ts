import { Component, Input } from '@angular/core';
import { ElementCataleg } from '../../models/element-cataleg.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeta-element.component.html',
  styleUrls: ['./targeta-element.component.scss'],
})
export class TargetaElementComponent {
  @Input() element!: ElementCataleg;
}
