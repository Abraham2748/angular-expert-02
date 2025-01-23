import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  filter,
  finalize,
  fromEvent,
  interval,
  map,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',
})
export class RxjsComponent {
  objP = {
    name: 'Pikachu',
    type: 'Electric',
  };
  contador$ = new BehaviorSubject(0);

  http = inject(HttpClient);

  contador = 0;

  ditto$ = this.http.get('https://pokeapi.co/api/v2/pokemon/ditto');

  ngOnInit() {
    const clickObs$ = fromEvent(document, 'click');
    const clickSub = clickObs$.subscribe(() => {
      console.log('RxjsComponent Click');
    });

    setTimeout(() => {
      console.log('Click Unsubscribed');
      clickSub.unsubscribe();
    }, 3000);

    const interval$ = interval(1000);

    const intervalSub = interval$.subscribe(() => {
      console.log('RxjsComponent Interval');
    });

    setTimeout(() => {
      console.log('Interval Unsubscribed');
      intervalSub.unsubscribe();
    }, 5000);

    this.contador$.subscribe((val) => {
      console.log('nuevo valor: ' + val);
    });

    this.http
      .get('https://pokeapi.co/api/v2/pokemon/bulbasaur')
      .pipe(
        map((original: any) => {
          const nombre: string = original.name;
          return nombre.toUpperCase();
        }),
        filter((valor) => {
          return true;
        }),
        catchError((error) => {
          console.log('Error', error);
          return EMPTY;
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  newValue() {
    if (!this.contador$.closed) this.contador$.next(this.contador++);
  }

  unsubscribe() {
    this.contador$.unsubscribe();
  }
}
