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
      sx={{ mt: { lg: '96px', xs: '60px' }, ml: { md: '100px' } }}
      minHeight='560px'
      height='auto'
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

      {favoriteExercise?.length > 0 ? (
        favoriteExercise?.map((exerciseFav, idx) => (
          <Stack flexDirection='row' flexWrap='wrap' gap='30px'>
            <ExerciseCard key={idx} exercise={exerciseFav} />
          </Stack>
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
    </Box>
  );
};

export default Favorite;
