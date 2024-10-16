import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-rxjs-signals',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rxjs-signals.component.html',
  styleUrl: './rxjs-signals.component.css',
})
export class RxjsSignalsComponent {
  http = inject(HttpClient);

  ditto$ = this.http
    .get('https://pokeapi.co/api/v2/pokemon/ditto')
    .pipe(map((response: any) => response.name));

  dittoSignal = toSignal(this.ditto$);

  name = signal('Abraham');
  lastName = signal('Salazar');
  age = signal(25);

  completeName = computed(() => this.name() + ' ' + this.lastName());

  greeting = computed(
    () =>
      'Hola, soy ' + this.completeName() + ' y tengo ' + this.age() + ' años.'
  );

  greeting$ = toObservable(this.greeting);

  updateName() {
    this.name.set('Jack');
    console.log('Actualizando nombre');
  }
  updateLastName() {
    this.lastName.set('Black');
    console.log('Actualizando apellido');
  }
}
