import React from 'react';
import { Container, Grid, Typography, Paper, Avatar } from '@mui/material';
import { Twitter, Instagram, Facebook, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ImageProfile from '../assets/images/Logo.png';

const About = () => {
  const teamMembers = [
    {
        name: 'Rayhan Naufal Arrafi',
        role: 'Project Manager and Front-End Developer #1',
        image: ImageProfile,
        bio: 'Lorem Ipsum',
    },
    {
        name: 'Ihsan Alhakim',
        role: 'Front-End Developer #2',
        image: ImageProfile,
        bio: 'Lorem Ipsum',
    },
    {
        name: 'Muhammad Zidan Pasya',
        role: 'Back-End Developer #1',
        image: ImageProfile,
        bio: 'Lorem Ipsum',
        twitter: 'zidanpasya',
        instagram: 'zidanpasya',
        facebook: 'zidan.pasya',
        linkedin: 'zidanpasya'
    },
    {
        name: 'Lingga Alzidan Zunanto',
        role: 'Back-End Developer #2',
        image: ImageProfile,
        bio: 'Lorem Ipsum',
    },
    {
        name: 'Sofya Saharani',
        role: 'UI/UX Designer',
        image: ImageProfile,
        bio: 'Lorem Ipsum',
    },
  ];

  return (
    <Paper sx={{ bgcolor: 'background.paper', p: 4, textAlign: 'center' }}>
      <Container>
        <Typography variant='h3' gutterBottom>
          FitGuide
        </Typography>

        <Typography variant='subtitle1' gutterBottom sx={{ pb: 2 }}>
          FitGuide mmerupakan sebuah website panduan olahraga yang memberikan
          pengetahuan baik untuk masyarakat awam maupun masyarakat yang telah
          terbiasa mengenai cara berolahraga untuk membentuk tubuh ideal, menghindari
          cedera saat berolahraga, serta menggunakan alat atau beban tubuh saat berolahraga
        </Typography>

        <Typography variant='h3' gutterBottom>
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
                    <Link to={`https://www.twitter.com/${member.twitter}`}>
                      <Twitter />
                    </Link>
                  </li>
                  <li>
                    <Link to={`https://www.instagram.com/${member.instagram}`}>
                      <Instagram />
                    </Link>
                  </li>
                  <li>
                    <Link to={`https://www.facebook.com/${member.facebook}`}>
                      <Facebook />
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
    </Paper>
  );
};

export default About;
