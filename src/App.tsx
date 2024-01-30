import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NoPage from './pages/noPage/NoPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
