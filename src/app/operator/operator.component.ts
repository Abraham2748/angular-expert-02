import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-operator',
  imports: [],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.css',
})
export class OperatorComponent implements OnInit {
  ngOnInit(): void {
    const numeros$ = from([1, 2, 3, 4, 5, 6]);
    const numerosConPipe$ = numeros$.pipe(
      // Filtramos los pares
      filter((n) => n % 2 === 0),
      // Multiplicamos por 10
      map((n) => n * 10)
    );
    numerosConPipe$.subscribe((n) => {
      console.log(n);
    });
  }
}
