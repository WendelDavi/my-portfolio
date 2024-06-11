import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { ComponentProvider } from './contexts/ComponentContext';

ReactDOM.render(
  <React.StrictMode>
    <ComponentProvider>
      <App />
    </ComponentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
