import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent implements OnInit {
  ngOnInit(): void {
    const manualObservable = new Observable<string>((observer) => {
      observer.next('Primer valor');
      observer.next('Segundo valor');
      //observer.error('Algo salió mal');
      observer.complete();
    });

    manualObservable.subscribe((value) => {
      console.log(value);
    });

    const ofObservable = of('1er Valor', '2do Valor');
    ofObservable.subscribe((value) => {
      console.log(value);
    });

    const fromObservable = from([1, 2, 3]);
    fromObservable.subscribe((value) => {
      console.log(value);
    });
  }
}
