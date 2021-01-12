import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import Todos from './components/todos';
import UpdatePage from './components/update.todo';
import './App.css';

const App = () => {
  return (
     <Router>
       <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/' component={SignUpPage} />
          <Route exact path='/todos' component={Todos} />
          <Route exact path='/todos/edit/:todoId' component={UpdatePage} />
       </Switch>
     </Router>
  );
}

export default App;
