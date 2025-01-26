import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  filter,
  fromEvent,
  map,
  merge,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',
})
export class RxjsComponent implements OnInit {
  contador = 0;

  nombre$ = new BehaviorSubject('');

  nombreSub = new Subscription();

  ngOnInit(): void {
    const clickObs$ = fromEvent(document, 'click');

    const clickSub = clickObs$.subscribe(() => {
      if (this.contador > 10) {
        clickSub.unsubscribe();
      } else {
        //console.log('click observable');
        this.contador++;
      }
    });

    this.nombreSub = this.nombre$.subscribe((val) => {
      console.log('nombre cambio a: ' + val);
    });

    setTimeout(() => {
      this.nombre$.next('Mito');
    }, 3000);

    setTimeout(() => {
      this.nombre$.next('Mitocode');
    }, 6000);

    const nombreMayuscula$ = this.nombre$.pipe(map((val) => val.toUpperCase()));

    nombreMayuscula$.subscribe((val) => {
      console.log('NUEVO NOMBRE: ' + val);
    });

    const nombreMinuscula$ = this.nombre$.pipe(
      takeUntilDestroyed(),
      map((val) => val.toLocaleLowerCase())
    );

    nombreMinuscula$.subscribe((val) => {
      console.log('nuevo nombre: ' + val);
    });

    const filtroNombre$ = this.nombre$.pipe(filter((val) => val.length > 5));

    filtroNombre$.subscribe((val) => {
      console.log('nuevo nombre filtrado: ' + val);
    });

    const combinado$ = merge(nombreMinuscula$, nombreMayuscula$);

    combinado$.subscribe((val) => {
      console.log('combinado: ', val);
    });
  }

  ngOnDestroy() {
    this.nombreSub.unsubscribe();
  }
}
