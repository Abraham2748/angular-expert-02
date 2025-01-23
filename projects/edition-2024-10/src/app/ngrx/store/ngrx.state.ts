export interface NgrxState {
  counter: number;
  message: string;
  loading: boolean;
  error: string;
  user: User;
}

export interface User {
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string;
}
