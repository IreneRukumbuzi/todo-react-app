import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import todosReducer from './todo.reducer';

const allReducers = combineReducers({
  auth: authReducer,
  todo: todosReducer
});

export default allReducers;