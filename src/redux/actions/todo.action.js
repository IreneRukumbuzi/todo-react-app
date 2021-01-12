import { GET_TODOS, GET_TODO, DELETE_TODO, UPDATE_TODO, CREATE_TODO } from '../actionTypes/actionTypes';
import TodosService from '../../services/todos.service';

export const getTodos = () => ({
  type: GET_TODOS,
  payload: TodosService.getTodos()
});

export const getTodo = (todoId) => ({
  type: GET_TODO,
  payload: TodosService.getTodo(todoId)
});

export const updateTodo = (todoId, item, isCompleted) => ({
  type: UPDATE_TODO,
  payload: TodosService.updateTodo(todoId, item, isCompleted)
});

export const createTodo = (item) => ({
  type: CREATE_TODO,
  payload: TodosService.createTodo(item)
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: TodosService.deleteTodo(todoId)
});

