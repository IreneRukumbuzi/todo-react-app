import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Grid, Form, Header, Button} from 'semantic-ui-react'
import {updateTodo} from '../redux/actions/todo.action';

const UpdatePage = () => {
  const dispatch = useDispatch();
  const newState = useSelector(state => state);

  useEffect(() => {
    const message = newState.todo.todos.message;
    if(message === 'successfully updated'){
      window.location.replace('/todos')
    }
  });

  const [todoItem, setTodoItem] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEdit = () => {
    const todoId = window.location.pathname.split('/')[3];

    setSubmitted(true);
    dispatch(updateTodo(todoId, todoItem));
  }

  return(
    <div>
        <Grid centered>
            <Grid.Column style={{maxWidth:550, marginTop:50} }>
              <Form onSubmit={() => {
                handleEdit()
                }}>
                <Header>Update Todo</Header>
                <Form.Field>
                  <label>Todo</label>
                  <input placeholder='Todo' onChange={(e) => {setTodoItem(e.target.value)}} />
                  {submitted && !todoItem && <div>Todo is required</div>}
                </Form.Field>
              <Button fluid color='green' type='submit'>Update Todo</Button>
              </Form>
          </Grid.Column>
        </Grid>
    </div>
  )
}

export default UpdatePage;