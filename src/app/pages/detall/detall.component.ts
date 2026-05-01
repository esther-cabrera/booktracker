import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detall',
  standalone: true,
  template: `<p>ID: {{ id }}</p>`,
})
export class DetallComponent {
  private route = inject(ActivatedRoute);

  id: string | null = null;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
