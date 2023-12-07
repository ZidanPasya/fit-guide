import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({
  exerciseVideos,

  name,
}) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box p='40px'>
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          textAlign: { xs: 'center', lg: 'left' },
        }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Watch{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '10px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='space-between'
      >
        {exerciseVideos?.slice(0, 4)?.map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img
              style={{ borderTopLeftRadius: '20px' }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: '24px', xs: '18px' } }}
                fontWeight={600}
                color='#000'
                textAlign='justify'
              >
                {item.video.title}
              </Typography>
              <Typography fontSize='14px' color='#000'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
