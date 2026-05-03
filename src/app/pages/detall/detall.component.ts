import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from '../../services/element.service';
import { ElementCataleg } from '../../models/element-cataleg.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detall.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetallComponent {
  private route = inject(ActivatedRoute);
  private elementService = inject(ElementService);

  element?: ElementCataleg;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    const elements = this.elementService.elements();

    this.element = elements.find((e) => e.id === Number(id));
  }
}
