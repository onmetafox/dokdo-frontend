import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './views/HomePage';

import "./styles/style.css";
import "./styles/colours.css";
import "./styles/font.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage/>} />
      </Route>
    </Routes>
  );
}

export default App;
