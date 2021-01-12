import http from '../helpers/axios';

const config = {
  headers: {
    token: localStorage.getItem('token')
  }
};


class TodosService {
  static getTodos(){
    const response = http.get('/todos', config);
    return response;
  }

  static getTodo(todoId){
    const response = http.get(`/todos/${todoId}`, config);
    return response;
  }

  static createTodo(item){
    const response = http.post('/todos', {item}, config);
    return response;
  }

  static updateTodo(todoId, item, isCompleted){
    const response = http.patch(`/todos/${todoId}`, {item, isCompleted}, config);
    return response;
  }

  static deleteTodo(todoId){
    const response = http.delete(`/todos/${todoId}`, config);
    return response;
  }
}

export default TodosService;