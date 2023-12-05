import React from 'react';
import { Container, Grid, Typography, Paper, Avatar, Box } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ImageProfile from '../assets/images/Logo.png';

const About = () => {
  const teamMembers = [
    {
      name: 'Rayhan Naufal Arrafi',
      role: 'Project Manager and Front-End Developer #1',
      image: ImageProfile,
      bio: 'Lorem Ipsum',
      github: 'rayhannn11',
      linkedin: 'rayhan-naufal-arrafi-b02175229'
    },
    {
      name: 'Ihsan Alhakim',
      role: 'Front-End Developer #2',
      image: ImageProfile,
      bio: 'Lorem Ipsum',
      github: 'IhsanAlhakim',
      linkedin: 'ihsan-alhakim-03515b29a'
    },
    {
      name: 'Muhammad Zidan Pasya',
      role: 'Back-End Developer #1',
      image: ImageProfile,
      bio: 'Lorem Ipsum',
      github: 'ZidanPasya',
      linkedin: 'zidanpasya'
    },
    {
      name: 'Lingga Alzidan Zunanto',
      role: 'Back-End Developer #2',
      image: ImageProfile,
      bio: 'Lorem Ipsum',
      github: 'Linggaaaaa',
      linkedin: 'lingga-alzidan-zunanto-7b437b233'
    },
    {
      name: 'Sofya Saharani',
      role: 'UI/UX Designer',
      image: ImageProfile,
      bio: 'Lorem Ipsum',
      github: 'sofyasaharani',
      linkedin: 'sofya-saharani-0888991a1'
    },
  ];

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ backgroundColor: '#124c6e', color: 'white' }}>
        <Container sx={{ pt: 2, pb: 2 }}>
          <Typography variant='h3' gutterBottom>
            FitGuide
          </Typography>

          <Typography variant='subtitle1' gutterBottom>
            FitGuide merupakan sebuah website panduan olahraga yang memberikan
            pengetahuan baik untuk masyarakat awam maupun masyarakat yang telah
            terbiasa mengenai cara berolahraga untuk membentuk tubuh ideal, menghindari
            cedera saat berolahraga, serta menggunakan alat atau beban tubuh saat berolahraga
          </Typography>
        </Container>
      </Box>

      <Container>
        <Typography variant='h3' gutterBottom sx={{ pt: 2 }}>
          The Team Behind FitGuide
        </Typography>

        <Grid container spacing={4} justifyContent='center'>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 150, height: 150, mx: 'auto' }}
                />

                <Typography
                  variant='h5'
                  gutterBottom
                  sx={{ pt: 2 }}
                >
                  {member.name}
                </Typography>

                <Typography
                  variant='subtitle1'
                  color='textSecondary'
                  gutterBottom
                >
                  {member.role}
                </Typography>

                <Typography paragraph>{member.bio}</Typography>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <li>
                    <Link to={`https://www.github.com/${member.github}`}>
                      <GitHub />
                    </Link>
                  </li>
                  <li>
                    <Link to={`https://www.linkedin.com/in/${member.linkedin}`}>
                      <LinkedIn />
                    </Link>
                  </li>
                </ul>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
