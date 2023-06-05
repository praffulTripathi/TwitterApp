import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { APIDataProvider } from './App/Providers/APIContext';
import BigSpinner from './App/LeftPanel/BigSpinner';

const AppLazy = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<BigSpinner/>}>
    <APIDataProvider>
      <AppLazy />
    </APIDataProvider>
  </Suspense>
);

reportWebVitals();
