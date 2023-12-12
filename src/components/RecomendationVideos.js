/** @format */

import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const RecommendationVideos = ({ beginner, intermediate, expert }) => {
  if (!beginner.length || !intermediate.length || !expert.length) {
    return (
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        height='600px'
      >
        <Loader />
      </Box>
    );
  }
  return (
    <Box>
      {/* beginner */}
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          textAlign: { xs: 'center', lg: 'left' },
        }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Workout for{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          beginner
        </span>{' '}
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '10px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
        marginBottom='40px'
      >
        {beginner?.slice(0, 8)?.map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={item?.video?.thumbnails[0].url}
              alt={item?.video?.title}
            />
            <Box sx={{ padding: '10px' }}>
              <Typography
                sx={{ fontSize: { lg: '20px', xs: '18px' } }}
                fontWeight={600}
                color='#000'
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
      {/* Intermediate */}
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          textAlign: { xs: 'center', lg: 'left' },
        }}
        fontWeight={700}
        color='#000'
        mt='33px'
        mb='33px'
      >
        Workout for{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          intermediate
        </span>{' '}
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '10px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
        marginBottom='40px'
      >
        {intermediate?.slice(0, 8)?.map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={item?.video?.thumbnails[0].url}
              alt={item?.video?.title}
            />
            <Box sx={{ padding: '10px' }}>
              <Typography
                sx={{ fontSize: { lg: '20px', xs: '18px' } }}
                fontWeight={600}
                color='#000'
              >
                {item?.video?.title}
              </Typography>
              <Typography fontSize='14px' color='#000'>
                {item?.video?.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
      {/* Expert */}
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          textAlign: { xs: 'center', lg: 'left' },
        }}
        fontWeight={700}
        color='#000'
        mt='33px'
        mb='33px'
      >
        Workout for{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          expert
        </span>{' '}
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '10px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
        marginBottom='40px'
      >
        {expert?.slice(0, 8)?.map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={item?.video?.thumbnails[0].url}
              alt={item?.video?.title}
            />
            <Box sx={{ padding: '10px' }}>
              <Typography
                sx={{ fontSize: { lg: '20px', xs: '18px' } }}
                fontWeight={600}
                color='#000'
              >
                {item?.video?.title}
              </Typography>
              <Typography fontSize='14px' color='#000'>
                {item?.video?.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default RecommendationVideos;
