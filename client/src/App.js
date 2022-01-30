import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import AppRoutes from './routes';

import GlobalStyles from './components/styles/Global';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
