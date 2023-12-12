import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
    <Stack direction='row' justifyContent='center' gap='20px'>
      <Button
        sx={{
          color: '#fff',
          background: '#043A59',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          color: '#fff',
          background: '#FE3332',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      color='#000'
      fontWeight='bold'
      sx={{
        fontSize: { lg: '24px', xs: '20px' },
        overflow: 'hidden',
        maxWidth: '326px',
        wordBreak: 'break-word',
        textAlign: 'center',
        textOverflow: 'ellipsis',
      }}
      textTransform='capitalize'
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
