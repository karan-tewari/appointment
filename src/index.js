import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';


const app = (

  <BrowserRouter>
  <App/>
  </BrowserRouter>)

ReactDOM.render(
  app,
  document.getElementById('root')
);

