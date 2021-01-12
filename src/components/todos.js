/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button, List, Checkbox,Header, Form, Grid } from 'semantic-ui-react';
import { getTodos, createTodo, deleteTodo} from '../redux/actions/todo.action'
import './todos.scss';

const Todos = () => {
  const newState = useSelector(state => state);
  const dispatch = useDispatch();

  const [todoItem, setTodo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const handleAdd = (e) => {
    e.preventDefault()
    setSubmitted(true);

    dispatch(createTodo(todoItem))
  }

  const handleDelete = (index) => {
    dispatch({type: 'SAVE_INDEX', payload: index})
    dispatch(deleteTodo(index))
  }

  return (
    <div className='container'>
      <div className='add-todo'>
          <Grid centered>
            <Grid.Column style={{maxWidth:550, marginTop:50} }>
              <Form onSubmit={handleAdd}>
                <Header>Create Todo</Header>
                <Form.Field>
                  <label>Todo</label>
                  <input placeholder='Todo' onChange={(e) => {setTodo(e.target.value)}} />
                  {submitted && !todoItem && <div className='invalid-feedback'>Todo is required</div>}
                </Form.Field>
              <Button fluid color='green' type='submit'>Create Todo</Button>
              </Form>
          </Grid.Column>
        </Grid>
        </div>
        <List className='todo-list' verticalAlign='middle'>
          {newState.todo.todos.items.length === 0 ? <div style={{color: 'yellow'}}>No Todos created Yet!</div> : newState.todo.todos.items.map((todo, index) => 
            <List.Item className='list-item' key={todo.id}>
                <Checkbox></Checkbox>
                <List.Content className='list-content'>{todo.item}</List.Content>
                <List.Content floated='right'>
                  <Link to={`/todos/edit/${todo.id}`}>
                  <Button color='yellow'>Edit</Button>
                  </Link>
                  <Button color='red' onClick={() => handleDelete(index)}>Delete</Button>
                </List.Content>    
            </List.Item>
          )}   
        </List>
    </div>
  )
}

export default Todos;