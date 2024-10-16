import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StreamsComponent } from './streams/streams.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SignalsComponent } from './signals/signals.component';
import { RxjsSignalsComponent } from './rxjs-signals/rxjs-signals.component';
import { NgrxComponent } from './ngrx/ngrx.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StreamsComponent,
    RxjsComponent,
    SignalsComponent,
    RxjsSignalsComponent,
    NgrxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-expert-02';
}
