import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private http = inject(HttpClient);

  private _elements = signal<any[]>([]);
  private _carregant = signal(false);
  private _error = signal<string | null>(null);

  elements = this._elements.asReadonly();
  carregant = this._carregant.asReadonly();
  error = this._error.asReadonly();

  obtenirPopulars() {
    this._carregant.set(true);
    this._error.set(null);

    this.http
      .get<any[]>(`${environment.apiUrl}/elements?popular=true`)
      .subscribe({
        next: (data) => {
          this._elements.set(data);
          this._carregant.set(false);
        },
        error: () => {
          this._error.set('Error carregant');
          this._carregant.set(false);
        },
      });
  }
}
