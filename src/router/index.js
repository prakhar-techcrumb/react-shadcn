import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerList from '@/pages/player/list';
import InteractiveVideoCreate from '@/pages/studio/creatives/interactiveVideo';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/players" element={<PlayerList />} />
      <Route path="/video" element={<InteractiveVideoCreate/>}/>
      {/* Add more routes here as your app grows */}
    </Routes>
  );
};

export default AppRoutes;
