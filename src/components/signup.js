import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Button, Grid, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {signup} from '../redux/actions/auth.action';

const SignUpPage = () => {
  const newState = useSelector(state => state);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(newState);
    const message = newState.auth.signup.message
    console.log();

    if(message === 'User successfully created'){
      window.location.replace('/login')
    }
  })

  return(
    <div>
    <Grid centered>
    <Grid.Column style={{maxWidth: 550, marginTop: 50}}>
    <Form onSubmit={(e) => {
      e.preventDefault();
      setSubmitted(true);

      dispatch(signup(name, email, password));
    }}>
    <Header>Sign Up</Header>
    {newState.auth.signup.message && <div className='invalid-feedback'>{newState.auth.signup.message}</div> }
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' onChange={(e) => {setName(e.target.value)}} />
      {submitted && !name && <div className='invalid-feedback'>Enter a name</div>}
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' type='email' onChange={(e) => {setEmail(e.target.value)}} />
      {submitted && !email && <div className='invalid-feedback'>Enter an email</div>}
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' type='password' onChange={(e) => {setPassword(e.target.value)}} />
      {submitted && !password && <div className='invalid-feedback'>Enter a password</div>}
    </Form.Field>
    <Form.Field>
    <Link to='/login'><h4>Already Signed up? Login in here!</h4></Link>
    </Form.Field>
    <Button type='submit' primary fluid>Sign Up</Button>
  </Form>
  </Grid.Column>
  </Grid>
  </div>
  )
}

export default SignUpPage;