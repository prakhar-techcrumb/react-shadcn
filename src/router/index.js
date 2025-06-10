import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerList from '@/pages/player/list';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PlayerList />} />
      {/* Add more routes here as your app grows */}
    </Routes>
  );
};

export default AppRoutes;
