import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
// Page
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Recommendation from './pages/Recommendation';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const App = () => (
  <Box width='400px' sx={{ width: { xl: '100%' } }} m='auto'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recommendation' element={<Recommendation />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
