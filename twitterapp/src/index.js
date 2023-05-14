import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { APIDataProvider } from './App/Providers/APIContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <APIDataProvider>
    <App />
  </APIDataProvider>
);

reportWebVitals();
