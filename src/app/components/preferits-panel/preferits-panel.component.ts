import { Component, inject, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';
import { PreferitsService } from '../../services/preferits.service';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html',
})
export class PreferitsPanelComponent {
  private fb = inject(FormBuilder);
  private preferitsService = inject(PreferitsService);

  preferits = this.preferitsService.preferits;
 
  private _ef = effect(() => {
    const data = this.preferits();

    if (this.elements.length !== data.length) {
      this.rebuildForm(data);
    }
  });

  formulari = this.fb.group({
    elements: this.fb.array([]),
  });

  get elements(): FormArray {
    return this.formulari.get('elements') as FormArray;
  }

  ngOnInit() {
    this.rebuildForm(this.preferits());
  }

  private rebuildForm(data: any[]) {
    this.elements.clear();

    data.forEach((p) => {
      const notesFA = this.fb.array(
        (p.notes || []).map((n: string) =>
          this.fb.control(n, [Validators.required, Validators.minLength(3)]),
        ),
      );

      notesFA.valueChanges.subscribe((val) => {
        this.preferitsService.actualitzarNotes(p.id, val as string[]);
      });

      this.elements.push(
        this.fb.group({
          id: [p.id],
          notes: notesFA,
        }),
      );
    });
  }

  getNotes(i: number): FormArray {
    return this.elements.at(i).get('notes') as FormArray;
  }

  afegirNota(i: number) {
    this.getNotes(i).push(
      this.fb.control('', [Validators.required, Validators.minLength(3)]),
    );
  }

  eliminarNota(i: number, j: number) {
    this.getNotes(i).removeAt(j);
    const grup = this.elements.at(i);
    this.preferitsService.actualitzarNotes(grup.value.id, grup.value.notes);
  }
}
