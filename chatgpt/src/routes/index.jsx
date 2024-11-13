import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from '../pages/homePage';
import ChatProvider from '../providers/chatProvider';


const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<ChatProvider />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;