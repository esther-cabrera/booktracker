import { Component, Input } from '@angular/core';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  templateUrl: './targeta-element.component.html',
  styleUrls: ['./targeta-element.component.scss'],
})
export class TargetaElementComponent {
  @Input() element!: Element;
}
