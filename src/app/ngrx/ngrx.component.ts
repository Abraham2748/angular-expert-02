import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCounter,
  selectMessage,
  selectUserName,
} from './store/ngrx.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { getUserName, setCounter, setMessage } from './store/ngrx.actions';

@Component({
  selector: 'app-ngrx',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.css',
})
export class NgrxComponent {
  store = inject(Store);

  counter$ = this.store.select(selectCounter);

  message$ = this.store.select(selectMessage);

  userName$ = this.store.select(selectUserName);

  setCounterTo10() {
    this.store.dispatch(setCounter({ newValue: 10 }));
  }

  obj1 = {
    valor1: 'hello',
    valor2: 'world',
  };

  obj2 = { ...this.obj1, valor1: 'hola' };

  setNewMessage(newMessage: string) {
    this.store.dispatch(setMessage({ newMessage }));
  }

  getUserNameFromStore() {
    this.store.dispatch(getUserName());
  }
}
