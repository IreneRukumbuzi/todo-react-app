import {GET_TODOS, GET_TODO, UPDATE_TODO, DELETE_TODO, CREATE_TODO} from '../actionTypes/actionTypes';
import {rejected, fulfilled} from '../../utils/action.utils';
import initialState from '../initialStates/todo';

const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case fulfilled(GET_TODOS):
      return {
        ...state,
        todos: {
          items: payload.data.todos,
          message: payload.data.message
        }
      };
    case rejected(GET_TODOS):
      return {
        ...state,
        todos: {
          message: payload.response
        }
      }
    case fulfilled(GET_TODO):
      return {
        ...state,
        todos: {
          item: payload.data.todo
        }
      }
    case fulfilled(CREATE_TODO):
      return {
        ...state,
        todos: {
          items: [payload.data.newTodo].concat(state.todos.items)
        }
      }
    case fulfilled(UPDATE_TODO):
      const index = state.todos.items.findIndex(item => item.id === payload.data.updatedTodo.id);
      const updatedItems = state.todos.items.splice(index, 1, payload.data.updatedTodo);

      return {
        ...state,
        todos: {
          items: [...updatedItems],
          message: payload.data.message
        }
      }
    case fulfilled(DELETE_TODO): 
     const newItems = state.todos.items;
     newItems.splice(state.todos.index, 1);

     return {
       ...state,
       todos: {
        items: [...updatedItems]
       }
     }
    case rejected(GET_TODO): 
      return {
        ...state,
        todos: {
         ...state 
        }
      }
    case rejected(CREATE_TODO): 
      return {
        ...state,
        todos: {
         ...state,
         message: payload.data 
        }
      }
    case rejected(UPDATE_TODO): 
      return {
        ...state,
        todos: {
         ...state,
         message: payload.data
        }
      }
    case rejected(DELETE_TODO): 
      return {
        ...state,
        todos: {
         ...state,
         message: payload.data
        }
      }
    case 'SAVE_INDEX': 
      return {
        ...state,
        todos: {
          items: [...state.todos.items],
          message: state.todos.message,
          index: payload
        }
      }
    default:
      return state
  }
}

export default todosReducer;