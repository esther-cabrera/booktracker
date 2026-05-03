import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ElementApiResponse } from '../models/element-api.model';
import { ElementCataleg } from '../models/element-cataleg.model';
import { adaptarElement } from '../adapters/element.adapter';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private http = inject(HttpClient);

  private _elements = signal<ElementCataleg[]>([]);
  private _carregant = signal(false);
  private _error = signal<string | null>(null);

  elements = this._elements.asReadonly();
  carregant = this._carregant.asReadonly();
  error = this._error.asReadonly();

  obtenirTots() {
    this._carregant.set(true);
    this._error.set(null);

    this.http
      .get<ElementApiResponse[]>(`${environment.apiUrl}/elements`)
      .subscribe({
        next: (data) => {
          const adaptats = data.map(adaptarElement);
          this._elements.set(adaptats);
          this._carregant.set(false);
        },
        error: () => {
          this._error.set('Error carregant');
          this._carregant.set(false);
        },
      });
  }

  obtenirPopulars() {
    this._carregant.set(true);
    this._error.set(null);

    this.http
      .get<ElementApiResponse[]>(`${environment.apiUrl}/elements?popular=true`)
      .subscribe({
        next: (data) => {
          const adaptats = data.map(adaptarElement);
          this._elements.set(adaptats);
          this._carregant.set(false);
        },
        error: () => {
          this._error.set('Error carregant');
          this._carregant.set(false);
        },
      });
  }
  cercar(terme: string) {
    this._carregant.set(true);
    this._error.set(null);

    this.http
      .get<
        ElementApiResponse[]
      >(`${environment.apiUrl}/elements?nom_like=${terme}`)
      .subscribe({
        next: (data) => {
          const adaptats = data.map(adaptarElement);

          this._elements.set(adaptats);
          this._carregant.set(false);
        },
        error: () => {
          this._error.set('Error en la cerca');
          this._carregant.set(false);
        },
      });
  }
  netejar() {
    this._elements.set([]);
  }
}
