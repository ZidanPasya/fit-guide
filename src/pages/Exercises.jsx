import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import Loader from '../components/Loader';

const Exercises = () => {
  const [exercisesData, setExercisesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  const [filters, setFilters] = useState({ bodyPart: '', equipment: '' });
  const [exercisesDisplay, setExercisesDisplay] = useState([]);

  const handleFilter = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  // get All Exercises when onMounted
  useEffect(() => {
    const fetchExercisesData = async () => {
      // const exercisesDataFetch = await fetchData(
      //   'https://zuka.p.rapidapi.com/',
      //   exerciseOptions
      // );
      // setExercisesData(exercisesDataFetch.exercices);
      // setExercisesDisplay(exercisesDataFetch.exercices);

      const exercisesDataFetch = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=1000',
        exerciseOptions
      );
      console.log(exercisesDataFetch);
      setExercisesData(exercisesDataFetch);
      setExercisesDisplay(exercisesDataFetch);
    };

    fetchExercisesData();
  }, []);

  // filter Exercises
  useEffect(() => {
    const tempData = [...exercisesData];
    const filteredExercisesData = tempData.filter((item) =>
      Object.entries(filters).every(([key, value]) => item[key].includes(value))
    );
    setExercisesDisplay(filteredExercisesData);
  }, [filters]);

  // Pagination Logic
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercisesDisplay.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!exercisesData.length)
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

  return (
    <Box minHeight='560px' height='auto'>
      <Stack
        direction='row'
        marginBottom='80px'
        padding='40px'
        bgcolor='#124C6E'
        flexWrap='wrap'
      >
        <FormControl
          sx={{ margin: '20px', minWidth: '200px', bgcolor: '#fff' }}
        >
          <InputLabel htmlFor='bodyPart' sx={{ color: '#111' }}>
            Filter by BodyParts:
          </InputLabel>
          <Select
            label='Filter by bodyPart'
            name='bodyPart'
            value={filters.bodyPart}
            onChange={handleFilter}
          >
            <MenuItem value=''>No Choose</MenuItem>
            <MenuItem value='back'>Back</MenuItem>
            <MenuItem value='cardio'>Cardio</MenuItem>
            <MenuItem value='chest'>Chest</MenuItem>
            <MenuItem value='lower arms'>Lower Arms</MenuItem>
            <MenuItem value='lower legs'>Lower Legs</MenuItem>
            <MenuItem value='neck'>Neck</MenuItem>
            <MenuItem value='shoulders'>Shoulders</MenuItem>
            <MenuItem value='upper arms'>Upper Arms</MenuItem>
            <MenuItem value='upper legs'>Upper Legs</MenuItem>
            <MenuItem value='waist'>Waist</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ margin: '20px', minWidth: '200px', bgcolor: '#fff' }}
        >
          <InputLabel htmlFor='equipment' sx={{ color: '#111' }}>
            Filter by Equipment:
          </InputLabel>
          <Select
            label='Filter by equipment'
            name='equipment'
            value={filters.equipment}
            onChange={handleFilter}
          >
            <MenuItem value=''>No Choose</MenuItem>
            <MenuItem value='assisted'>Assisted</MenuItem>
            <MenuItem value='band'>Band</MenuItem>
            <MenuItem value='barbell'>Barbell</MenuItem>
            <MenuItem value='body weight'>Body Weight</MenuItem>
            <MenuItem value='cable'>Cable</MenuItem>
            <MenuItem value='dumbbell'>Dumbbell</MenuItem>
            <MenuItem value='ez barbell'>Ez Barbell</MenuItem>
            <MenuItem value='resistance band'>Resistance Band</MenuItem>
            <MenuItem value='rope'>Rope</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Stack
        direction='row'
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.length > 0 ? (
          currentExercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))
        ) : (
          <Stack
            display='flex'
            alignItems='center'
            justifyContent='center'
            height='400px'
          >
            <Typography
              variant='h4'
              fontWeight='bold'
              sx={{ fontSize: { lg: '44px', xs: '30px' } }}
            >
              No Exercises Founded
            </Typography>
          </Stack>
        )}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems='center'>
        {currentExercises?.length > 0 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={parseInt(
              Math.ceil(exercisesDisplay.length / exercisesPerPage)
            )}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
