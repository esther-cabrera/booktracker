import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element-cataleg.model';

@Injectable({
  providedIn: 'root',
})
export class PreferitsService {
  private STORAGE_KEY = 'preferits-cataleg';

  private _preferits = signal<ElementCataleg[]>([]);

  preferits = this._preferits.asReadonly();
  totalPreferits = computed(() => this._preferits().length);

  constructor() {
    this.carregarPreferits();
  }

  private carregarPreferits() {
    try {
      const dades = localStorage.getItem(this.STORAGE_KEY);
      if (dades) {
        this._preferits.set(JSON.parse(dades));
      }
    } catch (error) {
      console.error('Error carregant preferits', error);
      this._preferits.set([]);
    }
  }

  private guardarPreferits() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._preferits()));
    } catch (error) {
      console.error('Error guardant preferits', error);
    }
  }

  afegirPreferit(element: ElementCataleg): void {
    const actuals = this._preferits();

    if (!actuals.find((e) => e.id === element.id)) {
      this._preferits.set([...actuals, element]);
      this.guardarPreferits();
    }
  }

  eliminarPreferit(id: string): void {
    const filtrats = this._preferits().filter((e) => e.id !== id);
    this._preferits.set(filtrats);
    this.guardarPreferits();
  }

  esPreferit(id: string): boolean {
    return this._preferits().some((e) => e.id === id);
  }
}
