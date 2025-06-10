import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerPage from '../pages/player';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PlayerPage />} />
      {/* Add more routes here as your app grows */}
    </Routes>
  );
};

export default AppRoutes;
