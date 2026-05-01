import { Component } from '@angular/core';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { NavegacioComponent } from './components/navegacio/navegacio.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegacioComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ioc-angular-booktracker-EstherCabrera';

  constructor() {
    console.log('Aplicació BookTracker inicialitzada correctament');
  }
}
