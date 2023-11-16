import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
  return (
    <Box
      sx={{ mt: { lg: '96px', xs: '60px' }, ml: { md: '100px' } }}
      minHeight='560px'
      height='auto'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      {' '}
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
        }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Page Not Found, 404 Error
      </Typography>{' '}
    </Box>
  );
};

export default NotFound;
