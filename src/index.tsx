import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import './index.css';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Excoherence</title>
      <meta content="Excoherence" name="description" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
