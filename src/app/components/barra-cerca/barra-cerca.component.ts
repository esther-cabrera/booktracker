import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrls: ['./barra-cerca.component.scss'],
})
export class BarraCercaComponent {
  text: string = '';

  @Output() cerca = new EventEmitter<string>();

  buscar() {
    this.cerca.emit(this.text);
  }
}
