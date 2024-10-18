import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getUserName, setUserName } from './ngrx.actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class NgrxEffect {
  actions$ = inject(Actions);
  http = inject(HttpClient);

  loadUsernameEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserName),
      mergeMap(() =>
        this.http
          .get('https://jsonplaceholder.typicode.com/users/1')
          .pipe(map((user: any) => setUserName({ newName: user.name })))
      )
    )
  );
}
