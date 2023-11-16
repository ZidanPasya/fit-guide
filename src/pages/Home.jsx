import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

import HeroBanner from '../components/HeroBanner';

import ChatBot from '../components/ChatBot';

const Home = () => {
  const [chatModalOpen, setChatModalOpen] = useState(false);

  return (
    <Box minHeight='560px' height='auto'>
      <HeroBanner />
      {chatModalOpen ? (
        <ChatBot onClose={() => setChatModalOpen(false)} />
      ) : (
        <Box
          position='fixed'
          bottom={16}
          right={16}
          zIndex={1000}
          onClick={() => setChatModalOpen(true)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            bgcolor: '#124C6E',
            color: 'white',
            borderRadius: '10px',
            cursor: 'pointer',
            gap: '10px',
          }}
        >
          <SmartToyOutlinedIcon sx={{ fontSize: '30px' }} />
          <Typography
            variant='h4'
            fontWeight='bold'
            sx={{ fontSize: { lg: '20px', xs: '16px' }, color: 'white' }}
          >
            Chat with FitBot
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Home;
