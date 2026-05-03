import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navegacio',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navegacio.component.html',
})
export class NavegacioComponent {
  private authService = inject(AuthService);

  usuari$ = this.authService.obtenirUsuari();

  logout() {
    this.authService.logout();
  }
}
