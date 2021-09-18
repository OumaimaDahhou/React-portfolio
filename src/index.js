import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Mouse from './components/Mouse';

ReactDOM.render(
  <Router>
     <Mouse />
    <App />
    </Router>,
  document.getElementById('root')
);
