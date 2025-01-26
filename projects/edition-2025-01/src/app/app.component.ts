import { Component } from '@angular/core';
import { RxjsComponent } from './rxjs/rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'edition-2025-01';
}
