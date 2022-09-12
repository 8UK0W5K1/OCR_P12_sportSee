import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Dashboard from '../pages/Dashboard/index';
import Error404 from '../pages/Error404/index';
import './app.css';

/**
 * Creation of Router in App Component
 * @returns App component
 */

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:userId' element={<Dashboard />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
