import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-of-values',
  standalone: true,
  imports: [],
  templateUrl: './stream-of-values.component.html',
  styleUrl: './stream-of-values.component.css',
})
export class StreamOfValuesComponent implements OnInit {
  title = 'edition-2025-01';

  ngOnInit(): void {
    //stream of values infinito
    const myInterval = setInterval(() => {
      //console.log('interval ejecutado.');
    }, 1000);

    document.addEventListener('click', () => {
      console.log('Usuario hizo click');
    });

    document.addEventListener('keyup', () => {
      console.log('Usuario hizo keyup');
    });

    //stream of values finito
    setTimeout(() => {
      console.log('set time out ejecutado.');
    }, 3000);

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}
