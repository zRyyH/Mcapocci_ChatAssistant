import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatProvider from '../providers/chatProvider';
import HomeProvider from '../providers/homeProvider';


const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<ChatProvider />} />
        <Route path="/" element={<HomeProvider />} />
      </Routes>
    </Router>
  );
};


export default RoutesComponent;