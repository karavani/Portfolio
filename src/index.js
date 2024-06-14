import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/Portfolio">
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
