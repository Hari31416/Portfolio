import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ThemeSelector from './ThemeSelector';
import Theme1 from './themes/Theme1';
import Theme2 from './themes/Theme2';
import Theme3 from './themes/Theme3';
import Theme4 from './themes/Theme4';
import Theme5 from './themes/Theme5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThemeSelector />} />
        <Route path="/1/*" element={<Theme1 />} />
        <Route path="/2/*" element={<Theme2 />} />
        <Route path="/3/*" element={<Theme3 />} />
        <Route path="/4/*" element={<Theme4 />} />
        <Route path="/5/*" element={<Theme5 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
