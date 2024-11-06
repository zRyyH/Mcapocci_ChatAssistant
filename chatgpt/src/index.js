import React from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import RoutesComponent from './routes'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <RoutesComponent />
    </Router>
  </React.StrictMode>
);