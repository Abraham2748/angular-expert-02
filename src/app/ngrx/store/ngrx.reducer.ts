import { createReducer } from '@ngrx/store';
import { NgrxState } from './ngrx.state';

const initialState: NgrxState = {
  counter: 0,
  message: '',
  loading: false,
  error: '',
  user: {
    name: '',
    age: 0,
    email: '',
    phone: '',
    address: '',
  },
};

export const ngrxReducer = createReducer(initialState);
