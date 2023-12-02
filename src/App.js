import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
// Page
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorite from './pages/Favorite';
import NotFound from './pages/NotFound';

const App = () => (
  <Box width='400px' sx={{ width: { xl: '100%' } }} m='auto'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='favorite' element={<Favorite />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
