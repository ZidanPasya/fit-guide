/** @format */

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { fetchData, youtubeOptions } from '../utils/fetchData';

import RecommendationVideos from '../components/RecomendationVideos';

const Recommendation = () => {
  const [beginnerData, setBeginnerData] = useState([]);
  const [intermediateData, setIntermediateData] = useState([]);
  const [expertData, setExpertData] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const beginner = await fetchData(
        'https://youtube-search-and-download.p.rapidapi.com/search?query=workout beginner',
        youtubeOptions
      );
      const intermediate = await fetchData(
        'https://youtube-search-and-download.p.rapidapi.com/search?query=workout intermediate',
        youtubeOptions
      );
      const expert = await fetchData(
        'https://youtube-search-and-download.p.rapidapi.com/search?query=workout expert',
        youtubeOptions
      );
      console.log(beginner, intermediate, expert);
      setBeginnerData(beginner.contents);
      setIntermediateData(intermediate.contents);
      setExpertData(expert.contents);
    };

    fetchExercisesData();
  }, []);
  return (
    <Box p='40px'>
      <RecommendationVideos
        beginner={beginnerData}
        intermediate={intermediateData}
        expert={expertData}
      />
    </Box>
  );
};

export default Recommendation;
