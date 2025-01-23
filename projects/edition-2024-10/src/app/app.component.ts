import { Component } from '@angular/core';
import { NgrxComponent } from './ngrx/ngrx.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgrxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-expert-02';
}
