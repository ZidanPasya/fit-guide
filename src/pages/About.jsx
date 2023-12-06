import { Box, Typography } from '@mui/material';
import React from 'react';
import About from '../components/About';

const aboutPage = () => {
  return (
    <Box>
      <About />
      {/* {' '}
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
        }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        About Us
      </Typography>{' '} */}
    </Box>
  );
};

export default aboutPage;
