import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Box, Typography, Stack } from '@mui/material';

import { db } from '../utils/favoriteExercise';
import ExerciseCard from '../components/ExerciseCard';

const Favorite = () => {
  const { exercise } = db;
  const favoriteExercise = useLiveQuery(() => exercise.toArray(), []);

  return (
    <Box
      minHeight='560px'
      height='auto'
      p='40px'
    >
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          textAlign: { xs: 'center', lg: 'left' },
        }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Your favorite exercises
      </Typography>

      <Stack
        direction='row'
        flexWrap='wrap'
        gap='30px'
        justifyContent='space-between'
      >
        {favoriteExercise?.length > 0 ? (
          favoriteExercise?.map((exerciseFav, idx) => (
            <ExerciseCard key={idx} exercise={exerciseFav} />
          ))
        ) : (
          <Typography
            variant='h4'
            fontWeight='bold'
            sx={{
              fontSize: { lg: '24px', xs: '18px' },
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            No Exercises Founded
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default Favorite;
