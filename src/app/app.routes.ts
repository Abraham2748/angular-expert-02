import { Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { OperatorComponent } from './operator/operator.component';
import { TimeControlComponent } from './time-control/time-control.component';

export const routes: Routes = [
  {
    path: 'observable',
    component: ObservableComponent,
  },
  {
    path: 'operator',
    component: OperatorComponent,
  },
  {
    path: 'time-control',
    component: TimeControlComponent,
  },
];
