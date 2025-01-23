import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  standalone: true,
  imports: [],
  templateUrl: './streams.component.html',
  styleUrl: './streams.component.css',
})
export class StreamsComponent implements OnInit, OnDestroy {
  intervalFunction = () => {
    console.log('StreamsComponent Interval');
  };

  clickEvent() {
    console.log('StreamsComponent Click');
  }

  ngOnInit() {
    //stream de dados infinito
    setInterval(this.intervalFunction, 500);

    document.addEventListener('click', this.clickEvent);

    //stream de dados finito
    setTimeout(() => {
      //console.log('StreamsComponent SetTimeout');
    }, 3000);

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => response.json())
      .then((data) => {
        console.log('StreamsComponent Fetch', data);
      });
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.clickEvent);
    // clearInterval(this.intervalFunction);
  }
}
