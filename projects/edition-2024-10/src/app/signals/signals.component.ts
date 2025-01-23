import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  name = signal('Abraham');
  lastName = signal('Salazar');
  age = signal(25);

  completeName = computed(() => this.name() + ' ' + this.lastName());

  greeting = computed(
    () =>
      'Hola, soy ' + this.completeName() + ' y tengo ' + this.age() + ' años.'
  );

  constructor() {
    effect(() => {
      console.log('Nuevo valor de nombre: ' + this.name());
    });
  }

  updateName() {
    this.name.set('Jack');
    console.log('Actualizando nombre');
  }

  ngOnInit() {
    setTimeout(() => {
      this.name.set('John');
    }, 3000);
  }
}
