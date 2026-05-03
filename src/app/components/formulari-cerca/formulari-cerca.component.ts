import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map, debounceTime } from 'rxjs/operators';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrls: ['./formulari-cerca.component.scss'],
})
export class FormulariCercaComponent implements OnInit {
  private fb = inject(FormBuilder);
  private elementService = inject(ElementService);

  formulari = this.fb.group({
    termeCerca: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
        asyncValidators: [this.codiDisponibleValidator.bind(this)],
        updateOn: 'change',
      },
    ],
  });

  ngOnInit() {
    this.termeCerca?.valueChanges.pipe(debounceTime(400)).subscribe((valor) => {
      if (this.termeCerca?.invalid) return;

      if (!valor) {
        this.elementService.netejar();
      } else {
        this.elementService.cercar(valor);
      }
    });
  }

  codiDisponibleValidator(
    control: AbstractControl,
  ): Observable<ValidationErrors | null> {
    const valor = control.value;

    return of(valor).pipe(
      delay(500),
      map((text) => {
        if (!text || text.length < 2) return null;

        return text.toLowerCase() === 'zzz' ? { sensResultats: true } : null;
      }),
    );
  }

  netejar() {
    this.formulari.reset();
    this.elementService.obtenirPopulars();
  }

  get termeCerca() {
    return this.formulari.get('termeCerca');
  }
}
