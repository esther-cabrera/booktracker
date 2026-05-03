import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detall',
  standalone: true,
  template: `<p>ID: {{ id }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetallComponent {
  private route = inject(ActivatedRoute);

  id: string | null = null;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
