import {LOGIN, SIGN_UP} from '../actionTypes/actionTypes';
import AuthService from '../../services/auth.service';

export const login = (email, password) => ({
  type: LOGIN,
  payload: AuthService.login(email, password)
});

export const signup = (name, email, password) => ({
  type: SIGN_UP,
  payload: AuthService.signUp(name, email, password)
});
