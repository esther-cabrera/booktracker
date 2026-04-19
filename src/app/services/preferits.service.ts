import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element-cataleg.model';

@Injectable({ providedIn: 'root' })
export class PreferitsService {
  private STORAGE_KEY = 'preferits-cataleg';

  private _preferits = signal<ElementCataleg[]>([]);
  preferits = this._preferits.asReadonly();
  totalPreferits = computed(() => this._preferits().length);

  constructor() {
    this.carregar();
  }

  private carregar() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      const parsed: ElementCataleg[] = raw ? JSON.parse(raw) : [];
      // sanejar: evitar duplicats per id
      const uniques = Array.from(
        new Map(parsed.map((e) => [e.id, e])).values(),
      );
      this._preferits.set(uniques);
    } catch {
      this._preferits.set([]);
    }
  }

  private guardar() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._preferits()));
  }

  afegirPreferit(element: ElementCataleg) {
    const actuals = this._preferits();
    if (actuals.some((e) => e.id === element.id)) return; // evita duplicats
    this._preferits.set([
      ...actuals,
      { ...element, notes: element.notes ?? [] },
    ]);
    this.guardar();
  }

  eliminarPreferit(id: number | string) {
    this._preferits.set(this._preferits().filter((e) => e.id !== id));
    this.guardar();
  }

  esPreferit(id: number | string): boolean {
    return this._preferits().some((e) => e.id === id);
  }

  actualitzarNotes(id: number | string, notes: string[]) {
    const actuals = this._preferits().map((e) =>
      e.id === id ? { ...e, notes } : e,
    );
    this._preferits.set(actuals);
    this.guardar();
  }
}
