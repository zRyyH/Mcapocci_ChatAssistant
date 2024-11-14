import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from './providers/appProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);