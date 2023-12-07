import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises }) => (
  <Box p='40px'>
    <Typography
      sx={{ fontSize: { lg: '44px', xs: '25px' } }}
      fontWeight={700}
      color='#000'
      mb='33px'
    >
      Similar{' '}
      <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
        Target Muscle
      </span>{' '}
      exercises
    </Typography>
    <Stack direction='row' sx={{ position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
