/** @format */

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { fetchData, youtubeOptions } from "../utils/fetchData";

import RecommendationVideos from "../components/RecommendationVideos";

const Recommendation = () => {
  const [beginnerData, setBeginnerData] = useState([]);
  const [intermediateData, setIntermediateData] = useState([]);
  const [expertData, setExpertData] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const beginner = await fetchData(
        "https://youtube-search-and-download.p.rapidapi.com/search?query=workout beginner",
        youtubeOptions
      );
      const intermediate = await fetchData(
        "https://youtube-search-and-download.p.rapidapi.com/search?query=workout intermediate",
        youtubeOptions
      );
      const expert = await fetchData(
        "https://youtube-search-and-download.p.rapidapi.com/search?query=workout expert",
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
    <Box
      sx={{ mt: { lg: "96px", xs: "60px" }, ml: { md: "100px" } }}
      minHeight="560px"
      height="auto">
      <RecommendationVideos
        beginner={beginnerData}
        intermediate={intermediateData}
        expert={expertData}
      />
    </Box>
  );
};

export default Recommendation;
