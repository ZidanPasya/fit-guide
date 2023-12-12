import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/jumbotron.png';

const HeroBanner = () => (
  <Box
    // sx={{ mt: { lg: '120px', xs: '70px' } }}
    display="flex"
    justifyContent="space-between" // Adjust as needed
    alignItems="center" // Center vertically
    position='relative'
    p='40px'
  >
    <Stack flex="1">
      <Typography
        color='#043a59'
        fontWeight='600'
        fontSize='26px'
        fontFamily='revert'
        sx={{ fontSize: { xs: '40px', md: '50px', lg: '60px' } }}
      >
        DON'T STOP TILL <br />
        YOUR SUCCESS!
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { xs: '40px', md: '50px', lg: '60px' } }}
        mb='23px'
        mt='30px'
      >
        GET FIT TO HAPPY
      </Typography>
      <Typography fontSize='21px' fontFamily='Alegreya' lineHeight='35px'>
        We are ready to help you achieve a healthy body, wherever you are <br />
        We provide fitness solutions that can be accessed from anywhere.
      </Typography>
      <Stack>
        <a
          href='#exercises'
          style={{
            marginTop: '45px',
            textDecoration: 'none',
            width: '200px',
            textAlign: 'center',
            background: '#2D3E50',
            padding: '14px',
            fontSize: '22px',
            textTransform: 'none',
            color: 'white',
            borderRadius: '4px',
            scrollBehavior: 'smooth'
          }}
        >
          Explore Exercises
        </a>
      </Stack>
    </Stack>
    <Box flex="1" style={{ borderRadius: '50%', overflow: 'hidden' }}>
      <img
        src={HeroBannerImage}
        alt='hero-banner'
        className='hero-banner-img'
        style={{ width: '600px', height: '475px' }}
      />
    </Box>
  </Box>
);

export default HeroBanner;
