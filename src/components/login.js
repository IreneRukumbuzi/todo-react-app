import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, Button, Header, Grid} from 'semantic-ui-react';
import {login} from '../redux/actions/auth.action';

const LoginPage = () => {
  const newState = useSelector(state => state);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const { token } = newState.auth.login;

    if(token){
      localStorage.setItem('token', token)
      window.location.replace('/todos')
    }
  })

  return(
    <div>
    <Grid centered>
    <Grid.Column style={{maxWidth:550, marginTop:50} }>
    <Form onSubmit={(e) => {
      e.preventDefault()
      setSubmitted(true);

      dispatch(login(email, password))
    }}>
    <Header>Login</Header>
    {newState.auth.login.message && <div className='invalid-feedback'>{newState.auth.login.message}</div> }
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' type='email' onChange={(e) => {setEmail(e.target.value)}} />
      {submitted && !email && <div className='invalid-feedback'>Email is required</div>}
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' type='password' onChange={(e) => {setPassword(e.target.value)}}  />
      {submitted && !password && <div className='invalid-feedback'>Password is required</div>}
    </Form.Field>
    <Form.Field>
      <Link to='/'><h4>Don't have account? Sign up here!</h4></Link>
    </Form.Field>
    <Button fluid primary type='submit'>Login</Button>
  </Form>
  </Grid.Column>
  </Grid>
  </div>
  )
}

export default LoginPage;