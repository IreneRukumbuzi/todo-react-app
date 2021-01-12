import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import store from './redux/store';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL='http://localhost:4000';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

