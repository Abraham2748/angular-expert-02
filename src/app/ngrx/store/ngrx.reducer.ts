import { createReducer, on } from '@ngrx/store';
import { NgrxState } from './ngrx.state';
import { setCounter, setMessage, setUserName } from './ngrx.actions';

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

export const ngrxReducer = createReducer(
  initialState,
  on(setCounter, (state, { newValue }) => ({ ...state, counter: newValue })),
  on(setMessage, (state, { newMessage }) => ({
    ...state,
    message: newMessage,
  })),
  on(setUserName, (state, { newName }) => ({
    ...state,
    user: { ...state.user, name: newName },
  }))
);
