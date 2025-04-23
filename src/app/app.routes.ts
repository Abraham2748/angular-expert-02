import { Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { OperatorComponent } from './operator/operator.component';

export const routes: Routes = [
  {
    path: 'observable',
    component: ObservableComponent,
  },
  {
    path: 'operator',
    component: OperatorComponent,
  },
];
